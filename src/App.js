// import React from "react";
// import NewForm from "./APIintegration/NewForm";

// import "./App.css";

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import View from "./APIintegration/View";
// import EditPage from "./APIintegration/EditPage";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<NewForm />} />
//           <Route path="/View/:id" element={<View />} />
//           <Route path="/Edit/:id" element={<EditPage />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;


// import React from 'react'
// import {BrowserRouter, Route, Routes} from "react-router-dom"
// import Form from './APIintegration/NewInntegration/Form'
// import NewEditPage from './APIintegration/NewInntegration/NewEditPage'
// import NewView from './APIintegration/NewInntegration/NewView'
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//        <Routes>
//         <Route path='/' element={<Form/>}/>
//         <Route path='/NewView/:id' element={<NewView/>}/>
//         <Route path='/NewEditPage/:id' element={<NewEditPage/>}/>
//        </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Task from './Task'
// import Header from './InternShip/Header'
// import Help from './InternShip/Help'

// function App() {
  // return (
    // <div>
      // {/* <Header/> */}
      // {/* <Help/> */}
      // {/* <Task/> */}
    // {/* </div> */}
  // {/* ) */}
// {/* } */}

// {/* export default App */}

// import React from 'react'
// import Header from './BlogSpace/Header'
// import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Home from './BlogSpace/Home'
// import WriteBlogs from './BlogSpace/WriteBlogs'
// import PublishedBlog from './BlogSpace/PublishedBlog'
// function App() {
//   return (
//     <div>
//       <Header/>
//       <BrowserRouter>
//       <Routes>
//         <Route exact path='/' element={<Home/>}/>
//         <Route exact path='/'  element={<Home/>}/>
//         <Route exact path='/WriteBlogs' element={<WriteBlogs/>}/>
//         <Route exact path='/PublishedBlog' element={<PublishedBlog/>}/>
//       </Routes>
//       </BrowserRouter> 
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Header from './ReunionAssignmnet/Header'
// // import {BrowserRouter, Route, Routes} from "react-router-dom"
// import Rent from './ReunionAssignmnet/Rent'
// // import ViewPage from './ReunionAssignmnet/ViewPage'


// function App() {
//   return (
//     <div>
//       <Header/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <Rent/>
      
       
      
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import FireBaseEx from './FireBaseEx'

// function App() {
//   return (
//     <div>
//       <FireBaseEx/>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import {BrowserRouter, Routes, Route} from "react-router-dom"
// import { Context } from './NewBlogSpace/Context'
// import Home from './NewBlogSpace/Home'
// import Publishblog from './NewBlogSpace/Publishblog'
// import WriteNewBlog from './NewBlogSpace/WriteNewBlog'
// function App() {
//   const [blogId, setBlogId] = useState("")
//   const [blogContentFetch, setBlogContentFetch] = useState("")
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Context.Provider value={{blogId: blogId, setBlogId: setBlogId, blogContentFetch: blogContentFetch, setBlogContentFetch: setBlogContentFetch}}>
//            <Route exact path='/' element={<Home/>}/>
//            <Route exact path='/WriteNewBlog' element={<WriteNewBlog/>}/>
//            <Route exact path='/PublishBlog' element={<Publishblog/>}/>
//         </Context.Provider>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Home from './ReactNotesApp/Home'

function App() {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App





