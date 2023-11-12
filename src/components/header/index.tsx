'use client'
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
    const router=useRouter();
    const pathName=usePathname();
    return (
        <header
            style={{
                display:"flex",
                backgroundColor:"black",
                justifyContent:"center",
                color:"white",
                height:"50px",
                alignItems:"center",
            }}
        >
            <div
                style={{
                    marginRight:"10px"
                }}
            >
                <button
                    style={{
                        backgroundColor:"black",
                        border:"1px solid black",
                        color:"white",
                        fontSize:20,
                    }}
                    disabled={pathName==='/'}
                    onClick={()=>router.push('/')}
                >
                    page1
                </button>
            </div>
            <div
                style={{
                    marginRight:"5px"
                }}
            >
                <button
                    style={{
                        backgroundColor:"black",
                        border:"1px solid black",
                        color:"white",
                        fontSize:20,
                    }}
                    disabled={pathName==='/page2'}
                    onClick={()=>router.push('/page2')}
                >
                    page2
                </button>
            </div>
        </header>
    );
}

export default Header;