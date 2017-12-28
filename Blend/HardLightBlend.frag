#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_tex0; // loaded
uniform vec2 u_tex0Resolution;
uniform sampler2D tex2; // loaded
uniform vec2 tex2Resolution;

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
	vec4 base = texture2D(u_tex0, st);
	vec4 blend = texture2D(tex2, st);
	vec4 color = blend;
	if (blend < 0.5) {
    	color = 2.0 * base * blend;
	} else {
   	 	color = vec4(1.0) - 2.0 * (vec4(1.0) - blend) * (vec4(1.0) - base);
	}
	gl_FragColor = color;
}
