uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    gl_FragColor = vec4(st.x + abs(sin(u_time)) * 0.1, st.y + abs(sin(u_time)) * 0.6, 1.0, 1.0);
}