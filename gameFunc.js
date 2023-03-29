const math = require('mathjs');
const { prefix } = require("./config.json");

module.exports = {
  async taiXiu(bot, message, args, dataTX) {
    try {
      const matcuoi = '<a:lacne:1090153948209491968>'
      const emojiStart = '<a:danglac:1090171480639275008>'
      const muiten = '<a:hgtt_o5:1089116498842374144>'
      let emoji = [{
          key: '<:2_:1090153307198193684>',
          number: 1
        },
        {
          key: '<:3_:1090153340438052864>',
          number: 2
        },
        {
          key: '<:4_:1090153380879548447>',
          number: 3
        },
        {
          key: '<:5_:1090153467110236180>',
          number: 4
        },
        {
          key: '<:6_:1090153510978469908>',
          number: 5
        },
        {
          key: '<:7_:1090153532117749796>',
          number: 6
        }
      ]

      let sendTitle = await message.channel.send(matcuoi + ' **đang lắc nè - nhìn tiền lần cuối đi** ' + matcuoi)

      let sx1 = emojiStart
      let sx2 = emojiStart
      let sx3 = emojiStart

      let sendMes = await message.channel.send(sx1 + ' ' + sx2 + ' ' + sx3)
      let resultSX = await message.channel.send(`${muiten} **__Kết quả__: ???**`)
      
      // thay đổi dữ liệu
      if (dataTX.check !== false) {
        let text = Object.values(dataTX);
        const valueText = text.slice(1, text.length);
        let filteredEmoji = valueText.map((e) => {
          return emoji.find((x) => x.number === e)
        });

        sx1 = filteredEmoji[0]
        sx2 = filteredEmoji[1]
        sx3 = filteredEmoji[2]
      } else {
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
        let chanle = result % 2 === 0 ? 'Chẵn' : 'Lẻ'
        if (result <= 10) {
          sendTitle.edit(matcuoi + ` **Lắc xong - Xỉu ${result} **` + matcuoi)
          resultSX.edit(`${muiten} **__Kết quả__: ${sx1.number}-${sx2.number}-${sx3.number} ${muiten} Xỉu / ${chanle}**`)
        } else {
          sendTitle.edit(matcuoi + ` **Lắc xong - Tài ${result} **` + matcuoi)
          resultSX.edit(`${muiten} **__Kết quả__: ${sx1.number}-${sx2.number}-${sx3.number} ${muiten} Tài / ${chanle}**`)
        }
      }

      setTimeout(fRandom1, 2000)
      setTimeout(fRandom2, 3000)
      setTimeout(fRandom3, 4000)

      return { check: false }
    } catch (error) {
      if (error) console.error(error)
      // lỗi khi thay đổi dữ liệu
      message.channel.send({
        content: 'Đường truyền không ổn định'
      });
      return { check: false }
    }
  },
  async bipTX(bot, message, args, dataTX) {
    try {
      if (args[0] === 'reset' || args[0] === 'rs') {
        let bipDataTX = {
          check: false
        }
        message.channel.send({
          content: 'Reset lại dữ liệu trắng'
        });
        return bipDataTX
      } else {
        let mot = Number(args[0])
        let hai = Number(args[1])
        let ba = Number(args[2])
  
        if ((mot > 6 || hai > 6 || ba > 6) ||
          (mot < 1 || hai < 1 || ba < 1) ||
          (isNaN(mot) || isNaN(hai) || isNaN(ba))) {
          message.channel.send({
            content: 'Thao tác không chính xác'
          });
        } else {
          let bipDataTX = {
            check: true,
            mot,
            hai,
            ba
          }
          let ketqua = mot + hai + ba
          ketqua = ketqua <= 10 ? '**Xỉu**' : '**Tài**'
          message.channel.send({
            content: `=> **${mot}-${hai}-${ba}** => ${ketqua}`
          });
          return bipDataTX
        }
      }
    } catch (error) {
      console.log(error)
    }
  },
  async baucua(bot, message, args, dataTX) {
    try {
      const matcuoi = '<a:hgtt_conca1:1058736491888656497>'
      const emojiStart = '<a:Thitkchactn7unscreen:1090551045823922240>'
      const muiten = '<a:hgtt_o5:1089116498842374144>'
      let emoji = [{
          key: '<:bau:1090551700173094943>',
          number: 1,
          name: 'Bầu'
        },
        {
          key: '<:ca:1090551836961939526>',
          number: 2,
          name: 'Cá'
        },
        {
          key: '<:ga:1090551762286551040> ',
          number: 3,
          name: 'Gà'
        },
        {
          key: '<:nai:1090551778963103795>',
          number: 4,
          name: 'Nai'
        },
        {
          key: '<:tom:1090551803675947009> ',
          number: 5,
          name: 'Tom'
        },
        {
          key: '<:cua:1090551737703731250>',
          number: 6,
          name: 'Cua'
        }
      ]

      let sendTitle = await message.channel.send(matcuoi + ' **Đang lắc** ' + matcuoi)

      let sx1 = emojiStart
      let sx2 = emojiStart
      let sx3 = emojiStart

      let sendMes = await message.channel.send(sx1 + ' ' + sx2 + ' ' + sx3)
      let resultSX = await message.channel.send(`${muiten} **__Kết quả__: ???**`)
      
      // thay đổi dữ liệu
      if (dataTX.check !== false) {
        let text = Object.values(dataTX);
        const valueText = text.slice(1, text.length);
        let filteredEmoji = valueText.map((e) => {
          return emoji.find((x) => x.number === e)
        });

        sx1 = filteredEmoji[0]
        sx2 = filteredEmoji[1]
        sx3 = filteredEmoji[2]
      } else {
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

        sendTitle.edit(matcuoi + ` **Lắc xong**` + matcuoi)
        resultSX.edit(`${muiten} **__Kết quả__: ${sx1.name}-${sx2.name}-${sx3.name}**`)
      }

      setTimeout(fRandom1, 2000)
      setTimeout(fRandom2, 3000)
      setTimeout(fRandom3, 4000)

      return { check: false }
    } catch (error) {
      if (error) console.error(error)
      // lỗi khi thay đổi dữ liệu
      message.channel.send({
        content: 'Đường truyền không ổn định'
      });
      return { check: false }
    }
  },
  async bipbaucua(bot, message, args, dataTX) {
    try {
      if (args[0] === 'reset' || args[0] === 'rs') {
        let bipDataTX = {
          check: false
        }
        message.channel.send({
          content: 'Reset lại dữ liệu trắng'
        });
        return bipDataTX
      } else {
        let mot = Number(args[0])
        let hai = Number(args[1])
        let ba = Number(args[2])
  
        if ((mot > 6 || hai > 6 || ba > 6) ||
          (mot < 1 || hai < 1 || ba < 1) ||
          (isNaN(mot) || isNaN(hai) || isNaN(ba))) {
          message.channel.send({
            content: 'Thao tác không chính xác'
          });
        } else {
          let bipDataTX = {
            check: true,
            mot,
            hai,
            ba
          }
          message.channel.send({
            content: `=> **Set thành công**`
          });
          return bipDataTX
        }
      }
    } catch (error) {
      console.log(error)
    }
  },
  async random(bot, message, args) {
    let emoji = '<a:conca:1090282378955604118>'
    let max = args[0]
    let randNo = Math.round(Math.random() * max)
    try {
      message.channel.send({
        content: `${emoji} Chúc mừng **${message.member.user.username}#${message.member.user.discriminator}**, bạn đã chich được **${randNo}** lần`
      })
    } catch (error) {
      console.log(error)
      console.log('Lỗi')
    }
  },
  async math(bot, message, args) {
    try {
      let result =  math.evaluate(args.join(" "))
      if(result == undefined) return message.channel.send({ content: `**ngu**`});
      message.channel.send({ content: `**${args[0]} = ${result}**`});
    } catch (err) {
      console.log(err)
      message.channel.send({
        content: 'Lại đi đầu đang lú'
      });
    }
  }
};