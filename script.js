const header = document.querySelector("[data-header]");
const productSelect = document.querySelector("[data-product]");
const sizeSelect = document.querySelector("[data-size]");
const subjectSelect = document.querySelector("[data-subject]");
const estimate = document.querySelector("[data-estimate]");
const emailLink = document.querySelector("[data-email-link]");
const orderForm = document.querySelector("[data-order-form]");
const photoInput = document.querySelector("[data-photo]");
const preview = document.querySelector("[data-preview]");
const languageButtons = document.querySelectorAll("[data-lang-button]");

const translations = {
  en: {
    "nav.custom": "Custom",
    "nav.kits": "Kits",
    "nav.pricing": "Pricing",
    "nav.order": "Order",
    "nav.cta": "Start a custom",
    "hero.eyebrow": "Custom pixel bead patterns and DIY kits",
    "hero.title": "Turn a favorite photo into a tiny handmade charm.",
    "hero.copy": "Upload a pet, couple, or keepsake photo. Get a printable fuse bead pattern, a ready-to-make DIY kit, or a finished pixel charm.",
    "hero.primary": "Build your kit",
    "hero.secondary": "See how it works",
    "hero.stat1": "teen and adult craft",
    "hero.stat2Value": "2-3 days",
    "hero.stat2": "digital pattern delivery",
    "hero.stat3": "small-batch shipping",
    intro: "Not a toy aisle bead pack. A personal pixel keepsake designed for cozy evenings, small gifts, and desk-size memories.",
    "custom.eyebrow": "Photo to pattern",
    "custom.title": "Custom templates with a clear, gift-ready process.",
    "custom.step1Title": "Upload a clear photo",
    "custom.step1Copy": "Pets, faces, flowers, small objects, and simple memories work best.",
    "custom.step2Title": "Approve the pixel preview",
    "custom.step2Copy": "The design is simplified into a bead-friendly template before delivery.",
    "custom.step3Title": "Make it or gift it",
    "custom.step3Copy": "Choose a PDF pattern, a packed DIY kit, or a finished charm.",
    "kits.eyebrow": "Core products",
    "kits.title": "Start narrow: pets, couples, and cozy mini kits.",
    "kits.copy": "The first collection focuses on products that are easy to explain online and easy to buy as gifts. Each kit is small enough to finish in one relaxed session.",
    "kits.card1Title": "Custom Pet Pixel Pattern",
    "kits.card1Copy": "Printable bead chart, color list, and one optional preview revision.",
    "kits.card2Title": "Personalized DIY Kit",
    "kits.card2Copy": "Sorted beads, pattern card, ironing paper, and charm or magnet hardware.",
    "kits.card3Title": "Finished Pixel Gift",
    "kits.card3Copy": "A handmade charm for birthdays, pets, couples, and small thank-you gifts.",
    "pricing.eyebrow": "Simple pricing",
    "pricing.title": "Three offers for the first Etsy launch.",
    "pricing.tier1": "Digital",
    "pricing.card1Title": "Custom Pattern",
    "pricing.card1Item1": "PDF bead template",
    "pricing.card1Item2": "Color and bead count list",
    "pricing.card1Item3": "Delivered in 2-3 days",
    "pricing.tier2": "Best test product",
    "pricing.card2Title": "DIY Charm Kit",
    "pricing.card2Item1": "Custom pattern included",
    "pricing.card2Item2": "Sorted beads and hardware",
    "pricing.card2Item3": "Gift-ready small packaging",
    "pricing.tier3": "Premium",
    "pricing.card3Title": "Finished Charm",
    "pricing.card3Item1": "Made and fused by hand",
    "pricing.card3Item2": "Keychain or magnet option",
    "pricing.card3Item3": "Limited weekly slots",
    "order.eyebrow": "Mock order builder",
    "order.title": "Estimate a custom order.",
    "order.copy": "This first version prepares the request as an email. Later it can connect to Etsy, Shopify, or a real checkout.",
    "order.rulesTitle": "Best photo rules",
    "order.rule1": "Clear front-facing photo",
    "order.rule2": "Good daylight and simple background",
    "order.rule3": "Face, ears, or main object fully visible",
    "order.rule4": "No copyrighted characters or brand logos",
    "form.product": "Product",
    "form.subject": "Subject",
    "form.size": "Size",
    "form.photo": "Photo preview",
    "form.previewEmpty": "Photo preview appears here",
    "form.notes": "Notes",
    "form.notesPlaceholder": "Example: Make my orange cat into a cute keychain with a blue background.",
    "form.estimate": "Estimated starting price",
    "form.email": "Prepare email request",
    "faq.eyebrow": "Details",
    "faq.title": "Small rules that keep the project manageable.",
    "faq.q1": "Is this for children?",
    "faq.a1": "The early brand positioning is for ages 14+ and adult hobby craft buyers, not a children's toy line.",
    "faq.q2": "Can customers request famous characters?",
    "faq.a2": "No. The first product line should stay original to avoid IP takedowns on Etsy and social platforms.",
    "faq.q3": "What should be launched first?",
    "faq.a3": "Start with custom pet patterns and three small DIY kits. Use views, saves, and orders to decide the next collection.",
    "footer.copy": "Custom pixel bead patterns, cozy DIY kits, and tiny handmade keepsakes."
  },
  zh: {
    "nav.custom": "定制",
    "nav.kits": "材料包",
    "nav.pricing": "价格",
    "nav.order": "下单",
    "nav.cta": "开始定制",
    "hero.eyebrow": "定制拼豆图纸与 DIY 材料包",
    "hero.title": "把喜欢的照片变成小小的手作挂件。",
    "hero.copy": "上传宠物、情侣或纪念照片，获得可打印拼豆图纸、即做型 DIY 材料包，或完成好的像素挂件。",
    "hero.primary": "制作我的材料包",
    "hero.secondary": "查看流程",
    "hero.stat1": "适合 14+ 和成人",
    "hero.stat2Value": "2-3 天",
    "hero.stat2": "数字图纸交付",
    "hero.stat3": "欧洲小批量发货",
    intro: "这不是普通儿童拼豆材料包，而是为夜晚手作、小礼物和桌面记忆设计的个人像素纪念品。",
    "custom.eyebrow": "照片转图纸",
    "custom.title": "清晰、适合送礼的定制流程。",
    "custom.step1Title": "上传清晰照片",
    "custom.step1Copy": "宠物、头像、花、小物件和简单纪念照片最适合制作。",
    "custom.step2Title": "确认像素预览",
    "custom.step2Copy": "照片会被简化成适合拼豆制作的图纸，再进行交付。",
    "custom.step3Title": "自己做或送给别人",
    "custom.step3Copy": "可以选择 PDF 图纸、打包好的 DIY 材料包，或完成好的挂件。",
    "kits.eyebrow": "核心产品",
    "kits.title": "先聚焦宠物、情侣和小型治愈材料包。",
    "kits.copy": "第一批产品专注于线上容易解释、适合送礼的款式。每个材料包都可以在一次轻松的手作时间里完成。",
    "kits.card1Title": "宠物定制像素图纸",
    "kits.card1Copy": "可打印拼豆图、颜色清单，以及一次可选预览修改。",
    "kits.card2Title": "个性化 DIY 材料包",
    "kits.card2Copy": "分装拼豆、图纸卡、熨烫纸，以及钥匙扣或磁铁配件。",
    "kits.card3Title": "完成版像素礼物",
    "kits.card3Copy": "适合生日、宠物、情侣和感谢小礼物的手作挂件。",
    "pricing.eyebrow": "简单定价",
    "pricing.title": "适合第一批 Etsy 上架的三种产品。",
    "pricing.tier1": "数字产品",
    "pricing.card1Title": "定制图纸",
    "pricing.card1Item1": "PDF 拼豆图纸",
    "pricing.card1Item2": "颜色和豆子数量清单",
    "pricing.card1Item3": "2-3 天交付",
    "pricing.tier2": "最适合测试",
    "pricing.card2Title": "DIY 挂件材料包",
    "pricing.card2Item1": "包含定制图纸",
    "pricing.card2Item2": "分装拼豆和配件",
    "pricing.card2Item3": "适合送礼的小包装",
    "pricing.tier3": "高价产品",
    "pricing.card3Title": "完成版挂件",
    "pricing.card3Item1": "手工拼制和熨烫",
    "pricing.card3Item2": "钥匙扣或磁铁可选",
    "pricing.card3Item3": "每周限量接单",
    "order.eyebrow": "模拟下单器",
    "order.title": "估算一个定制订单。",
    "order.copy": "这个第一版会把需求整理成邮件。后续可以接入 Etsy、Shopify 或真正的付款流程。",
    "order.rulesTitle": "最佳照片要求",
    "order.rule1": "清晰正面照片",
    "order.rule2": "自然光和简单背景",
    "order.rule3": "脸、耳朵或主体完整可见",
    "order.rule4": "不要上传版权角色或品牌标志",
    "form.product": "产品",
    "form.subject": "主题",
    "form.size": "尺寸",
    "form.photo": "照片预览",
    "form.previewEmpty": "照片预览会显示在这里",
    "form.notes": "备注",
    "form.notesPlaceholder": "例如：把我的橘猫做成可爱的钥匙扣，背景用蓝色。",
    "form.estimate": "起步预估价",
    "form.email": "生成邮件需求",
    "faq.eyebrow": "细节",
    "faq.title": "让项目可控的小规则。",
    "faq.q1": "这是给儿童的吗？",
    "faq.a1": "早期品牌建议定位为 14+ 和成人手作爱好者，不做儿童玩具线。",
    "faq.q2": "客户可以定制知名角色吗？",
    "faq.a2": "不建议。第一批产品应保持原创，避免 Etsy 和社交平台的版权下架风险。",
    "faq.q3": "应该先上线什么？",
    "faq.a3": "先做宠物定制图纸和三个小型 DIY 材料包，用浏览、收藏和订单数据决定下一批产品。",
    "footer.copy": "定制拼豆图纸、治愈 DIY 材料包和小小的手作纪念品。"
  },
  de: {
    "nav.custom": "Custom",
    "nav.kits": "Kits",
    "nav.pricing": "Preise",
    "nav.order": "Anfrage",
    "nav.cta": "Custom starten",
    "hero.eyebrow": "Personalisierte Pixelperlen-Vorlagen und DIY-Kits",
    "hero.title": "Mach aus deinem Lieblingsfoto einen kleinen Handmade-Charm.",
    "hero.copy": "Lade ein Haustier-, Paar- oder Erinnerungsfoto hoch. Erhalte eine druckbare Fuse-Bead-Vorlage, ein fertiges DIY-Kit oder einen handgemachten Pixel-Charm.",
    "hero.primary": "Kit zusammenstellen",
    "hero.secondary": "So funktioniert es",
    "hero.stat1": "Craft für 14+ und Erwachsene",
    "hero.stat2Value": "2-3 Tage",
    "hero.stat2": "digitale Vorlage",
    "hero.stat3": "Kleinserie in der EU",
    intro: "Kein gewöhnliches Perlen-Set aus dem Spielzeugregal. Ein persönliches Pixel-Andenken für ruhige Abende, kleine Geschenke und Erinnerungen auf dem Schreibtisch.",
    "custom.eyebrow": "Foto zu Vorlage",
    "custom.title": "Personalisierte Vorlagen mit einem klaren, geschenktauglichen Ablauf.",
    "custom.step1Title": "Klares Foto hochladen",
    "custom.step1Copy": "Haustiere, Gesichter, Blumen, kleine Objekte und einfache Erinnerungen funktionieren am besten.",
    "custom.step2Title": "Pixel-Vorschau freigeben",
    "custom.step2Copy": "Das Motiv wird zu einer perlenfreundlichen Vorlage vereinfacht, bevor es geliefert wird.",
    "custom.step3Title": "Selbst machen oder verschenken",
    "custom.step3Copy": "Wähle eine PDF-Vorlage, ein gepacktes DIY-Kit oder einen fertigen Charm.",
    "kits.eyebrow": "Kernprodukte",
    "kits.title": "Fokussiert starten: Haustiere, Paare und cozy Mini-Kits.",
    "kits.copy": "Die erste Kollektion konzentriert sich auf Produkte, die online leicht zu erklären sind und gut als Geschenk funktionieren. Jedes Kit ist klein genug für eine entspannte Bastel-Session.",
    "kits.card1Title": "Custom Pet Pixel Pattern",
    "kits.card1Copy": "Druckbare Perlenvorlage, Farbliste und optional eine kleine Vorschau-Revision.",
    "kits.card2Title": "Personalisiertes DIY-Kit",
    "kits.card2Copy": "Sortierte Perlen, Vorlage, Bügelpapier und Zubehör für Charm oder Magnet.",
    "kits.card3Title": "Fertiges Pixel-Geschenk",
    "kits.card3Copy": "Ein handgemachter Charm für Geburtstage, Haustiere, Paare und kleine Dankeschöns.",
    "pricing.eyebrow": "Einfache Preise",
    "pricing.title": "Drei Angebote für den ersten Etsy-Launch.",
    "pricing.tier1": "Digital",
    "pricing.card1Title": "Custom Pattern",
    "pricing.card1Item1": "PDF-Perlenvorlage",
    "pricing.card1Item2": "Farb- und Perlenanzahl",
    "pricing.card1Item3": "Lieferung in 2-3 Tagen",
    "pricing.tier2": "Bestes Testprodukt",
    "pricing.card2Title": "DIY Charm Kit",
    "pricing.card2Item1": "Custom-Vorlage inklusive",
    "pricing.card2Item2": "Sortierte Perlen und Zubehör",
    "pricing.card2Item3": "Kleine Geschenkverpackung",
    "pricing.tier3": "Premium",
    "pricing.card3Title": "Fertiger Charm",
    "pricing.card3Item1": "Von Hand gelegt und gebügelt",
    "pricing.card3Item2": "Schlüsselanhänger oder Magnet",
    "pricing.card3Item3": "Begrenzte Slots pro Woche",
    "order.eyebrow": "Anfrage-Builder",
    "order.title": "Schätze eine Custom-Anfrage.",
    "order.copy": "Diese erste Version erstellt eine E-Mail-Anfrage. Später kann sie mit Etsy, Shopify oder einem echten Checkout verbunden werden.",
    "order.rulesTitle": "Gute Foto-Regeln",
    "order.rule1": "Klares Foto von vorne",
    "order.rule2": "Gutes Tageslicht und einfacher Hintergrund",
    "order.rule3": "Gesicht, Ohren oder Hauptmotiv vollständig sichtbar",
    "order.rule4": "Keine geschützten Figuren oder Markenlogos",
    "form.product": "Produkt",
    "form.subject": "Motiv",
    "form.size": "Größe",
    "form.photo": "Fotovorschau",
    "form.previewEmpty": "Die Fotovorschau erscheint hier",
    "form.notes": "Notizen",
    "form.notesPlaceholder": "Beispiel: Mach aus meiner orangen Katze einen süßen Schlüsselanhänger mit blauem Hintergrund.",
    "form.estimate": "Geschätzter Startpreis",
    "form.email": "E-Mail-Anfrage vorbereiten",
    "faq.eyebrow": "Details",
    "faq.title": "Kleine Regeln, damit das Projekt machbar bleibt.",
    "faq.q1": "Ist das für Kinder?",
    "faq.a1": "Die frühe Positionierung ist für 14+ und erwachsene Craft-Käufer gedacht, nicht als Spielzeuglinie für Kinder.",
    "faq.q2": "Können Kundinnen und Kunden bekannte Figuren anfragen?",
    "faq.a2": "Nein. Die erste Produktlinie sollte original bleiben, um IP-Takedowns auf Etsy und Social Media zu vermeiden.",
    "faq.q3": "Was sollte zuerst gelauncht werden?",
    "faq.a3": "Starte mit Custom-Pet-Vorlagen und drei kleinen DIY-Kits. Views, Saves und Bestellungen entscheiden die nächste Kollektion.",
    "footer.copy": "Personalisierte Pixelperlen-Vorlagen, cozy DIY-Kits und kleine Handmade-Andenken."
  }
};

const optionTranslations = {
  products: {
    "Custom pattern": {
      en: "Custom pattern - EUR 14.90",
      zh: "定制图纸 - EUR 14.90",
      de: "Custom Pattern - EUR 14.90"
    },
    "DIY charm kit": {
      en: "DIY charm kit - EUR 34.90",
      zh: "DIY 挂件材料包 - EUR 34.90",
      de: "DIY Charm Kit - EUR 34.90"
    },
    "Finished charm": {
      en: "Finished charm - from EUR 39.90",
      zh: "完成版挂件 - EUR 39.90 起",
      de: "Fertiger Charm - ab EUR 39.90"
    }
  },
  subjects: {
    Pet: { en: "Pet", zh: "宠物", de: "Haustier" },
    Couple: { en: "Couple", zh: "情侣", de: "Paar" },
    Person: { en: "Person", zh: "人物", de: "Person" },
    Object: { en: "Object", zh: "物品", de: "Objekt" }
  },
  sizes: {
    "Small 20x20": { en: "Small 20x20", zh: "小号 20x20", de: "Klein 20x20" },
    "Medium 30x30": { en: "Medium 30x30 + EUR 8", zh: "中号 30x30 + EUR 8", de: "Mittel 30x30 + EUR 8" },
    "Large 50x50": { en: "Large 50x50 + EUR 22", zh: "大号 50x50 + EUR 22", de: "Groß 50x50 + EUR 22" }
  }
};

const emailTranslations = {
  en: {
    subject: "Custom pixel bead request",
    greeting: "Hi Pixel Charm Studio,",
    intro: "I would like to request a custom pixel bead order.",
    product: "Product",
    orderSubject: "Subject",
    size: "Size",
    estimate: "Estimated starting price",
    notes: "Notes",
    attach: "I will attach my photo to this email."
  },
  zh: {
    subject: "定制拼豆需求",
    greeting: "你好 Pixel Charm Studio,",
    intro: "我想咨询一个定制拼豆订单。",
    product: "产品",
    orderSubject: "主题",
    size: "尺寸",
    estimate: "起步预估价",
    notes: "备注",
    attach: "我会在邮件中附上照片。"
  },
  de: {
    subject: "Custom Pixelperlen Anfrage",
    greeting: "Hallo Pixel Charm Studio,",
    intro: "Ich möchte eine personalisierte Pixelperlen-Anfrage stellen.",
    product: "Produkt",
    orderSubject: "Motiv",
    size: "Größe",
    estimate: "Geschätzter Startpreis",
    notes: "Notizen",
    attach: "Ich hänge mein Foto an diese E-Mail an."
  }
};

Object.assign(translations.en, {
  "nav.login": "Login",
  "customPage.title": "A clear custom flow for photos that become bead templates.",
  "customPage.copy": "Keep the offer simple: one photo, one preview, one ready-to-use template or kit.",
  "customPage.rulesEyebrow": "Photo guide",
  "customPage.rulesTitle": "The better the photo, the cuter the pixel result.",
  "customPage.rulesCopy": "The first version should avoid complex backgrounds, group photos, and copyrighted characters.",
  "customPage.ruleCopy1": "Use a simple portrait where the main subject is not cropped.",
  "customPage.ruleCopy2": "Bright photos need fewer corrections and become cleaner templates.",
  "customPage.ruleCopy3": "Original designs protect the store from takedowns and keep the brand real.",
  "kitsPage.title": "Small kits that are easy to finish and easy to gift.",
  "kitsPage.copy": "Start with a tight product line so inventory stays low and every design can be tested online.",
  "kitsPage.petTitle": "Pet photo to printable pattern",
  "kitsPage.petCopy": "The lowest-risk launch product: no shipping, high personalization, and strong gift appeal.",
  "kitsPage.diyTitle": "Sorted beads, pattern, and charm hardware",
  "kitsPage.diyCopy": "A ready-to-make gift kit for customers who want the experience, not just a file.",
  "pricingPage.copy": "Use simple price tiers before building a full ecommerce backend.",
  "pricingPage.choose": "Choose this",
  "orderPage.title": "Send a clear request in one minute.",
  "orderPage.copy": "Choose your product, upload a photo for preview, add notes, then prepare the request email.",
  "auth.demo": "Demo account",
  "auth.loginTitle": "Log in to your studio account.",
  "auth.loginCopy": "This static demo keeps account data in your browser only. It is for testing the customer flow before adding real authentication.",
  "auth.registerTitle": "Create a customer account.",
  "auth.registerCopy": "Save a demo profile and test the account page. Real payments and secure passwords should be added later with a backend service.",
  "auth.name": "Name",
  "auth.email": "Email",
  "auth.password": "Password",
  "auth.createAccount": "Create account",
  "auth.noAccount": "No account yet?",
  "auth.registerNow": "Register now",
  "auth.haveAccount": "Already have an account?",
  "auth.logout": "Logout",
  "auth.account": "Account",
  "auth.accountTitle": "Your demo studio account.",
  "auth.accountCopy": "View saved profile details and start a new custom request.",
  "auth.profile": "Profile",
  "auth.nextStep": "Next step",
  "auth.nextStepCopy": "Start a custom request and attach the photo you want to turn into a pixel bead design.",
  "auth.loginSuccess": "Login successful. Opening your account...",
  "auth.registerSuccess": "Account created. Opening your account...",
  "auth.loginError": "Email or password is incorrect.",
  "auth.registerError": "An account with this email already exists."
});

Object.assign(translations.zh, {
  "nav.login": "登录",
  "customPage.title": "把照片变成拼豆图纸的清晰定制流程。",
  "customPage.copy": "保持产品简单：一张照片、一次预览、一个可直接使用的图纸或材料包。",
  "customPage.rulesEyebrow": "照片指南",
  "customPage.rulesTitle": "照片越清楚，像素成品越可爱。",
  "customPage.rulesCopy": "第一版应避免复杂背景、多人合照和版权角色。",
  "customPage.ruleCopy1": "使用主体完整、没有被裁切的简单照片。",
  "customPage.ruleCopy2": "明亮照片需要更少修正，也更容易变成清晰图纸。",
  "customPage.ruleCopy3": "原创设计能降低下架风险，也让品牌更真实。",
  "kitsPage.title": "容易完成、适合送礼的小型材料包。",
  "kitsPage.copy": "先用少量产品线测试市场，降低库存压力。",
  "kitsPage.petTitle": "宠物照片转可打印图纸",
  "kitsPage.petCopy": "这是风险最低的启动产品：无物流、高个性化、礼物属性强。",
  "kitsPage.diyTitle": "分装拼豆、图纸和挂件配件",
  "kitsPage.diyCopy": "给想要完整手作体验、而不只是文件的用户。",
  "pricingPage.copy": "在接入完整电商后台之前，先用简单价格层级测试。",
  "pricingPage.choose": "选择这个",
  "orderPage.title": "一分钟整理好定制需求。",
  "orderPage.copy": "选择产品，上传照片预览，填写备注，然后生成需求邮件。",
  "auth.demo": "演示账户",
  "auth.loginTitle": "登录你的工作室账户。",
  "auth.loginCopy": "这个静态演示只把账户数据保存在你的浏览器里，用来测试客户流程，后续再接真实登录系统。",
  "auth.registerTitle": "创建客户账户。",
  "auth.registerCopy": "保存一个演示资料并测试账户页。真实付款和安全密码后续需要用后端服务实现。",
  "auth.name": "姓名",
  "auth.email": "邮箱",
  "auth.password": "密码",
  "auth.createAccount": "创建账户",
  "auth.noAccount": "还没有账户？",
  "auth.registerNow": "立即注册",
  "auth.haveAccount": "已经有账户？",
  "auth.logout": "退出登录",
  "auth.account": "账户",
  "auth.accountTitle": "你的演示工作室账户。",
  "auth.accountCopy": "查看保存的资料，并开始新的定制需求。",
  "auth.profile": "个人资料",
  "auth.nextStep": "下一步",
  "auth.nextStepCopy": "开始一个定制请求，并附上你想变成像素拼豆设计的照片。",
  "auth.loginSuccess": "登录成功，正在打开账户页...",
  "auth.registerSuccess": "账户已创建，正在打开账户页...",
  "auth.loginError": "邮箱或密码不正确。",
  "auth.registerError": "这个邮箱已经注册过。"
});

Object.assign(translations.de, {
  "nav.login": "Login",
  "customPage.title": "Ein klarer Custom-Ablauf für Fotos, die zu Perlenvorlagen werden.",
  "customPage.copy": "Halte das Angebot einfach: ein Foto, eine Vorschau, eine nutzbare Vorlage oder ein Kit.",
  "customPage.rulesEyebrow": "Fotoguide",
  "customPage.rulesTitle": "Je besser das Foto, desto schöner das Pixel-Ergebnis.",
  "customPage.rulesCopy": "Die erste Version sollte komplexe Hintergründe, Gruppenfotos und geschützte Figuren vermeiden.",
  "customPage.ruleCopy1": "Nutze ein einfaches Portrait, bei dem das Hauptmotiv nicht abgeschnitten ist.",
  "customPage.ruleCopy2": "Helle Fotos brauchen weniger Korrektur und werden sauberere Vorlagen.",
  "customPage.ruleCopy3": "Originale Designs schützen den Store vor Takedowns.",
  "kitsPage.title": "Kleine Kits, die leicht fertigzustellen und leicht zu verschenken sind.",
  "kitsPage.copy": "Starte mit einer engen Produktlinie, damit Inventar niedrig bleibt und jedes Design online getestet werden kann.",
  "kitsPage.petTitle": "Haustierfoto zu druckbarer Vorlage",
  "kitsPage.petCopy": "Das risikoärmste Launch-Produkt: kein Versand, hohe Personalisierung und starker Geschenkfaktor.",
  "kitsPage.diyTitle": "Sortierte Perlen, Vorlage und Charm-Zubehör",
  "kitsPage.diyCopy": "Ein ready-to-make Geschenk-Kit für Kundinnen und Kunden, die das Erlebnis wollen.",
  "pricingPage.copy": "Nutze einfache Preisstufen, bevor ein vollständiges Ecommerce-Backend gebaut wird.",
  "pricingPage.choose": "Auswählen",
  "orderPage.title": "Sende in einer Minute eine klare Anfrage.",
  "orderPage.copy": "Wähle dein Produkt, lade ein Foto zur Vorschau hoch, ergänze Notizen und bereite die E-Mail-Anfrage vor.",
  "auth.demo": "Demo-Konto",
  "auth.loginTitle": "Logge dich in dein Studio-Konto ein.",
  "auth.loginCopy": "Diese statische Demo speichert Kontodaten nur in deinem Browser. Sie testet den Kundenfluss vor echter Authentifizierung.",
  "auth.registerTitle": "Erstelle ein Kundenkonto.",
  "auth.registerCopy": "Speichere ein Demo-Profil und teste die Kontoseite. Echte Zahlungen und sichere Passwörter brauchen später einen Backend-Service.",
  "auth.name": "Name",
  "auth.email": "E-Mail",
  "auth.password": "Passwort",
  "auth.createAccount": "Konto erstellen",
  "auth.noAccount": "Noch kein Konto?",
  "auth.registerNow": "Jetzt registrieren",
  "auth.haveAccount": "Schon ein Konto?",
  "auth.logout": "Logout",
  "auth.account": "Konto",
  "auth.accountTitle": "Dein Demo-Studio-Konto.",
  "auth.accountCopy": "Sieh deine gespeicherten Profildaten und starte eine neue Custom-Anfrage.",
  "auth.profile": "Profil",
  "auth.nextStep": "Nächster Schritt",
  "auth.nextStepCopy": "Starte eine Custom-Anfrage und hänge das Foto an, das zu einem Pixelperlen-Design werden soll.",
  "auth.loginSuccess": "Login erfolgreich. Konto wird geöffnet...",
  "auth.registerSuccess": "Konto erstellt. Konto wird geöffnet...",
  "auth.loginError": "E-Mail oder Passwort ist falsch.",
  "auth.registerError": "Für diese E-Mail gibt es bereits ein Konto."
});

Object.assign(translations.en, {
  "studio.eyebrow": "Human-refined service",
  "studio.title": "Upload a normal photo. A designer turns it into a bead-ready pattern.",
  "studio.copy": "No automatic generator is shown to customers. The site collects the request, then the pattern is cleaned, simplified, and checked by hand before preview approval.",
  "studio.cta": "Send a photo request",
  "studio.item1": "Crop and simplify the main subject",
  "studio.item2": "Match colors to available bead inventory",
  "studio.item3": "Prepare PDF chart, bead count, and kit notes",
  "studio.item4": "Send one preview before final delivery",
  "shop.eyebrow": "Demo shop",
  "shop.title": "A starter catalog inspired by what sells in Asia, rewritten for EU gifting.",
  "shop.copy": "Use these demo products to test demand before holding deep inventory. Images and copy are original placeholders, not copied marketplace assets.",
  "shop.petPattern": "Custom Pet Pattern",
  "shop.petPatternCopy": "Hand-refined PDF chart, color list, and one preview revision.",
  "shop.petKit": "Pet Charm DIY Kit",
  "shop.petKitCopy": "Sorted beads, pattern card, keychain hardware, and gift pouch.",
  "shop.couple": "Couple Mini Magnet",
  "shop.coupleCopy": "A small two-person pixel magnet for anniversaries and dorm rooms.",
  "shop.flower": "Cozy Flower Coaster",
  "shop.flowerCopy": "Beginner-friendly floral coaster kit with soft color palette.",
  "shop.starter": "Starter Tool Set",
  "shop.starterCopy": "Pegboard, tweezers, ironing paper, and a compact color starter pack.",
  "shop.refill": "Color Refill Pack",
  "shop.refillCopy": "Curated refill colors for pets, skin tones, flowers, and outlines.",
  "shop.seasonal": "Seasonal Lucky Charm",
  "shop.seasonalCopy": "Limited small charm kit for holidays, birthdays, or exam season.",
  "shop.finished": "Finished Gift Charm",
  "shop.finishedCopy": "A handmade finished piece for customers who do not want to craft.",
  "shop.from": "from",
  "shop.view": "Request this"
});

Object.assign(translations.zh, {
  "studio.eyebrow": "人工精修服务",
  "studio.title": "客户上传普通照片，设计师整理成可制作的拼豆图纸。",
  "studio.copy": "不把自动生成器展示给客户。网站只收集需求，后续由人工裁切主体、简化颜色、检查可制作性，再发送预览确认。",
  "studio.cta": "上传照片需求",
  "studio.item1": "裁切并简化主体",
  "studio.item2": "匹配现有拼豆库存颜色",
  "studio.item3": "准备 PDF 图纸、豆子数量和材料包备注",
  "studio.item4": "最终交付前发送一次预览",
  "shop.eyebrow": "店铺 Demo",
  "shop.title": "参考亚洲市场热卖品类，改写成适合欧洲送礼的首批商品。",
  "shop.copy": "这些 demo 用来测试需求，不需要一开始囤很多货。图片和文案是原创占位，不直接复制平台素材。",
  "shop.petPattern": "宠物定制图纸",
  "shop.petPatternCopy": "人工精修 PDF 图纸、颜色清单和一次预览修改。",
  "shop.petKit": "宠物挂件材料包",
  "shop.petKitCopy": "分装拼豆、图纸卡、钥匙扣配件和礼品袋。",
  "shop.couple": "情侣迷你磁贴",
  "shop.coupleCopy": "适合纪念日和宿舍小礼物的双人像素磁贴。",
  "shop.flower": "治愈花朵杯垫",
  "shop.flowerCopy": "适合新手的花朵杯垫材料包，配色柔和。",
  "shop.starter": "新手工具套装",
  "shop.starterCopy": "模板板、镊子、熨烫纸和基础色拼豆组合。",
  "shop.refill": "颜色补充包",
  "shop.refillCopy": "宠物、肤色、花朵和描边常用色补充装。",
  "shop.seasonal": "季节幸运挂件",
  "shop.seasonalCopy": "节日、生日或考试季可限量上新的小挂件材料包。",
  "shop.finished": "成品礼物挂件",
  "shop.finishedCopy": "给不想自己动手的客户，提供手工完成版。",
  "shop.from": "起",
  "shop.view": "咨询这款"
});

Object.assign(translations.de, {
  "studio.eyebrow": "Manuell verfeinerter Service",
  "studio.title": "Kundinnen laden ein normales Foto hoch. Ein Design wird daraus eine perlenfertige Vorlage.",
  "studio.copy": "Der automatische Generator wird nicht gezeigt. Die Website sammelt die Anfrage, danach wird das Motiv per Hand bereinigt, vereinfacht und vor der Freigabe geprüft.",
  "studio.cta": "Fotoanfrage senden",
  "studio.item1": "Hauptmotiv zuschneiden und vereinfachen",
  "studio.item2": "Farben mit verfügbarem Perlenbestand abgleichen",
  "studio.item3": "PDF-Vorlage, Perlenanzahl und Kit-Notizen vorbereiten",
  "studio.item4": "Eine Vorschau vor der finalen Lieferung senden",
  "shop.eyebrow": "Demo-Shop",
  "shop.title": "Ein Startkatalog nach asiatischen Topsellern, angepasst für EU-Geschenke.",
  "shop.copy": "Diese Demo-Produkte testen Nachfrage, bevor viel Inventar gekauft wird. Bilder und Texte sind eigene Platzhalter, keine kopierten Marketplace-Assets.",
  "shop.petPattern": "Custom Pet Pattern",
  "shop.petPatternCopy": "Handverfeinerte PDF-Vorlage, Farbliste und eine Vorschau-Revision.",
  "shop.petKit": "Pet Charm DIY Kit",
  "shop.petKitCopy": "Sortierte Perlen, Vorlage, Schlüsselanhänger-Zubehör und Geschenkbeutel.",
  "shop.couple": "Couple Mini Magnet",
  "shop.coupleCopy": "Kleiner Zwei-Personen-Pixelmagnet für Jahrestage und Wohnheime.",
  "shop.flower": "Cozy Flower Coaster",
  "shop.flowerCopy": "Einsteigerfreundliches Blumen-Untersetzer-Kit mit weicher Farbpalette.",
  "shop.starter": "Starter Tool Set",
  "shop.starterCopy": "Steckplatte, Pinzette, Bügelpapier und kompakte Starterfarben.",
  "shop.refill": "Color Refill Pack",
  "shop.refillCopy": "Kuratierte Nachfüllfarben für Haustiere, Hauttöne, Blumen und Konturen.",
  "shop.seasonal": "Seasonal Lucky Charm",
  "shop.seasonalCopy": "Limitierte kleine Charms für Feiertage, Geburtstage oder Prüfungszeit.",
  "shop.finished": "Finished Gift Charm",
  "shop.finishedCopy": "Ein fertiges Handmade-Stück für Kundinnen, die nicht basteln möchten.",
  "shop.from": "ab",
  "shop.view": "Anfragen"
});


let currentLanguage = localStorage.getItem("pixelCharmLanguage") || "en";


function syncHeader() {
  if (header && !document.body.classList.contains("inner-page")) {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  }
}

function money(value) {
  return `EUR ${value.toFixed(2)}`;
}

function selectedNumber(select, attribute) {
  const option = select.options[select.selectedIndex];
  return Number(option.dataset[attribute] || 0);
}

function translateOptions(select, map) {
  if (!select) {
    return;
  }
  [...select.options].forEach((option) => {
    const labels = map[option.value];
    if (labels) {
      option.textContent = labels[currentLanguage];
    }
  });
}

function syncEstimate() {
  if (!productSelect || !sizeSelect || !estimate || !orderForm || !emailLink) {
    return;
  }
  const base = selectedNumber(productSelect, "price");
  const extra = selectedNumber(sizeSelect, "extra");
  const total = base + extra;
  estimate.textContent = money(total);

  const data = new FormData(orderForm);
  const email = emailTranslations[currentLanguage];
  const subject = encodeURIComponent(email.subject);
  const body = encodeURIComponent(
    [
      email.greeting,
      "",
      email.intro,
      "",
      `${email.product}: ${optionTranslations.products[data.get("product")][currentLanguage]}`,
      `${email.orderSubject}: ${optionTranslations.subjects[data.get("subject")][currentLanguage]}`,
      `${email.size}: ${optionTranslations.sizes[data.get("size")][currentLanguage]}`,
      `${email.estimate}: ${money(total)}`,
      "",
      `${email.notes}: ${data.get("notes") || ""}`,
      "",
      email.attach
    ].join("\n")
  );

  emailLink.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  localStorage.setItem("pixelCharmLanguage", currentLanguage);
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : currentLanguage;
  document.documentElement.dataset.language = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.langButton === currentLanguage));
  });

  translateOptions(productSelect, optionTranslations.products);
  translateOptions(subjectSelect, optionTranslations.subjects);
  translateOptions(sizeSelect, optionTranslations.sizes);
  syncEstimate();
}

window.addEventListener("scroll", syncHeader, { passive: true });
productSelect?.addEventListener("change", syncEstimate);
sizeSelect?.addEventListener("change", syncEstimate);
subjectSelect?.addEventListener("change", syncEstimate);
orderForm?.addEventListener("input", syncEstimate);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langButton));
});

photoInput?.addEventListener("change", () => {
  const file = photoInput.files && photoInput.files[0];
  if (!file) {
    preview.innerHTML = `<span data-i18n="form.previewEmpty">${translations[currentLanguage]["form.previewEmpty"]}</span>`;
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    preview.innerHTML = "";
    const image = document.createElement("img");
    image.src = reader.result;
    image.alt = "Selected custom photo preview";
    preview.appendChild(image);
  });
  reader.readAsDataURL(file);
});

function getUsers() {
  return JSON.parse(localStorage.getItem("pixelCharmUsers") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("pixelCharmUsers", JSON.stringify(users));
}

function setSession(user) {
  localStorage.setItem("pixelCharmSession", JSON.stringify({ email: user.email }));
}

function getSessionUser() {
  const session = JSON.parse(localStorage.getItem("pixelCharmSession") || "null");
  if (!session) {
    return null;
  }
  return getUsers().find((user) => user.email === session.email) || null;
}

function setupAuthForms() {
  document.querySelectorAll("[data-auth-form]").forEach((form) => {
    const message = form.querySelector("[data-auth-message]");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const type = form.dataset.authForm;
      const users = getUsers();
      const email = String(data.get("email") || "").trim().toLowerCase();
      const password = String(data.get("password") || "");

      if (type === "register") {
        if (users.some((user) => user.email === email)) {
          message.textContent = translations[currentLanguage]["auth.registerError"];
          return;
        }
        const user = { name: String(data.get("name") || "").trim(), email, password };
        users.push(user);
        saveUsers(users);
        setSession(user);
        message.textContent = translations[currentLanguage]["auth.registerSuccess"];
        window.setTimeout(() => { window.location.href = "account.html"; }, 650);
        return;
      }

      const user = users.find((item) => item.email === email && item.password === password);
      if (!user) {
        message.textContent = translations[currentLanguage]["auth.loginError"];
        return;
      }
      setSession(user);
      message.textContent = translations[currentLanguage]["auth.loginSuccess"];
      window.setTimeout(() => { window.location.href = "account.html"; }, 650);
    });
  });
}

function setupAccountPage() {
  const nameTarget = document.querySelector("[data-account-name]");
  const emailTarget = document.querySelector("[data-account-email]");
  if (!nameTarget || !emailTarget) {
    return;
  }

  const user = getSessionUser();
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  nameTarget.textContent = user.name || "-";
  emailTarget.textContent = user.email;
}

document.querySelector("[data-logout]")?.addEventListener("click", () => {
  localStorage.removeItem("pixelCharmSession");
  window.location.href = "login.html";
});

syncHeader();
applyLanguage(currentLanguage);
setupAuthForms();
setupAccountPage();

