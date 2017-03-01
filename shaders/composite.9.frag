precision mediump float;varying vec2 v_coordinates;uniform sampler2D u_renderingTexture;uniform sampler2D u_occlusionTexture;uniform vec2 u_resolution;uniform float u_fov;uniform mat4 u_inverseViewMatrix;uniform sampler2D u_shadowDepthTexture;uniform vec2 u_shadowResolution;uniform mat4 u_lightProjectionViewMatrix;float a(float b,float c,float d){return clamp((d-b)/(c-b),0.0,1.0);}vec3 e(vec3 f){vec4 g=vec4(2.0,1.0,0.8,4.0);vec3 h=abs(fract(f.xxx+g.xyz)*2.0-g.www);return f.z*mix(g.zzz,clamp(h-g.xxx,0.0,1.0),h.y);}void main(){vec4 i=texture2D(u_renderingTexture,v_coordinates);float j=texture2D(u_occlusionTexture,v_coordinates).r;vec3 k=vec3(i.x,i.y,sqrt(1.0-i.x*i.x-i.y*i.y));float l=i.a;vec3 m=vec3((v_coordinates.x*2.0-1.0)*tan(u_fov/2.0)*u_resolution.x/u_resolution.y,(v_coordinates.y*2.0-1.0)*tan(u_fov/2.0),-1.0);vec3 n=m*-l;vec3 o=vec3(u_inverseViewMatrix*vec4(n,1.0));float p=i.b;vec3 q=e(vec3(max(1.0-p*0.0225,0.12),0.95,1.0));vec4 r=u_lightProjectionViewMatrix*vec4(o,1.0);r/=r.w;r*=0.5;r+=0.5;vec2 s=r.xy;float t=0.8;const int u=2;const float v=float(u*2+1)*float(u*2+1);for(int w=-u;w<=u;++w){for(int x=-u;x<=u;++x){float y=texture2D(u_shadowDepthTexture,s+5.0*vec2(float(w),float(x))/u_shadowResolution).r;if(r.z>y+0.001) t-=1.0/v;}}float z=1.0-j*0.7;float A=1.0-(1.0-t)*0.8;q*=z*A;if(p>=0.0){gl_FragColor=vec4(q,1.0);}else{vec3 B=vec3(0.0)-length(v_coordinates*2.0-1.0)*0.1;gl_FragColor=vec4(B,1.0);}}