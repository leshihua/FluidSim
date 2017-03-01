precision mediump float;vec3 a(vec3 b){return vec3(mod(gl_FragCoord.x,b.x),gl_FragCoord.y,floor(gl_FragCoord.x/b.x)+0.5);}vec4 c(sampler2D d,vec3 e,vec3 b){vec3 f=e*b;f=clamp(f,vec3(0.5),vec3(b-0.5));float g=floor(f.z-0.5);float h=g+1.0;float i=fract(f.z-0.5);vec2 j=vec2(g*b.x+f.x,f.y)/vec2(b.x*b.z,b.y);vec2 k=vec2(h*b.x+f.x,f.y)/vec2(b.x*b.z,b.y);return mix(texture2D(d,j),texture2D(d,k),i);}vec4 l(sampler2D d,vec3 e,vec3 b){vec3 f=e*b;f=clamp(f,vec3(0.5),vec3(b-0.5));float m=floor(f.z);vec2 n=vec2(m*b.x+f.x,f.y)/vec2(b.x*b.z,b.y);return texture2D(d,n);}precision mediump float;varying vec2 v_coordinates;uniform sampler2D u_velocityTexture;uniform vec3 u_mouseVelocity;uniform vec3 u_gridResolution;uniform vec3 u_gridSize;uniform vec3 u_mouseRayOrigin;uniform vec3 u_mouseRayDirection;uniform float u_timeStep;uniform float velocityZ;uniform float velocityW;float o(vec3 p,float q){vec3 r=(p/u_gridResolution)*u_gridSize;float s=length(cross(u_mouseRayDirection,r-u_mouseRayOrigin));float t=max(0.0,s/q);return smoothstep(1.0,0.9,t);}void main(){vec3 u=texture2D(u_velocityTexture,v_coordinates).rgb;vec3 v=u+vec3(0.0,-40.0*u_timeStep,0.0);vec3 w=floor(a(u_gridResolution+1.0));vec3 x=vec3(w.x,w.y+0.5,w.z+0.5);vec3 y=vec3(w.x+0.5,w.y,w.z+0.5);vec3 z=vec3(w.x+0.5,w.y+0.5,w.z);float A=10.0;vec3 B=vec3(o(x,A),o(y,A),o(z,A));v+=u_mouseVelocity*B*3.0*smoothstep(0.0,1.0/200.0,u_timeStep);gl_FragColor=vec4(v*velocityZ,velocityW);}