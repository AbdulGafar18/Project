import {Link} from "react-router-dom"

export default function NotFoundPage (){
  return (
    <>
    <h1>404 Error Page Not Found</h1>
    <Link to="/">
      {" "}
      <p>BAck to Previous Page</p> {" "}
      </Link>
    </>
  );
}