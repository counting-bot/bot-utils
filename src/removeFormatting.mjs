export const removeFormatting = (msgContent) => {
    // bold
    msgContent = msgContent.replace(/\*\*/g ,"")
    
    // strikethrough
    msgContent = msgContent.replace(/~~/g ,"")
    
    // underline
    msgContent = msgContent.replace(/__/g ,"")
    
    // italics
    msgContent = msgContent.replace(/_/g ,"")
    
    // discord excaped characters
    msgContent = msgContent.replace("\\","")
    return msgContent
}