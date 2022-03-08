import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter()
  const [focus, setFocus] = useState(0);
  useEffect(() => {
    if (router.pathname === "/") setFocus(1);
    if (router.pathname === "/post") setFocus(2);
    if (router.pathname === "/about") setFocus(3);
    console.log(router.pathname)
  }, [router.pathname])

  return (
    <nav>
      <Link href="/">
        <a>HOME</a>
      </Link>
      <Link href="/post">
        <a>POST</a>
      </Link>
      <Link href="/about">
        <a>ABOUT</a>
      </Link>

      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          justify-content: center;
          padding: 10px 0px 10px;
        }
        a:hover {
          color: red;
        }
        a:nth-of-type(${focus}) {
          color: red;
        }
      `}</style>
    </nav>
  )
}
