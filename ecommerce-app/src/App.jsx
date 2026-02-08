import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GalleryContainer from "./components/GalleryContainer";
import PageLayout from "./components/PageLayout";
import { reviewLists } from "./data/reviews";
import Review from "./components/Review";
import FormHandler from "./components/FormHandler";
import Timer from "./components/Timer";
import DataFetcher from "./components/DataFetcher";
import ReactDropdown from "./components/ReactDropdown";
import PostDetails from "./components/PostDetails";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import CommentDetails from "./components/CommentDetails";
import ContextDemo from "./components/ContextDemo";
import { useUser } from "./context/Context";
import UseRefDemo from "./components/UseRefDemo";
import LogInPage from "./components/LogInPage";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/PageLayout";
import { AuthContext } from "./context/AuthContext";

const postInfo = [
  {
    id: 1,
    title: "shutterstock 1",
    desc: "lorem ipsum abcde",
    url: "",
  },
  {
    id: 2,
    title: "shutterstock 2",
    desc: "lorem ipsum abcde",
    url: "https://imgs.search.brave.com/Ce-oNGlucFUmvnSYAFMnxSuYPf1T6f8HvFQzgvWzOxg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3RvY2twaG90b3Nl/Y3JldHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzEx/L2hvdy10by1wdXJj/aGFzZS1zaHV0dGVy/c3RvY2staW1hZ2Vz/LmpwZw",
  },
  {
    id: 3,
    title: "shutterstock 3",
    desc: "lorem ipsum abcde",
    url: "https://imgs.search.brave.com/Ce-oNGlucFUmvnSYAFMnxSuYPf1T6f8HvFQzgvWzOxg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3RvY2twaG90b3Nl/Y3JldHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzEx/L2hvdy10by1wdXJj/aGFzZS1zaHV0dGVy/c3RvY2staW1hZ2Vz/LmpwZw",
  },
  {
    id: 4,
    title: "shutterstock 4",
    desc: "lorem ipsum abcde",
    url: "https://imgs.search.brave.com/Ce-oNGlucFUmvnSYAFMnxSuYPf1T6f8HvFQzgvWzOxg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3RvY2twaG90b3Nl/Y3JldHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzEx/L2hvdy10by1wdXJj/aGFzZS1zaHV0dGVy/c3RvY2staW1hZ2Vz/LmpwZw",
  },
];

const HomePage = () => {
  const [input, setInput] = useState("");
  const { setUser } = useUser();

  const handleChange = (e) => {
    setInput(e.target.value);
    setUser((prev) => ({ ...prev, name: e.target.value }));
  };
  return (
    <>
      <h1>Hello</h1>
      <input
        type="text"
        placeholder="enter name"
        onChange={handleChange}
        value={input}
      />
    </>
  );
};

const UserDashboardPage = () => {
  return (
    <div>
      <div>UserDashboardPage</div>
    </div>
  );
};
const AdminDashboardPage = () => {
  return (
    <div>
      <div>AdminDashboardPage</div>
    </div>
  );
};

const SettingsDashboardPage = () => {
  return (
    <div>
      <div>SettingsDashboardPage</div>
    </div>
  );
};

// const DashboardLayout = () => {
//   return (
//     <div>
//       <header>Navbar</header>
// <div className="main-section">
//   <Outlet />
// </div>
//       <footer>Footer</footer>
//     </div>
//   );
// };

function App() {
  const [count, setCount] = useState(2);
  const [width, setWidth] = useState(0);
  const [posts, setPosts] = useState(postInfo);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const { login, user: userAuthData } = useContext(AuthContext);

  const [user, setUser] = useState({
    name: "John",
    age: 25,

    /// 20 diff fields
  });

  useEffect(() => {
    document.title = `ecommerce-app (${count})`;
  }, [count]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     // console.log(window.innerWidth, window.innerHeight);
  //     setWidth(window.innerWidth)
  //   }

  //   //my app is not supproted for mboile

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // })

  const handleDelete = (postId) => {
    const filteredPosts = postInfo.filter((p) => p.id !== postId);
    setPosts(filteredPosts);
  };

  const handleUpdateUser = () => {
    const name = prompt("Enter user name");
    console.log(name);

    if (!name) return;

    // user.name = name;
    // console.log('updated user', user)
    // setUser({
    //   ...user,
    //   name: name,
    // })

    setUser((prev) => {
      return {
        ...prev,
        name,
      };
    });

    // 1. it will check for the referetial equality
    // 2. then it will update the state
    // 3. it will re-redner your component
  };

  //flushSync
  const handleCounter = () => {
    // // setCount(count + 1) // 3+1
    // // setCount(count + 1) // 3+1
    // // setCount(count + 1)//3+1

    setCount((prev) => prev + 1); // 1
    setUser((prev) => {
      return {
        ...prev,
        name: "ABCDS",
      };
    }); //1
    // setCount(prev => prev + 1)
    // setCount(prev => prev + 1)
  };

  // const getCurrentTime = () => {
  //   return `${hour} : ${min} : ${sec}`
  // }

  // const [hour, setHour] = useState(null)
  // const [min, setMin] = useState(null)
  // const [sec, setSec] = useState(null)
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {

  //   const timer = setInterval(() => {
  //     const dt = new Date();
  //     setHour(dt.getHours())
  //     setMin(dt.getMinutes())
  //     setSec(dt.getSeconds())
  //     setLoading(false)
  //     console.log("intervalrunning")
  //   }, 1000)
  //   return () => (clearInterval(timer))
  // }, [])
  // useEffect(() => {
  //   setTimeout(()=>{
  //     setHour(dt.getHours())
  //     setMin(dt.getMinutes())
  //     setSec(dt.getSeconds())
  //     setLoading(false)
  //   },1000)
  // },[sec])

  // setInterval(() => {
  //   setHour(dt.getHours())
  //   setMin(dt.getMinutes())
  //   setSec(dt.getSeconds())
  //   setLoading(false)
  // }, 1000)

  const [input, setInput] = useState(
    () => JSON.parse(localStorage.getItem("inputValue")) || "",
  );
  const [mode, setMode] = useState("debounce");
  const [last, setLast] = useState(0);
  function autoSavedebounce(e) {
    setInput(e.target.value);
    console.log(e.target.value);
    const timerId = setTimeout(() => {
      localStorage.setItem("inputValue", JSON.stringify(e.target.value));
    }, 3500);
    return () => clearTimeout(timerId);
  }
  function autoSaveTrotling(e) {
    setInput(e.target.value);
    let now = Date.now();
    console.log(now - last);
    if (now - last >= 1000) {
      localStorage.setItem("inputValue", JSON.stringify(e.target.value));
      setLast(now);
    }
  }

  // function autoSave2(){
  //   console.log("save2")
  // }
  // function autoSave3(){
  //   console.log("save3")
  // }

  return (
    <>
      <Navbar
        // links={
        //   userAuthData
        //     ? [
        //         { label: "User", path: "/dashboard/users" },
        //         { label: "admin", path: "/dashboard/admin" },
        //         { label: "settings", path: "/dashboard/settings" },
        //       ]
        //     : [{ label: "login", path: "/login" }]

        links={
          [
            ...(!userAuthData ? [{ label: "login", path: "/login" }] : []),
            ...(userAuthData
              ? [
                  { label: "User", path: "/dashboard/users" },
                  { label: "admin", path: "/dashboard/admin" },
                  { label: "settings", path: "/dashboard/settings" },
                ]
              : []),
          ]
          // [

          // { label: "PostDetails", path: "/posts" },
          // { label: "Hello", path: "/" },
          // { label: "context", path: "/context" },

          // { label: "login", path: "/login" },
          // { label: "User", path: "/dashboard/users" },
          // { label: "admin", path: "/dashboard/admin" },
          // { label: "settings", path: "/dashboard/settings" },
          // ]
        }
        // variant="secondary"
        showThemeToggler={true}
      />

      <Routes>
        <Route path="/" element={<UseRefDemo />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/posts" element={<PostDetails />} />
        <Route path="/comments/:postId" element={<CommentDetails />} />
        <Route path="*" element={<h1>Page not found</h1>} />

        <Route path="/context" element={<ContextDemo />} />

        {/* <Route path="/dashboard/users" element={<UserDashboardPage />} />
        <Route path="/dashboard/admin" element={<AdminDashboardPage />} />
        <Route path="/dashboard/settings" element={<SettingsDashboardPage />} /> */}

        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* <Route index element={<UserDashboardPage />} />  */}
          <Route index element={<Navigate to="users" />} />
          <Route path="users" element={<UserDashboardPage />} />
          <Route path="admin" element={<AdminDashboardPage />} />
          <Route path="settings" element={<SettingsDashboardPage />} />
        </Route>
      </Routes>

      {/* <input type="text" value={input} onChange={autoSaveTrotling} />
      <input type="radio" />
      <input type="radio"/> */}

      {/* <PostDetails /> */}

      {/* <input type="text" value={input} onChange={() => autoSave2()} /> */}
      {/* <input type="text" value={input} onChange={autoSave3()} /> */}

      {/* {
        !loading && <span>{getCurrentTime()}</span>
      } */}
      {/* <ReactDropdown /> */}
      {/* <FormHandler /> */}
      {/* {isTimerActive ? <Timer /> : <p>timer is not active</p>
      } */}

      {/* <DataFetcher /> */}
      {/* <button onClick={() => setIsTimerActive((prev) => !prev)}>toggle</button> */}

      {/* <div className="card">
        <button onClick={() => setCount(prev => prev - 1)}
          disabled={count <= 0}
        >
          -
        </button>
        <span className='counter-span'>count is {count}</span>
        <button onClick={() => setCount(prev => prev + 1)}>
          +
        </button>
      </div> */}
      {/* <FormHandler />
      <PageLayout header={"header"} footer="footer">
        <div>
          <button>xab</button>
          <p>CHildren element</p>
        </div>
      </PageLayout>
      <Navbar links={["Home", "Contact Us"]} variant="secondary" />

      <Review reviewLists={reviewLists} />
      <pre>{JSON.stringify(user)}</pre>

      <button onClick={handleUpdateUser}>
        Update User
      </button>

      <br></br>

      {count}
      <br></br>

      <button onClick={handleCounter}>
        Update Count
      </button> */}
      {/* <Hero
        heading="Testimonial Section"
        left={{
          heading: "Left side heading",
          desc: "pp.jsx: JSX attributes must only be assigned a non-empty expression. (33:12)"
        }}
        right={{
          heading: "Right side heading",
          desc: "pp.jsx: JSX attributes must only be assigned a non-empty expression. (33:12)"
        }}
      />
      <GalleryContainer posts={posts} onDelete={handleDelete} /> */}

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleDecrement}
          disabled={count <= 0}
        >
          -
        </button>
        <span className='counter-span'>count is {count}</span>
        <button onClick={handleIncrement}>
          +
        </button>
      </div>

      <div>
        {count > 5 && <p>Count is greater than 5</p>}
        {count > 10 && <p>Count is greater than 10</p>}
      </div> */}
    </>
  );
}

export default App;
