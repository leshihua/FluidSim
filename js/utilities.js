"use strict";var Utilities={clamp:function(t,r,n){return Math.max(r,Math.min(n,t))},getMousePosition:function(t,r){var n=r.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}},addVectors:function(t,r,n){return t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t},subtractVectors:function(t,r,n){return t[0]=r[0]-n[0],t[1]=r[1]-n[1],t[2]=r[2]-n[2],t},magnitudeOfVector:function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])},dotVectors:function(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]},multiplyVectorByScalar:function(t,r,n){return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t},normalizeVector:function(t,r){var n=1/Utilities.magnitudeOfVector(r);return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t},makePerspectiveMatrix:function(t,r,n,i,a){var e=1/Math.tan(r/2),o=1/(i-a);return t[0]=e/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(a+i)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*a*i*o,t[15]=0,t},makeIdentityMatrix:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},premultiplyMatrix:function(t,r,n){var i=n[0],a=n[4],e=n[8],o=n[12],u=n[1],c=n[5],M=n[9],s=n[13],f=n[2],h=n[6],m=n[10],l=n[14],v=n[3],x=n[7],d=n[11],k=n[15],p=r[0],V=r[1],g=r[2],y=r[3];return t[0]=i*p+a*V+e*g+o*y,t[1]=u*p+c*V+M*g+s*y,t[2]=f*p+h*V+m*g+l*y,t[3]=v*p+x*V+d*g+k*y,p=r[4],V=r[5],g=r[6],y=r[7],t[4]=i*p+a*V+e*g+o*y,t[5]=u*p+c*V+M*g+s*y,t[6]=f*p+h*V+m*g+l*y,t[7]=v*p+x*V+d*g+k*y,p=r[8],V=r[9],g=r[10],y=r[11],t[8]=i*p+a*V+e*g+o*y,t[9]=u*p+c*V+M*g+s*y,t[10]=f*p+h*V+m*g+l*y,t[11]=v*p+x*V+d*g+k*y,p=r[12],V=r[13],g=r[14],y=r[15],t[12]=i*p+a*V+e*g+o*y,t[13]=u*p+c*V+M*g+s*y,t[14]=f*p+h*V+m*g+l*y,t[15]=v*p+x*V+d*g+k*y,t},makeXRotationMatrix:function(t,r){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=Math.cos(r),t[6]=Math.sin(r),t[7]=0,t[8]=0,t[9]=-Math.sin(r),t[10]=Math.cos(r),t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},makeYRotationMatrix:function(t,r){return t[0]=Math.cos(r),t[1]=0,t[2]=-Math.sin(r),t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=Math.sin(r),t[9]=0,t[10]=Math.cos(r),t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},transformDirectionByMatrix:function(t,r,n){var i=r[0],a=r[1],e=r[2];return t[0]=n[0]*i+n[4]*a+n[8]*e,t[1]=n[1]*i+n[5]*a+n[9]*e,t[2]=n[2]*i+n[6]*a+n[10]*e,t[3]=n[3]*i+n[7]*a+n[11]*e,t},invertMatrix:function(t,r){var n=r[0],i=r[4],a=r[8],e=r[12],o=r[1],u=r[5],c=r[9],M=r[13],s=r[2],f=r[6],h=r[10],m=r[14],l=r[3],v=r[7],x=r[11],d=r[15],k=h*d,p=m*x,V=f*d,g=m*v,y=f*x,q=h*v,B=s*d,O=m*l,R=s*x,P=h*l,U=s*v,X=f*l,Y=a*M,b=e*c,z=i*M,A=e*u,C=i*c,D=a*u,I=n*M,L=e*o,S=n*c,j=a*o,w=n*u,E=i*o,F=k*u+g*c+y*M-(p*u+V*c+q*M),G=p*o+B*c+P*M-(k*o+O*c+R*M),H=V*o+O*u+U*M-(g*o+B*u+X*M),J=q*o+R*u+X*c-(y*o+P*u+U*c),K=1/(n*F+i*G+a*H+e*J);return t[0]=K*F,t[1]=K*G,t[2]=K*H,t[3]=K*J,t[4]=K*(p*i+V*a+q*e-(k*i+g*a+y*e)),t[5]=K*(k*n+O*a+R*e-(p*n+B*a+P*e)),t[6]=K*(g*n+B*i+X*e-(V*n+O*i+U*e)),t[7]=K*(y*n+P*i+U*a-(q*n+R*i+X*a)),t[8]=K*(Y*v+A*x+C*d-(b*v+z*x+D*d)),t[9]=K*(b*l+I*x+j*d-(Y*l+L*x+S*d)),t[10]=K*(z*l+L*v+w*d-(A*l+I*v+E*d)),t[11]=K*(D*l+S*v+E*x-(C*l+j*v+w*x)),t[12]=K*(z*h+D*m+b*f-(C*m+Y*f+A*h)),t[13]=K*(S*m+Y*s+L*h-(I*h+j*m+b*s)),t[14]=K*(I*f+E*m+A*s-(w*m+z*s+L*f)),t[15]=K*(w*h+C*s+j*f-(S*f+E*h+D*s)),t},makeLookAtMatrix:function(t,r,n,i){var a=r[0]-n[0],e=r[1]-n[1],o=r[2]-n[2],u=Math.sqrt(a*a+e*e+o*o);a/=u,e/=u,o/=u;var c=i[2]*e-i[1]*o,M=i[0]*o-i[2]*a,s=i[1]*a-i[0]*e,f=Math.sqrt(c*c+M*M+s*s);c/=f,M/=f,s/=f;var h=e*s-o*M,m=o*c-a*s,l=a*M-e*c,v=Math.sqrt(h*h+m*m+l*l);h/=v,m/=v,l/=v,t[0]=c,t[1]=h,t[2]=a,t[3]=0,t[4]=M,t[5]=m,t[6]=e,t[7]=0,t[8]=s,t[9]=l,t[10]=o,t[11]=0,t[12]=-(c*r[0]+M*r[1]+s*r[2]),t[13]=-(h*r[0]+m*r[1]+l*r[2]),t[14]=-(a*r[0]+e*r[1]+o*r[2]),t[15]=1},makeOrthographicMatrix:function(t,r,n,i,a,e,o){return t[0]=2/(n-r),t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2/(a-i),t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=-2/(o-e),t[11]=0,t[12]=-(n+r)/(n-r),t[13]=-(a+i)/(a-i),t[14]=-(o+e)/(o-e),t[15]=1,t}};