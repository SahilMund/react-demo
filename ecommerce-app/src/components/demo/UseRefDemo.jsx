import React, { useEffect, useState } from "react";
import { useRef } from "react";

const useFetch = (url) => {
  // const [isPlaying, setIsPlaying] = React.useState(false);

  // useEffect(() => {
  //     const videoEle = document.querySelector('video');
  //   if (isPlaying) {
  //     videoEle.play();
  //   } else {
  //     videoEle.pause();
  //   }
  // }, [isPlaying]);

  // useEffect(() => {
  //   inputRef.current.focus()
  // }, [])
  // const videoRef = useRef(null);
  // const playVideo = () =>   videoRef.current.play();
  // const pauseVideo = () =>  videoRef.current.pause();
  //     return (
  //     <div>
  //         <video src="https://www.w3schools.com/html/movie.mp4" ref={videoRef} controls loop autoPlay></video>
  //         {/* <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button> */}
  //         <button onClick={playVideo}>play</button>
  //         <button onClick={pauseVideo}> pause</button>
  //     </div>
  //   )

  //   const [time, setTime] = useState(10);
  //     const timerRef = useRef(null);
  //   useEffect(() => {
  //     timerRef.current = setInterval(() => {
  //       setTime((prev) => {
  //         if (prev <= 1) {
  //           clearInterval(timerRef.current);
  //           return 0;
  //         }
  //         return prev - 1;
  //       });
  //     }, 1000);
  //     return () => clearInterval(timerRef.current);
  //   }, [time]);

  //   return (

  //     <>
  //       <p>{time}</p>
  //       <button onClick={() => clearInterval(timerRef.current)}>Stop Timer</button>
  //       <button onClick={() => {
  //         clearInterval(timerRef.current);
  //         setTime(10);
  //       }}>Reset Timer</button>
  //       <button onClick={() => {setTime(10); timerRef.current = setInterval(() => {
  //         setTime((prev) => {
  //           if (prev <= 1) {
  //             clearInterval(timerRef.current);
  //             return 0;
  //           }
  //           return prev - 1;
  //         });
  //       }, 1000);}}>Start Timer</button>
  //     </>
  //   );

  // const [count, setCount] = useState(0);
  // const countRef = useRef(count);
  // useEffect(() => {
  //   countRef.current = count;
  // }, [count]);
  // return(
  //     <>
  //     <p>Count: {count}</p>
  //     <p>Count Ref: {countRef.current}</p>
  //     <button onClick={() => setCount(count + 1)}>Increment Count</button>
  //     </>
  // )

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);
  useEffect(() => {
    abortControllerRef.current = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          signal: abortControllerRef.current.signal,
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // return () => {abortControllerRef.current.abort()};
  }, [url]);

  function stopFetch() {
    abortControllerRef.current.abort();
  }
  return { data, loading, error, stopFetch };
};

const UseRefDemo = () => {
  const { data, loading, error, stopFetch } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/2",
  );
  if (loading)
    return (
      <div>
        Loading...
        <button onClick={stopFetch}>Stop Fetch</button>
      </div>
    );
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default UseRefDemo;
