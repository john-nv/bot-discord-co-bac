module.exports = {
  async taiXiu(bot, message, args, dataTX) {
    try {
      const sung = '<a:sung:874974928766656522>'
      const emojiStart = '<a:dice:1014831508822962196>'
      let emoji = [
        {
          key: '<:sx1:1014836607167254559>',
          number: 1
        },
        {
          key: '<:sx2:1014836276811284500>',
          number: 2
        },
        {
          key: '<:sx3:1014836270633066596>',
          number: 3
        },
        {
          key: '<:sx4:1014836278975528981>',
          number: 4
        },
        {
          key: '<:sx5:1014836281546641459>',
          number: 5
        },
        {
          key: '<:sx6:1014836272734425178>',
          number: 6
        }
      ]

      sendTitle = await message.channel.send(sung + ' Đang lắc.... ' + sung)
  
      let sx1 = emojiStart
      let sx2 = emojiStart
      let sx3 = emojiStart
  
      sendMes = await message.channel.send(sx1 + ' ' + sx2 + ' ' + sx3)
      
      // thay đổi dữ liệu
      if(dataTX.check === true){
        let text = Object.values(dataTX);
        const valueText =text.slice(1,text.length);
       let filteredEmoji = valueText.map((e)=> {
          return emoji.find((x)=> x.number === e)
        });

        sx1 = filteredEmoji[0]
        sx2 = filteredEmoji[1]
        sx3 = filteredEmoji[2]
      }else{
        sx1 = emoji[Math.floor(Math.random() * emoji.length)]
        sx2 = emoji[Math.floor(Math.random() * emoji.length)]
        sx3 = emoji[Math.floor(Math.random() * emoji.length)] 
      }
  
      const fRandom1 = () => {
        sendMes.edit(
          sx1.key + ' ' + emojiStart + ' ' + emojiStart
        )
      }
      const fRandom2 = () => {
        sendMes.edit(
          sx1.key + ' ' + sx2.key + ' ' + emojiStart
        )
      }
      const fRandom3 = () => {
        sendMes.edit(
          sx1.key + ' ' + sx2.key + ' ' + sx3.key
        )
  
        let result = sx1.number + sx2.number + sx3.number
        if (result <= 10) {
          sendTitle.edit(sung + ' lac xong, xiu : ' + result + sung)
        } else {
          sendTitle.edit(sung + ' lac xong, tai : ' + result + sung)
        }
      }
  
      setTimeout(fRandom1, 2000)
      setTimeout(fRandom2, 3000)
      setTimeout(fRandom3, 4000)
  
      return [{check: false}]
    } catch (error) {
      if(error) console.log(error)
      // lỗi khi thay đổi dữ liệu
      message.channel.send({ content: 'Đường truyền không ổn định' });
    }
  },
  async bipTX(bot, message, args, dataTX) {
    if(args[0] === 'reset' || args[0] === 'rs'){
      let bipDataTX = { check: false }
      message.channel.send({ content: 'Reset lại dữ liệu trắng' });
      return bipDataTX
    }else{
      let mot = Number(args[0])
      let hai = Number(args[1])
      let ba = Number(args[2])

      if((mot > 6 || hai > 6 || ba > 6) 
      || (mot < 1 || hai < 1 || ba < 1) 
      || (isNaN(mot) || isNaN(hai) || isNaN(ba)) ){
        message.channel.send({ content: 'Thao tác không chính xác' });
      }else{
        let bipDataTX = {check: true,mot,hai,ba}
        let ketqua = mot + hai + ba
        ketqua = ketqua <= 10 ? '**Xỉu**' : '**Tài**'
        message.channel.send({ content: `=> **${mot}-${hai}-${ba}** => ${ketqua}`});
        return bipDataTX
      }
    }
  }
};


