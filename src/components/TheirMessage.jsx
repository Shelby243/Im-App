const TheirMessage=({lastMessage,message})=>{
    /*console.log(30)
    console.log(lastMessage)*/

    const isfirstMessageByUser=!lastMessage || lastMessage.sender.username !== message.sender.username
    /*console.log(isfirstMessageByUser)
    console.log(3)
    console.log(message)*/
    return(
        <div className="message-row">
            {
                isfirstMessageByUser && (
                    <div
                    className="message-avatar"
                    style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                    />
                )
            }
            {message.attachments && message.attachments.length>0
                    ? (
                        <img 
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{marginLeft:isfirstMessageByUser ? '4px' : '48px'}}
                        />
                    ):
                    (
                        <div className="message" style={{float:'left',backgroundColor:'#CABCDC',marginLeft:isfirstMessageByUser ? '4px' : '48px'}}>
                            {message.text}
                        </div>
                    )
            }   
            
        </div>
    )
}
export default TheirMessage