import { parse } from 'url';
import Mock from 'mockjs';


const Random=Mock.Random;
const mock=Mock.mock;

// mock tableListDataSource
let tableListDataSource = [];


tableListDataSource=[];
   
tableListDataSource=mock({
  "array|1-10": [{
    ID:/\d{5,10}/,
    MC:'@csentence',
    FQR:'@cname',
    ZB:'@city',
    FMDZ:"http://dummyimage.com/750x250",
    NR:'@cparagraph',
    PLS:'@integer(1, 100)',
    DZS:'@integer(1, 100)'
  }]
}).array;

function getHomeTypes(req, res, u) {

 
  return mock({
    "array|1-10": [{
      ID:/\d{5,10}/,
      MC:'@csentence',
      FQR:'@cname',
      ZB:'@city',
      FMDZ:'@pick(["http://images.kaishiba.com/o_1cpbdpajnn0e15s5kbqreo18g91e.jpg?imageView2/2/w/670/h/400","http://images.kaishiba.com/o_1cod82cqv1lqlfnqevj1p9hopu30.jpg?imageView2/2/w/670/h/400","http://images.kaishiba.com/o_1co8cr09o175lf2rp4o19ce1sel1t.jpg?imageView2/2/w/670/h/400"])',//"http://dummyimage.com/350x200/5cb975",
      NR:'@cparagraph',
      PLS:'@integer(1, 100)',
      DZS:'@integer(1, 100)'
    }]
  }).array;;
}

const productsTypes=[
  {
    ID:'1',
    MC:'最新',
    MS:''
  },
  {
    ID:'2',
    MC:'民宿',
    MS:''
  },
  {
    ID:'3',
    MC:'酒店',
    MS:''
  },
  {
    ID:'4',
    MC:'农业',
    MS:''
  },
  {
    ID:'5',
    MC:'休闲',
    MS:''
  },
  {
    ID:'6',
    MC:'餐厅',
    MS:''
  },
]


function getPocDetail(param) {
  return mock({
    ID:/\d{5,10}/,
    NAME:'@csentence',
    FQR:'@cname',
    FQRTX:"http://dummyimage.com/200x200/5cb975",
    ZB:'@city',
    //SYTP:"http://dummyimage.com/350x200/5cb975",
    SYTP:'@pick(["http://images.kaishiba.com/o_1cpbdpajnn0e15s5kbqreo18g91e.jpg?imageView2/2/w/670/h/400","http://images.kaishiba.com/o_1cod82cqv1lqlfnqevj1p9hopu30.jpg?imageView2/2/w/670/h/400","http://images.kaishiba.com/o_1co8cr09o175lf2rp4o19ce1sel1t.jpg?imageView2/2/w/670/h/400"])',//"http://dummyimage.com/350x200/5cb975",

    MS:'@cparagraph',
    RCRS:/\d{0,2}/,
    YRCJE:/\d{0,2}/,
    MB:/\d{2,4}/,
    SYTS:/\d{0,2}/,
    JSRQ:'',
    XMBJ:'农业',
    XMFJBJ:'果燃35度',
    XMMX:[
      {
          "navTitle": "引言", 
          "name": "quote", 
          "isSystemNeed": true, 
          "title": "", 
          "content": "<div style=\"text-align: center;\"><b>“生活总给你不同的结果，而我每个都很甜”</b></div><p style=\"text-align: right;\"><b>                                                                                                 ——果燃35°</b></p>"
      }, 
      {
          "navTitle": "我的自述", 
          "name": "about", 
          "isSystemNeed": true, 
          "title": "从多次操盘百万级的生鲜项目深入土地去种植苹果，用心生活，用爱结果", 
          "content": "<p>我是罗雨露，迷路设计创始人，世界五百强企业西屋中国区特聘设计师、易迦科技“果燃35°”首席品牌规划设计师。</p><p><br></p><p><b>“全村的希望”、“桃夫子”、“梨韵山庄、“梨享生活”</b>等，都是我与我的团队共同打造的优质农特产品品牌。</p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohmvk8dujm108lu6e3hl1kj019.jpg\" rate=\"1.33\"><figcaption contenteditable=\"true\" class=\"\" data-placeholder=\"请输入图片说明\">发起人 罗雨露</figcaption></figure></div><p><br></p><p>曾经，我在一次职业论坛中结识了梁子奇，90后的他当时已是五家企业的创始人。他身上洋溢着自信睿智、坚忍不拔、持之以恒以及对事物完美追求的极致匠人精神。他说：大多数人没有机会和勇气，从城市转身到农村，顶着严寒和酷暑，去播种良心、播种希望。</p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohliul116amn1rhgk1sgc1o7r45.jpg\" rate=\"1.33\"><figcaption contenteditable=\"true\" class=\"\" data-placeholder=\"请输入图片说明\">联合发起人 梁子奇</figcaption></figure></div><p><br></p><p>我们都热衷于地理地标保护的农特优产品的搜寻与评鉴，一次简单的交流，便开启了我们合伙人的新的人生征程：真正把内心那份纯粹以及对真善美的态度当作一生的事业来做，将大部分的积蓄和精力倾注扎根在土地里，以更高的标准鞭策自己，一心一意服务消费者。</p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohn890b1g489r416rsiv5m8b1e.jpg\" rate=\"1.22\"><figcaption contenteditable=\"true\" class=\"\" data-placeholder=\"请输入图片说明\">在检查金果生长情况的梁总</figcaption></figure></div><p><br></p><p>在跑完全国几乎全部苹果产区、辗转数十个地方后，我来到了此次项目的原产地—甘肃平凉，寻找一颗2008年北京奥运特供产品、中国驰名商标、国家地理标志保护的红富士苹果“平凉金果”。</p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohlkofi1q2ebn8gpq16t31f584f.jpg\" rate=\"1.78\"></figure></div><p><b><br></b></p><p>当我第一次身处在200多万亩平凉金果的果园时，我的内心再一次澎湃起来。</p><p><b><br></b></p><p><b>满园的清新果香萦绕着我的鼻间，只是一呼一吸间，便能感受这果子的香甜。放眼望去，青绿色的枝叶，挂着一颗颗粉嫩饱满，圆嘟嘟的大苹果，圆润可爱，摇摇欲坠，伸手摘下 ，咬上去，香脆多汁，肉质细嫩，唇齿留香，久弥不散。</b></p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohk4ieg1vesngo8hreas12011j.jpg\" rate=\"1.78\"></figure></div><p><br></p><p>作为一名优质农特优产品的爱好者，这款平凉金果无疑是我的一大惊喜，而我的目标是要整个甘肃境内搜寻出万分之一的产品！</p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohti85flv91ffa36v1qtalem1e.jpg\" rate=\"2.12\"></figure></div><p><br></p><p>就像日本能种出“不会烂的苹果”的木村秋则一样，我们也要竭尽全力，做出平凉金果中佼佼者，种出收获世界称誉的中国苹果。水果，不是进口的比较好。</p><p><br></p><p>我们为了寻找最优质的平凉金果种植基地，耗费了大量精力和时间，于是有了如今拥有上万亩红富士生产基地的<b>甘肃万园果业。</b>我们还优选了土地土壤有机质含量最高的野羊村、崖窑村、黄寨村，并完成了土地流转30年，为【果燃35°】的诞生奠定坚实基础。</p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohkai18v6e130e1sba1tt1pro1o.gif\" rate=\"1.78\"><figcaption contenteditable=\"true\" class=\"\" data-placeholder=\"请输入图片说明\">果燃35°果园基地</figcaption></figure></div><p><br></p><p>有了大规模的好产地，便有了可以真正施展我们团队农业基因优势的舞台。</p><p><br></p><p>我们自创了<b>28项产销一体化操作规程</b>，采用自创的<b>果品品类细分管理模式</b>，严苛把控果品品质，不催熟、不打蜡，无农药残余，优选出<b>30%的优质果品</b>回馈给消费者。</p><p><br></p><p>与很多竞品相比，我们的果子，外观出众，大小平均，甜度适中。对品质的严苛把控，让我们对自己的产品更加自信，每一颗走向市面的果子，都是我们的作品，我们热忱的向任何一个人诉说这颗果子的魅力。</p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohkccr7o8ce4sjlr1qq010cm1t.jpg\" rate=\"1.33\"></figure></div><p><br></p><p>2015年，我们完成了1328亩乔木生优质红富士果园项目的建设与培植管护；2016年果树陆续挂果，终于收获到了一丝甘甜的喜悦，<b>我们也被评为农业产业化龙头企业，同时经过两百多项产品检测检验，被国家认定为出口免检产品，并获得绿色食品A级认证，3C认证等。</b></p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohm1cjfoqu1knq1h0q1hteqc24p.jpg\" rate=\"1.33\"></figure></div><p><br></p><p>其实面对赚钱和事业，我们有无数种选择，但面对初心我们只有一种选择：严格把关果品生产操作规程和品质管控，以从树梢上到舌尖上为服务精神，坚持金字塔尖原生态新鲜美味的匠人精神。</p>"
      }, 
      {
          "navTitle": "我的项目", 
          "name": "myProject", 
          "isSystemNeed": true, 
          "title": "创新互联网思维的新零售体系，打造农优特品个性IP", 
          "content": "<p>“果燃35°”乔木生果园生产基地已达万亩，位于<b>生产优质苹果的“黄金地域”平凉，也是国家农业部划定的苹果最佳适生区。</b></p><p><b><br></b></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohp15f4ecs1gt3pfvs8acm31o.gif\" rate=\"1.78\"></figure></div><p><br></p><p style=\"text-align: center;\">海拔高度在1200—1500米之间</p><p style=\"text-align: center;\">有机质含量高，光照充足</p><p style=\"text-align: center;\">昼夜温差大，无霜期长</p><p style=\"text-align: center;\">降水适中，病虫害少</p><p style=\"text-align: center;\">香甜脆口、无污染、耐贮存</p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohke89g18q91nmj1cs71qr49no27.gif\" rate=\"1.78\"><figcaption contenteditable=\"true\" class=\"\" data-placeholder=\"请输入图片说明\">平凉金果，有“中国名果”之称号，属于国家质检总局评定的地理标志产品。</figcaption></figure></div><p><br></p><p><b>0.0001米的旅程，一颗好苹果需要走6年。</b></p><p><br></p><p>这六年给予果树充分的自然成长空间，我们不喷洒农药，人工除草、施用天然有机肥，除了果树的修剪、嫁接、整形，其它不做过多的人为干涉。</p><p><br></p><p>当然，为了保证优果率的提升，我们严格以欧盟农业规范（GAP）标准管护果园，每年每亩果园管护投入近0.7万元。</p><p></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohss7ho4i43n61cir19tc1oug19.jpg\" rate=\"1.78\"><figcaption contenteditable=\"true\" class=\"\" data-placeholder=\"请输入图片说明\">一颗好苹果，值得你等待</figcaption></figure></div><p><br></p><p>我们建造了一座万吨仓储气调库，一条果品品类细分操作流水线，物流吞吐量最大可日处理5万单。</p><p><br></p><p>目前，我们已经拥有了170人的专业团队，精细化的果品细分标准，高效率的物流管理。通过研发，我们实现了平台+基地“产销一体化”与“订单农业”无缝衔接的创新模式，大大提升了合作伙伴和消费者体验。</p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohki10si5cktre0t1uciknb2m.jpg\" rate=\"1.77\"><figcaption contenteditable=\"true\" class=\"\" data-placeholder=\"请输入图片说明\"><p>简约时尚的品牌设计，清晰传达品牌理念，品牌形象深入人心。</p></figcaption></figure></div><p><br></p><p>为迎合当下主力年轻消费群体的喜好，我们将包装设计地简约大方，通过拟人化的文案，展现不同的消费场景与节日。包装采用可循环利用，环保、绿色、健康的材料，经过长期的快递运输考验，包装纸箱不塌陷，苹果不受损，坏果率几乎为零。</p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohkjcfa7n77dgo9ore0urt2r.jpg\" rate=\"1.77\"><figcaption contenteditable=\"true\" class=\"\" data-placeholder=\"请输入图片说明\">每一颗金果都要经过严格的筛选，优选出品相最好的金果</figcaption></figure></div><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohq3arafrlfcbvoqhtp48f22.jpg\" rate=\"1.40\"><figcaption contenteditable=\"true\" class=\"\" data-placeholder=\"请输入图片说明\">果肉多汁，脆甜鲜美</figcaption></figure></div><p><br></p><p>在标准化的基础上，我们<b>建立果品线上+线下销售双结合的营销推广模式</b>。线下渠道主要以中高端超市、全国生鲜连锁店和社区店为主，并规划了“社群+电商、直播+电商”的线上渠道，运用团购、拼单、品牌日等形式增加与消费者互动，提升客户粘度和消费体验，达到复购效应。 </p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohkrjoa1me25p8b2pb120k3h.jpg\" rate=\"1.77\"></figure></div><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohks4uhsf01sjv1f2via56ga3m.jpg\" rate=\"1.77\"></figure></div><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohksc8arsq9q3lpo1mdm9vj3r.jpg\" rate=\"1.77\"></figure></div><p><br></p><p>今年，我们面向全国招募更多的优秀代理，与我们一起壮大“果燃35°”的事业。好产品是我们在市场端的核心竞争力，贴心的服务是取得消费者认可并追随的基础，严格把控产品品质，提供高品质的用户体验，是我们未来长期坚持要走的道路。</p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohm3jqa1ooi1b9su94mhkki04u.jpg\" rate=\"1.77\"></figure></div><p><br></p><p>在农业创新发展的这条道路上，我们热爱尝试融入更多新模式。下一步，我们的目标还将会转向农特优产品线下无人便利店的打造，满足最后一公里的24h优质农产品的消费需求。通过物联网+新零售的模式，让购买农特优产品更加便捷。</p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohkmab1q46s6d1bpt1r69j0330.jpg\" rate=\"1.33\"></figure></div><p><br></p><p>我们在建设果园的同时又投资了300余万元建成了百万株防治水土流失的公益林育苗基地—来生苗木繁育公司，占地160余亩，并进行社会公益林苗木的捐赠，与当地政府一道进行植树造林活动；还规划了贫困地区的支教事业，为我们实现繁荣富强的“中国梦”贡献一份力量。</p><p><br></p><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1cohkp7a8pclqvv16m01sfcfqr37.jpg\" rate=\"1.54\"></figure></div><div class=\"kai-images\"><figure contenteditable=\"false\"><img src=\"http://images.kaishiba.com/o_1coho25oc1j97lad7etu6i1tsm1j.jpg\" rate=\"1.63\"></figure></div><p><br></p><p>用心生活，用爱结果。我们秉持匠人、匠心的服务精神，一如既往地行在路上！</p>"
      }, 
      {
          "navTitle": "为何众筹", 
          "name": "why", 
          "isSystemNeed": true, 
          "title": "", 
          "content": "<p>我们希望通过这次众筹，让更多热爱健康，热爱生活的朋友可以品尝到我们用六年匠心栽培的“果燃35°”，也欢迎更多热爱农业，有兴趣致力于新农业发展的优秀人才加入我们！</p>"
      }
  ]
  });;
}
/**
 * 获取项目下活动项目
 * @param {*} param 
 */
 function getPocItems(param) {
  return mock({
    "array|1-10": [{
      ID:/\d{5,10}/,
      MC:'@csentence',
      NR:'@cparagraph',
      JG:'@integer(1, 100)',
      GMRS:'@integer(1, 100)'
    }]
  }).array;
 }

 function getProcInfo(param){
  return mock({
  ID:'@guid',
  XMWZ:'@county(true)',
  XMMC:'@csentence',
  JZMJ:'@increment(1000)亩',
  XMBJ:"<p>平凉市位于甘肃东部，属黄土高原地区，总耕地面积558.5万亩，农业人口193万人。境内海拔高度890～2857米，年均气温8.5～13℃，年降雨量500～800mm，年日照时数2200小时以上，气候温和，海拔适宜，光照充足，昼夜温差大，生态环境良好，是农业部划定的全国苹果优势产区之一。经过三十多年的持续发展,苹果产业从无到有、从小到大、从弱到强，逐步走上了规模化扩张、标准化生产、集约化经营的轨道。全市苹果243万亩，果品产量达到165万吨，产值74亿元，成为甘肃最大的优质苹果生产和出口创汇基地。</p><p>　　平凉市共辖六县一区，已有五县(区)被国家列入“名优特经济林示范县”，静宁、泾川两县获得“中国苹果之乡”、“中国红富士之乡”称号，被国家质量监督检验检疫总局认定为出口基地市。以成纪、泾龙富士为代表的“平凉金果”获得中国绿色食品发展中心绿色食品A级认证，被授予“中华名果”称号。</p><p>　　“平凉金果”外形美观、肉质细嫩、酸甜爽口、香味浓郁、风味独特、货架期长、营养丰富，先后取得了国家地理标志产品保护、绿色产品、中国驰名商标和最受消费者喜爱的中国农产品区域公用品牌等荣誉。</p>",
  XMMS:"<p>1、产品产地是国家农业部划定的苹果最佳适生区，是生产优质苹果的“黄金地域”。</p><p>2、产品是我们的核心竞争力，08年北京奥运特供，出口免检，绿色食品A级认证等</p><p>3、“果燃35°“品牌定位互联网化，平凉金果强大的基因和国家级各类认证，对我们的品牌进行强有力的背书。</p><p>4、精细化的果品品类细分，精准营销，解决了农产品信息不对称的问题；以欧盟（GAP）标准，科学化、创新化的园区生产管理模式；公司自创28项产销一体化规程，严把品控和服务，源头到终端，全流程可控化管理。</p>",
  'XMCY|1-10': [{
    ID:/\d{5,10}/,
    NAME:'@cname',
    MS:'@cparagraph',
    JS:'@pick(["发起人", "联合发起人", "首席技术执行官", "首席商务谈判官", "首席技术总监"])',
    TX:"http://dummyimage.com/350x200/5cb975",

  }]
});
 }
export default {
  'GET /api/getHomeTypes': productsTypes,
  'GET /api/getHomeProByTp': getHomeTypes,
  'GET /api/getPocDetail': getPocDetail,
  'GET /api/getPocItems': getPocItems,
  'GET /api/getProcInfo': getProcInfo,
  
};
