import { useEffect, useRef, Suspense, lazy } from 'react';
import { useLoading } from '../context/LoadingProvider';
import { setProgress } from './Loading';

const Spline = lazy(() => import('@splinetool/react-spline'));

const ROBOT_SCENE_URL = 'https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode';

const RobotScene = () => {
  const { setLoading } = useLoading();
  const progressRef = useRef<ReturnType<typeof setProgress> | null>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    progressRef.current = setProgress((value) => setLoading(value));
    return () => {
      progressRef.current?.clear?.();
    };
  }, []);

  const handleSplineLoad = () => {
    if (loadedRef.current) return;
    loadedRef.current = true;
    progressRef.current?.loaded();
  };

  return (
    <div className="hero-robot-wrapper">
      <Suspense fallback={null}>
        <Spline
          scene={ROBOT_SCENE_URL}
          className="hero-robot-canvas"
          onLoad={handleSplineLoad}
        />
      </Suspense>
      {/* bottom fade so robot blends into the section */}
      <div className="hero-robot-fade" />
    </div>
  );
};

export default RobotScene;


