uniform vec2 resolution;
uniform float time;

void main(){
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    gl_FragColor = vec4(uv, time, 1.0);
}