var botui = new BotUI('my-botui-app');
botui.message.bot("こんにちわ。受付のほずみです.今日はよろしくお願いします！")
.then(()=>{
    return botui.message.bot("まずは、お名前を教えてください")
})
.then( ()=>{
    return botui.action.text({ // show 'text' action
    action: {
      placeholder: 'Your name'
    }
  })
})
.then((res)=>{
    console.log(res)
    return botui.message.bot(`${res.value}さんですね。`)
})
.then((res)=>{
    return botui.message.bot(`お誕生日を教えていただけますか？`)
})
.then( ()=>{
    return botui.action.text({ // show 'text' action
    action: {
        sub_type:'date',
        value:'1972-11-24'
    }
  })
})
.then((res)=>{
    return botui.message.bot(`${res.value} ですね。〇〇座だー`)
})
.then((res)=>{
    return botui.message.bot(`血液型を教えてもらえますか？`)
})
.then( ()=>{
    return botui.action.button({ // show 'text' action
    action: [{text:'O型',value:'O'},{text:'A型',value:'A'},{text:'B型',value:'B'},{text:'AB型',value:'AB'}]
  })
})
.then((res)=>{
    return botui.message.bot(`${res.text} ですね。`)
})

