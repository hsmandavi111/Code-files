
import styles from './styles.module.css'
import Button from './Options/button'
import Chips from './Options/chips'
import Info from './Options/info'
import Video from './Options/video'
import Chipsgpt from './Options/chipsgpt'

const Append = (index: any, raw: any, chatMessages: any, setchat: any,gptMessages:any,setgpt:any,setspeechurl:any,setbuffer:any) => {

    console.log("this is raw")
    console.log(raw)
    if (raw.user == 'USER') {
        console.log("inside user section")
        return (
            <div key={index} className={styles.usermessage}>{raw.message}</div>
        )
    }

    if (raw.user == 'BOT' && !raw.richcontent) {
        console.log("inside bot section")
        console.log("inside if raw.richcontent")

        return (<div key={index} className={styles.botmessage}>{raw.message}</div>)
    }

    if (raw.user == 'BOT' && raw.richcontent) {
        console.log("inside bot section")
        console.log("inside if raw.richcontent")

        return (


            <div key={index} className={styles.botmessage}>
                {raw.message}
                {

                    raw.richcontent.map((i: any, index: any) => (


                            

                        i.map((j: any, jindex: any) => {

                            console.log("inside map of i.map")

                            if (j.type === "info") {
                                console.log("info")
                                return (
                                    Info(jindex,j)
                                )
                            }

                            if (j.type === "button") {
                                console.log("button")
                                return (
                                    Button(jindex,j)
                                )
                            }

                            if (j.type === "video") {
                                console.log("video")
                                return (
                                    Video(jindex,j)
                                )
                            }

                            if (j.type === "chips" ) {
                                console.log("chips")
                                return (
                                    Chips(jindex, j, chatMessages, setchat,setbuffer)
                                )
                            }
                            
                            if (j.type === "chipsGPT" ) {
                                console.log("chipsGPT")
                                return (
                                    Chipsgpt(jindex, j, chatMessages, setchat,gptMessages,setgpt,setspeechurl,setbuffer)
                                )
                            }
                        })))





                }</div>)

    }


}

export default Append