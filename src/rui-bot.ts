import {
  FileBox,
  log,
  Message,
  UrlLink,
}                   from 'wechaty'

import {
  simpleQnAMaker,
}                   from 'simple-qnamaker'

const qa = simpleQnAMaker({
  endpointKey    : 'bc138303-260a-42fa-b4d4-3d69db88922d',
  host           : 'https://juzibot-investment.azurewebsites.net/qnamaker',
  knowledgeBaseId: '51762d0d-96b0-4888-82f3-a0230bbb8b3d',
})

export async function jiaruiBot (msg: Message) {
  console.info('Jiarui Bot begin to work')
  const text = msg.text()

  // introduce 句客宝
  if (/wechaty/.test(text)) {

    if (/我/.test(text)) {

      const productLinkRui = 'https://s3.cn-north-1.amazonaws.com.cn/xiaoju-material/public/5c6938760bdf005a52391505_1589810671021_Open%20Source%20Wechaty%20Rui.pdf'

      await msg.say(`Wechaty 是一个帮助你自动化消息处理流程的 RPA 工具。地址见：https://github.com/wechaty/wechaty \n它支持的功能包括：接收消息，发送消息、添加好友、为好友备注、接受好友请求、发起群聊、加人入群等功能。\n只需要6行代码，你就可以 通过个人号 搭建一个 微信机器人功能 ，用来自动管理微信消息。\n\n更多功能包括：\n- 消息处理：关键词回复\n- 群管理：自动入群，拉人，踢人\n- 自动处理好友请求\n- 智能对话：通过简单配置，即可加入智能对话系统，完成指定任务`)
      await msg.say('这是@李佳芮 之前分享的的开源内容，可以查看这个pdf了解更多wechaty内容哦~')
      await msg.say(FileBox.fromUrl(productLinkRui, 'Wechaty Opensource Project.pdf'))

      return
    }

    const productLink = 'https://s3.cn-north-1.amazonaws.com.cn/xiaoju-material/public/5c6938760bdf005a52391505_1591265990985_Open%20Source%20Wechaty.pdf'

    await msg.say(`Wechaty 是一个帮助你自动化消息处理流程的 RPA 工具。地址见：https://github.com/wechaty/wechaty \n它支持的功能包括：接收消息，发送消息、添加好友、为好友备注、接受好友请求、发起群聊、加人入群等功能。\n只需要6行代码，你就可以 通过个人号 搭建一个 微信机器人功能 ，用来自动管理微信消息。\n\n更多功能包括：\n- 消息处理：关键词回复\n- 群管理：自动入群，拉人，踢人\n- 自动处理好友请求\n- 智能对话：通过简单配置，即可加入智能对话系统，完成指定任务`)
    await msg.say('想了解更多 wechaty 的开源介绍，可以查看这个pdf介绍哦~')
    await msg.say(FileBox.fromUrl(productLink, 'Wechaty Opensource Project.pdf'))

    return
  }

  // introduce 句子互动
  if (/句子互动/.test(text)) {

    const intro = `句子互动围绕微信生态为客户提供智能营销和销售服务，帮助企业引流并实现转化，客户覆盖教育、保险、大健康等多个领域。获得PreAngel、Plug and Play，Y Combination, TSVC和阿尔法公社多家中美机构投资。曾入选百度AI加速器和 Facebook 大陆首期加速器`

    const companyLink = new UrlLink({
      description : 'Salesforce for Social Network，专业的微信生态 SCRM 提供商，YC China 首期入选创业公司 (YC W19)',
      thumbnailUrl: 'https://pre-angel.com/assets/portfolios/juzibot/icon.png',
      title       : '句子互动',
      url         : 'https://pre-angel.com/portfolios/juzibot/',
    })

    await msg.say(intro)
    await msg.say('更多详细信息可以点击查看下面的链接：')
    await msg.say(companyLink)
    return
  }

  // introduce 李佳芮
  if (/李佳芮/.test(text)) {
    const intro = `李佳芮，句子互动创始人，连续创业者，微软人工智能最有价值专家（AI MVP），GitHub 7000+ Stars开源项目Wechaty作者，创建并管理了覆盖全球的微信聊天机器人开发者社区，《Chatbot从0到1：对话式交互设计指南》作者。\n\n句子互动围绕微信生态为客户提供智能营销和销售服务，帮助企业引流并实现转化，客户覆盖教育、保险、大健康等多个领域。获得PreAngel、Plug and Play，Y Combination, TSVC和阿尔法公社多家中美机构投资。曾入选百度AI加速器和 Facebook 大陆首期加速器`

    const ruiLink = new UrlLink({
      description : '句子互动创始人 & CEO，连续创业者，《Chatbot 从0到1》作者，微软人工智能最具价值专家 (AI MVP)',
      thumbnailUrl: 'https://pre-angel.com/assets/peoples/jiarui-li/avatar.png',
      title       : '李佳芮',
      url         : 'https://pre-angel.com/peoples/jiarui-li/',
    })

    await msg.say(intro)
    await msg.say('更多详细信息可以点击查看下面的链接：')
    await msg.say(ruiLink)
    return
  }

  // introduce 产品介绍
  if (/产品介绍|介绍下产品/.test(text)) {

    const productLink = 'https://juzi-work-material-prod.s3.cn-northwest-1.amazonaws.com.cn/public/60811b1b-5bf8-44b1-8cca-d87bdbeb9dbf_%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_9101597b-dbd9-4d85-a329-fefc40fdc605.png'

    await msg.say(`我们基于微信生态提供三个不同的产品，分别是: \n\n- 针对个人微信的句子秒回：可以让多个人同时管理一个微信号，或者一个人同时管理多个微信号，并提供一系列的自动化机器人帮助企业提高运营效率。\n- 针对企业微信的句客宝：一个帮助企业管理用户全生命周期的scrm，从引流、转化、运营三个模块帮助企业更好的管理自己的客户。现在重点在前期的营销引流的数据分析上。\n- 针对开发者的 wechaty 云服务：让开发者通过6行代码，快速搭建自己定制的微信机器人，通过提供安全稳定的云服务，大幅度提高企业的开发效率。`)
    await msg.say(FileBox.fromUrl(productLink))
    await msg.say('@我并回复： \n- 回复【句子互动】了解公司信息 \n- 回复【句客宝】了解企业微信产品 \n- 回复【句子秒回】了解个人微信产品 \n- 回复【wechaty】了解开发者产品 ')
    return
  }

  // introduce 句客宝
  if (/句客宝/.test(text)) {

    const productLink = 'https://s3.cn-north-1.amazonaws.com.cn/xiaoju-material/public/5c6938760bdf005a52391505_1590946056017_%E4%BC%81%E5%BE%AESCRM-%E5%8F%A5%E5%AD%90%E4%BA%92%E5%8A%A8.pdf'
    const videoLink = 'https://s3.cn-northwest-1.amazonaws.com.cn/xiaoju-message-payload-bucket/message/5eabfde2902dac007ce66162/1588330824050/5943444666822877866_wxid_5zj4i5htp9ih22_1588330818028_.mp4'

    await msg.say('这是企业微信 SCRM “句客宝” 的介绍：')
    await msg.say(FileBox.fromUrl(productLink, '句客宝--企业微信SCRM介绍.pdf'))
    await msg.say('这是企业微信 SCRM “句客宝” 的产品演示视频')
    await msg.say(FileBox.fromUrl(videoLink))
    await msg.say('欢迎来这里注册试用我们的产品: https://qiwei.juzibot.com \n\n 小提示：请在PC端打开链接，首次扫码需要企业微信管理员权限哦~')

    return
  }

  // 获取服务码
  if (/服务码/.test(text)) {

    const imageLink = 'https://s3.cn-northwest-1.amazonaws.com.cn/xiaoju-message-payload-bucket/message/5cd4dbbf454e8b4cc7b4c496/1591087419484/19cccd9f92ef81f02dae4380d0e1010e.jpg'

    await msg.say(FileBox.fromUrl(imageLink))
    await msg.say('按照图片步骤就可以在手机端获取服务码啦~')

    return
  }

  // introduce 句子秒回
  if (/句子秒回/.test(text)) {

    const productLink = 'https://s3.cn-north-1.amazonaws.com.cn/xiaoju-material/public/5d3a69aaabbfbd320e1fd453_1582194253314_%E4%BA%A7%E5%93%81%E6%8E%A8%E5%B9%BF%E5%9B%BE.png'
    const videoLink = 'https://s3.cn-northwest-1.amazonaws.com.cn/xiaoju-message-payload-bucket/message/5d777faef9ee5b7bcc43399e/1588933054486/7149379985390489603_wxid_alfwlcar4q8b22_1588933058229_.mp4'

    await msg.say('这是个人微信管理工具 “句子秒回” 的介绍：')
    await msg.say(FileBox.fromUrl(productLink))
    await msg.say('这是个人微信管理工具 “句子秒回” 的产品演示视频')
    await msg.say(FileBox.fromUrl(videoLink))
    await msg.say('欢迎来这里注册试用我们的产品: https://wechat.botorange.com')

    return
  }

  // Call QnAMaker, answer valuation questions
  let answer = [] as any[]
  try {
    answer = await qa(msg.text())
  } catch (error) {
    log.error('RuiBot', 'onMessage() qa(%s) rejection: %s', msg.text(), error)
  }

  // match valuation questions
  if (answer.length > 0) {

    // send qa result
    await msg.say(answer[0].answer)

    // send bp if have
    if (process.env.BP_LINK) {
      await msg.say('这是我们的BP，请查收')
      await msg.say(FileBox.fromUrl(process.env.BP_LINK, '句子互动BP.pdf'))
    }

  } else {
    // cannot answer the questions
    await msg.say('你的问题超出了我的能力范围，请联系我的老板李佳芮~')
    const lijiarui = msg.wechaty.Contact.load('qq512436430')
    if (lijiarui) {
      await msg.say(lijiarui)
    }
  }
  log.info('done qnamaker')
}
