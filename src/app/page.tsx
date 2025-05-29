import { inter, titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <main >
      <h1>HELLO WORD!!</h1>
      <h1 className= { titleFont.className } >HELLO WORD!!</h1>
      <h1 className={ inter.className  }>Hello word</h1>
    </main>
  )
}