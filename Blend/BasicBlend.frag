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
	vec4 color = mix(base, blend, 0.8);
	gl_FragColor = color;
}

