/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

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

atest = async() =>{
    return await botui.message.add("test")
}

atest();
