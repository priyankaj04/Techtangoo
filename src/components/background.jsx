import Spline from '@splinetool/react-spline';

export default function Background() {
    return (
        <div style={{ width: '100vw', height: '100vh', background:'#001302', position:'fixed' }}>
            <Spline scene="https://prod.spline.design/k-6WH2kExoXSrS2d/scene.splinecode" />
        </div>
    );
}
