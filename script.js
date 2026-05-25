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
const patternPhotoInput = document.querySelector("[data-pattern-photo]");
const patternWidthInput = document.querySelector("[data-pattern-width]");
const patternHeightInput = document.querySelector("[data-pattern-height]");
const patternColorInput = document.querySelector("[data-pattern-colors]");
const patternTrimInput = document.querySelector("[data-pattern-trim]");
const patternModeSelect = document.querySelector("[data-pattern-mode]");
const patternDitherSelect = document.querySelector("[data-pattern-dither]");
const patternWidthValue = document.querySelector("[data-pattern-width-value]");
const patternHeightValue = document.querySelector("[data-pattern-height-value]");
const patternColorValue = document.querySelector("[data-pattern-color-value]");
const patternTrimValue = document.querySelector("[data-pattern-trim-value]");
const patternGenerateButton = document.querySelector("[data-pattern-generate]");
const patternCanvas = document.querySelector("[data-pattern-canvas]");
const patternStatus = document.querySelector("[data-pattern-status]");
const patternLegend = document.querySelector("[data-pattern-legend]");
const patternDownload = document.querySelector("[data-pattern-download]");
const patternCsvButton = document.querySelector("[data-pattern-csv]");
const aiCutoutButton = document.querySelector("[data-ai-cutout]");
const aiStatus = document.querySelector("[data-ai-status]");
const aiPreviewWrap = document.querySelector("[data-ai-preview-wrap]");
const aiPreviewImage = document.querySelector("[data-ai-preview]");

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
  "pattern.eyebrow": "Instant pattern maker",
  "pattern.title": "Upload a photo and test the bead chart before ordering.",
  "pattern.copy": "Browser-side ML keeps the photo on your device, extracts the subject, simplifies colors, and exports a buildable grid.",
  "pattern.upload": "Photo",
  "pattern.width": "Width",
  "pattern.height": "Height",
  "pattern.colors": "Max colors",
  "pattern.mode": "ML style",
  "pattern.modeClean": "Clean cartoon blocks",
  "pattern.modeRealistic": "Realistic photo detail",
  "pattern.dither": "Dithering",
  "pattern.ditherNone": "None",
  "pattern.ditherOrdered": "Ordered",
  "pattern.ditherDiffusion": "Soft diffusion",
  "pattern.subject": "Subject cleanup",
  "pattern.generate": "Generate chart",
  "pattern.downloadPng": "Download PNG",
  "pattern.downloadCsv": "Download color list",
  "pattern.note": "Best results: one clear subject, daylight, plain background, no tiny details.",
  "pattern.preview": "Generated chart",
  "pattern.statusEmpty": "Upload a photo to begin",
  "pattern.statusLoaded": "Photo loaded. Generate a chart.",
  "pattern.statusWorking": "Building bead chart...",
  "pattern.statusReady": "{width}x{height} grid · {beads} beads · {colors} colors",
  "pattern.statusError": "This image could not be processed. Try another JPG, PNG, or WebP.",
  "pattern.aiTitle": "AI subject extraction",
  "pattern.aiIdle": "Runs automatically after upload",
  "pattern.aiButton": "Run AI cleanup",
  "pattern.aiLoading": "Loading AI model...",
  "pattern.aiProgress": "Loading AI model {percent}%",
  "pattern.aiRunning": "Removing background and keeping the subject...",
  "pattern.aiReady": "AI cutout ready. Chart rebuilt from subject only.",
  "pattern.aiFallback": "AI cleanup failed. Using smart non-AI cleanup."
});

Object.assign(translations.zh, {
  "pattern.eyebrow": "即时图纸生成器",
  "pattern.title": "上传照片，先测试拼豆图纸效果再下单。",
  "pattern.copy": "浏览器端机器学习不会把照片上传到服务器，会提取主体、简化颜色，并导出可制作的格子图。",
  "pattern.upload": "照片",
  "pattern.width": "宽度",
  "pattern.height": "高度",
  "pattern.colors": "最多颜色",
  "pattern.mode": "机器学习风格",
  "pattern.modeClean": "干净卡通块面",
  "pattern.modeRealistic": "真实照片细节",
  "pattern.dither": "抖动算法",
  "pattern.ditherNone": "不使用",
  "pattern.ditherOrdered": "规则抖动",
  "pattern.ditherDiffusion": "柔和误差扩散",
  "pattern.subject": "主体清理",
  "pattern.generate": "生成图纸",
  "pattern.downloadPng": "下载 PNG",
  "pattern.downloadCsv": "下载颜色清单",
  "pattern.note": "效果最好：单一清晰主体、自然光、简单背景、细节不要太碎。",
  "pattern.preview": "生成图纸",
  "pattern.statusEmpty": "上传照片后开始",
  "pattern.statusLoaded": "照片已载入，可以生成图纸。",
  "pattern.statusWorking": "正在生成拼豆图纸...",
  "pattern.statusReady": "{width}x{height} 格 · {beads} 颗豆 · {colors} 色",
  "pattern.statusError": "这张图无法处理，请换一张 JPG、PNG 或 WebP。",
  "pattern.aiTitle": "AI 主体提取",
  "pattern.aiIdle": "上传后自动运行",
  "pattern.aiButton": "重新 AI 清理",
  "pattern.aiLoading": "正在加载 AI 模型...",
  "pattern.aiProgress": "AI 模型加载 {percent}%",
  "pattern.aiRunning": "正在抠图并保留主体...",
  "pattern.aiReady": "AI 抠图完成，已用主体重新生成图纸。",
  "pattern.aiFallback": "AI 清理失败，已使用智能非 AI 清理。"
});

Object.assign(translations.de, {
  "pattern.eyebrow": "Sofortiger Vorlagen-Generator",
  "pattern.title": "Foto hochladen und die Perlenvorlage vor der Bestellung testen.",
  "pattern.copy": "Browserseitiges ML behält das Foto auf deinem Gerät, stellt das Motiv frei, reduziert Farben und exportiert ein baubares Raster.",
  "pattern.upload": "Foto",
  "pattern.width": "Breite",
  "pattern.height": "Höhe",
  "pattern.colors": "Max. Farben",
  "pattern.mode": "ML-Stil",
  "pattern.modeClean": "Klare Cartoon-Blöcke",
  "pattern.modeRealistic": "Realistische Fotodetails",
  "pattern.dither": "Dithering",
  "pattern.ditherNone": "Aus",
  "pattern.ditherOrdered": "Geordnet",
  "pattern.ditherDiffusion": "Weiche Diffusion",
  "pattern.subject": "Motiv bereinigen",
  "pattern.generate": "Vorlage erstellen",
  "pattern.downloadPng": "PNG herunterladen",
  "pattern.downloadCsv": "Farbliste herunterladen",
  "pattern.note": "Beste Ergebnisse: ein klares Motiv, Tageslicht, ruhiger Hintergrund, keine winzigen Details.",
  "pattern.preview": "Generierte Vorlage",
  "pattern.statusEmpty": "Lade ein Foto hoch",
  "pattern.statusLoaded": "Foto geladen. Vorlage kann erstellt werden.",
  "pattern.statusWorking": "Perlenvorlage wird erstellt...",
  "pattern.statusReady": "{width}x{height} Raster · {beads} Perlen · {colors} Farben",
  "pattern.statusError": "Dieses Bild konnte nicht verarbeitet werden. Versuche JPG, PNG oder WebP.",
  "pattern.aiTitle": "KI-Motivfreistellung",
  "pattern.aiIdle": "Läuft automatisch nach dem Upload",
  "pattern.aiButton": "KI-Bereinigung starten",
  "pattern.aiLoading": "KI-Modell wird geladen...",
  "pattern.aiProgress": "KI-Modell lädt {percent}%",
  "pattern.aiRunning": "Hintergrund wird entfernt und Motiv behalten...",
  "pattern.aiReady": "KI-Ausschnitt fertig. Vorlage aus Motiv neu erstellt.",
  "pattern.aiFallback": "KI-Bereinigung fehlgeschlagen. Smarte lokale Bereinigung aktiv."
});

let currentLanguage = localStorage.getItem("pixelCharmLanguage") || "en";

const beadPalette = [
  { code: "W01", name: "White", hex: "#f8f5ec" },
  { code: "C02", name: "Cream", hex: "#f4dfb1" },
  { code: "Y03", name: "Yellow", hex: "#ffd84a" },
  { code: "Y04", name: "Gold", hex: "#f0aa25" },
  { code: "O05", name: "Orange", hex: "#f47a31" },
  { code: "R06", name: "Tomato", hex: "#e64535" },
  { code: "R07", name: "Red", hex: "#bf2430" },
  { code: "P08", name: "Blush", hex: "#f7a7b8" },
  { code: "P09", name: "Pink", hex: "#ec5e9c" },
  { code: "P10", name: "Magenta", hex: "#b53a87" },
  { code: "V11", name: "Lavender", hex: "#bda5d8" },
  { code: "V12", name: "Purple", hex: "#6d4b9a" },
  { code: "B13", name: "Sky", hex: "#8fc7e8" },
  { code: "B14", name: "Blue", hex: "#2d7fbd" },
  { code: "B15", name: "Navy", hex: "#1f3d68" },
  { code: "G16", name: "Mint", hex: "#9ad8c0" },
  { code: "G17", name: "Green", hex: "#41a866" },
  { code: "G18", name: "Olive", hex: "#6c8c45" },
  { code: "T19", name: "Teal", hex: "#168f8b" },
  { code: "N20", name: "Tan", hex: "#d7a676" },
  { code: "N21", name: "Caramel", hex: "#a96d3d" },
  { code: "N22", name: "Brown", hex: "#6b442e" },
  { code: "N23", name: "Dark brown", hex: "#3b2922" },
  { code: "S24", name: "Light gray", hex: "#d9d7d0" },
  { code: "S25", name: "Gray", hex: "#8e8d88" },
  { code: "S26", name: "Charcoal", hex: "#45484c" },
  { code: "K27", name: "Black", hex: "#171717" },
  { code: "F28", name: "Peach", hex: "#f0b48f" },
  { code: "F29", name: "Sand", hex: "#e2c795" },
  { code: "F30", name: "Coral", hex: "#eb7663" },
  { code: "A31", name: "Aqua", hex: "#4ec6d3" },
  { code: "L32", name: "Lime", hex: "#b8d957" }
].map((color) => {
  const rgb = hexToRgb(color.hex);
  return { ...color, rgb, lab: rgbToLab(rgb) };
});

const patternState = {
  file: null,
  image: null,
  originalImage: null,
  aiImage: null,
  aiPreviewUrl: "",
  aiRunId: 0,
  cells: [],
  colors: [],
  csv: ""
};

const AI_BACKGROUND_REMOVAL_MODULE = "https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.7.0/+esm";
let aiBackgroundRemovalPromise = null;

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
  syncPatternControls();
  if (patternState.colors.length) {
    renderPatternLegend(patternState.colors);
    updatePatternStatus(patternState.cells.filter(Boolean).length);
  }
}

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  return [
    parseInt(value.slice(0, 2), 16),
    parseInt(value.slice(2, 4), 16),
    parseInt(value.slice(4, 6), 16)
  ];
}

function colorDistance(a, b) {
  const dr = a[0] - b[0];
  const dg = a[1] - b[1];
  const db = a[2] - b[2];
  return dr * dr + dg * dg + db * db;
}

function clamp(value, min = 0, max = 255) {
  return Math.max(min, Math.min(max, value));
}

function pivotRgb(value) {
  const normalized = value / 255;
  return normalized <= 0.04045
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
}

function pivotXyz(value) {
  return value > 0.008856 ? Math.cbrt(value) : (7.787 * value) + (16 / 116);
}

function rgbToLab(rgb) {
  const r = pivotRgb(rgb[0]);
  const g = pivotRgb(rgb[1]);
  const b = pivotRgb(rgb[2]);

  const x = ((r * 0.4124564) + (g * 0.3575761) + (b * 0.1804375)) / 0.95047;
  const y = (r * 0.2126729) + (g * 0.7151522) + (b * 0.072175);
  const z = ((r * 0.0193339) + (g * 0.119192) + (b * 0.9503041)) / 1.08883;

  const fx = pivotXyz(x);
  const fy = pivotXyz(y);
  const fz = pivotXyz(z);

  return [
    (116 * fy) - 16,
    500 * (fx - fy),
    200 * (fy - fz)
  ];
}

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}

function ciede2000(labA, labB) {
  const [l1, a1, b1] = labA;
  const [l2, a2, b2] = labB;
  const kL = 1;
  const kC = 1;
  const kH = 1;
  const c1 = Math.hypot(a1, b1);
  const c2 = Math.hypot(a2, b2);
  const cBar = (c1 + c2) / 2;
  const cBar7 = cBar ** 7;
  const g = 0.5 * (1 - Math.sqrt(cBar7 / (cBar7 + (25 ** 7))));
  const a1Prime = (1 + g) * a1;
  const a2Prime = (1 + g) * a2;
  const c1Prime = Math.hypot(a1Prime, b1);
  const c2Prime = Math.hypot(a2Prime, b2);
  const h1Prime = (radiansToDegrees(Math.atan2(b1, a1Prime)) + 360) % 360;
  const h2Prime = (radiansToDegrees(Math.atan2(b2, a2Prime)) + 360) % 360;
  const deltaLPrime = l2 - l1;
  const deltaCPrime = c2Prime - c1Prime;
  let deltahPrime = h2Prime - h1Prime;

  if (c1Prime * c2Prime === 0) {
    deltahPrime = 0;
  } else if (deltahPrime > 180) {
    deltahPrime -= 360;
  } else if (deltahPrime < -180) {
    deltahPrime += 360;
  }

  const deltaHPrime = 2 * Math.sqrt(c1Prime * c2Prime) * Math.sin(degreesToRadians(deltahPrime / 2));
  const lBarPrime = (l1 + l2) / 2;
  const cBarPrime = (c1Prime + c2Prime) / 2;
  let hBarPrime = h1Prime + h2Prime;

  if (c1Prime * c2Prime === 0) {
    hBarPrime = h1Prime + h2Prime;
  } else if (Math.abs(h1Prime - h2Prime) > 180) {
    hBarPrime = h1Prime + h2Prime < 360 ? (h1Prime + h2Prime + 360) / 2 : (h1Prime + h2Prime - 360) / 2;
  } else {
    hBarPrime = (h1Prime + h2Prime) / 2;
  }

  const tValue = 1
    - (0.17 * Math.cos(degreesToRadians(hBarPrime - 30)))
    + (0.24 * Math.cos(degreesToRadians(2 * hBarPrime)))
    + (0.32 * Math.cos(degreesToRadians((3 * hBarPrime) + 6)))
    - (0.2 * Math.cos(degreesToRadians((4 * hBarPrime) - 63)));
  const deltaTheta = 30 * Math.exp(-(((hBarPrime - 275) / 25) ** 2));
  const rC = 2 * Math.sqrt((cBarPrime ** 7) / ((cBarPrime ** 7) + (25 ** 7)));
  const sL = 1 + ((0.015 * ((lBarPrime - 50) ** 2)) / Math.sqrt(20 + ((lBarPrime - 50) ** 2)));
  const sC = 1 + (0.045 * cBarPrime);
  const sH = 1 + (0.015 * cBarPrime * tValue);
  const rT = -Math.sin(degreesToRadians(2 * deltaTheta)) * rC;

  return Math.sqrt(
    ((deltaLPrime / (kL * sL)) ** 2)
    + ((deltaCPrime / (kC * sC)) ** 2)
    + ((deltaHPrime / (kH * sH)) ** 2)
    + (rT * (deltaCPrime / (kC * sC)) * (deltaHPrime / (kH * sH)))
  );
}

function nearestPaletteColor(rgb, palette = beadPalette) {
  const lab = rgbToLab(rgb);
  return palette.reduce((best, color) => {
    const score = ciede2000(lab, color.lab);
    return score < best.score ? { color, score } : best;
  }, { color: palette[0], score: Infinity }).color;
}

function syncPatternControls() {
  if (!patternWidthInput) {
    return;
  }
  patternWidthValue.textContent = patternWidthInput.value;
  patternHeightValue.textContent = patternHeightInput.value;
  patternColorValue.textContent = patternColorInput.value;
  patternTrimValue.textContent = patternTrimInput.value;
}

function setPatternButtons(isReady) {
  if (patternDownload) {
    patternDownload.classList.toggle("is-disabled", !isReady);
    patternDownload.setAttribute("aria-disabled", String(!isReady));
  }
  if (patternCsvButton) {
    patternCsvButton.disabled = !isReady;
  }
}

function setAiStatus(key, replacements = {}) {
  if (!aiStatus) {
    return;
  }
  let text = t(key);
  Object.entries(replacements).forEach(([name, value]) => {
    text = text.replace(`{${name}}`, String(value));
  });
  aiStatus.textContent = text;
}

function setAiBusy(isBusy) {
  if (aiCutoutButton) {
    aiCutoutButton.disabled = isBusy || !patternState.file;
  }
}

function resetPatternOutput() {
  patternState.cells = [];
  patternState.colors = [];
  patternState.csv = "";
  if (patternLegend) {
    patternLegend.innerHTML = "";
  }
  setPatternButtons(false);
}

function loadImageFromSource(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image), { once: true });
    image.addEventListener("error", reject, { once: true });
    image.src = source;
  });
}

function getAiBackgroundRemover() {
  if (!aiBackgroundRemovalPromise) {
    aiBackgroundRemovalPromise = import(AI_BACKGROUND_REMOVAL_MODULE).then((module) => {
      return module.default || module.removeBackground || module.imglyRemoveBackground;
    });
  }
  return aiBackgroundRemovalPromise;
}

function setAiPreview(blob) {
  if (!aiPreviewImage || !aiPreviewWrap) {
    return;
  }
  if (patternState.aiPreviewUrl) {
    URL.revokeObjectURL(patternState.aiPreviewUrl);
  }
  patternState.aiPreviewUrl = URL.createObjectURL(blob);
  aiPreviewImage.src = patternState.aiPreviewUrl;
  aiPreviewWrap.hidden = false;
}

async function runAiCutout() {
  if (!patternState.file) {
    return;
  }

  const runId = patternState.aiRunId + 1;
  patternState.aiRunId = runId;
  setAiBusy(true);
  setAiStatus("pattern.aiLoading");

  try {
    const removeBackground = await getAiBackgroundRemover();
    if (runId !== patternState.aiRunId || typeof removeBackground !== "function") {
      return;
    }

    setAiStatus("pattern.aiRunning");
    const cutoutBlob = await removeBackground(patternState.file, {
      model: "isnet_fp16",
      output: { format: "image/png", type: "foreground" },
      progress: (key, current, total) => {
        if (runId !== patternState.aiRunId || !total) {
          return;
        }
        const percent = Math.min(100, Math.round((current / total) * 100));
        setAiStatus("pattern.aiProgress", { percent });
      }
    });

    if (runId !== patternState.aiRunId) {
      return;
    }

    setAiPreview(cutoutBlob);
    const cutoutUrl = URL.createObjectURL(cutoutBlob);
    const aiImage = await loadImageFromSource(cutoutUrl);
    URL.revokeObjectURL(cutoutUrl);

    if (runId !== patternState.aiRunId) {
      return;
    }

    patternState.aiImage = aiImage;
    patternState.image = aiImage;
    setAiStatus("pattern.aiReady");
    generatePattern();
  } catch (error) {
    if (runId === patternState.aiRunId) {
      setAiStatus("pattern.aiFallback");
      if (patternState.originalImage) {
        patternState.image = patternState.originalImage;
        generatePattern();
      }
    }
  } finally {
    if (runId === patternState.aiRunId) {
      setAiBusy(false);
    }
  }
}

function drawImageCover(context, image, width, height) {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const sourceWidth = width / scale;
  const sourceHeight = height / scale;
  const sourceX = (image.naturalWidth - sourceWidth) / 2;
  const sourceY = (image.naturalHeight - sourceHeight) / 2;
  context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, width, height);
}

function findAlphaBounds(image) {
  const maxSide = 420;
  const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
  const scanWidth = Math.max(1, Math.round(image.naturalWidth * scale));
  const scanHeight = Math.max(1, Math.round(image.naturalHeight * scale));
  const scanCanvas = document.createElement("canvas");
  scanCanvas.width = scanWidth;
  scanCanvas.height = scanHeight;
  const scanContext = scanCanvas.getContext("2d", { willReadFrequently: true });
  scanContext.drawImage(image, 0, 0, scanWidth, scanHeight);
  const data = scanContext.getImageData(0, 0, scanWidth, scanHeight).data;
  let minX = scanWidth;
  let minY = scanHeight;
  let maxX = -1;
  let maxY = -1;
  let visiblePixels = 0;

  for (let y = 0; y < scanHeight; y += 1) {
    for (let x = 0; x < scanWidth; x += 1) {
      const alpha = data[(y * scanWidth + x) * 4 + 3];
      if (alpha > 24) {
        visiblePixels += 1;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  if (!visiblePixels || visiblePixels > scanWidth * scanHeight * 0.96) {
    return null;
  }

  const padding = Math.round(Math.max(maxX - minX, maxY - minY) * 0.08);
  minX = Math.max(0, minX - padding);
  minY = Math.max(0, minY - padding);
  maxX = Math.min(scanWidth - 1, maxX + padding);
  maxY = Math.min(scanHeight - 1, maxY + padding);

  return {
    x: minX / scale,
    y: minY / scale,
    width: (maxX - minX + 1) / scale,
    height: (maxY - minY + 1) / scale
  };
}

function drawImageSubjectAware(context, image, width, height) {
  const bounds = findAlphaBounds(image);
  if (!bounds) {
    drawImageCover(context, image, width, height);
    return;
  }

  const scale = Math.min(width / bounds.width, height / bounds.height);
  const targetWidth = bounds.width * scale;
  const targetHeight = bounds.height * scale;
  const targetX = (width - targetWidth) / 2;
  const targetY = (height - targetHeight) / 2;
  context.drawImage(
    image,
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    targetX,
    targetY,
    targetWidth,
    targetHeight
  );
}

function collectBackgroundSamples(imageData, width, height) {
  const samples = [];
  const step = Math.max(1, Math.floor(Math.min(width, height) / 8));
  const points = [];

  for (let x = 0; x < width; x += step) {
    points.push([x, 0], [x, height - 1]);
  }
  for (let y = 0; y < height; y += step) {
    points.push([0, y], [width - 1, y]);
  }

  points.push([width - 1, height - 1]);

  points.forEach(([x, y]) => {
    const index = (y * width + x) * 4;
    if (imageData[index + 3] > 32) {
      samples.push([imageData[index], imageData[index + 1], imageData[index + 2]]);
    }
  });

  return samples;
}

function shouldRemoveBackground(rgb, samples, threshold) {
  if (threshold <= 0 || !samples.length) {
    return false;
  }
  const thresholdScore = threshold * threshold;
  return samples.some((sample) => colorDistance(rgb, sample) < thresholdScore);
}

function adjustRgbForMode(rgb, mode) {
  const contrast = mode === "realistic" ? 1.06 : 1.22;
  const saturation = mode === "realistic" ? 1.04 : 1.2;
  const contrasted = rgb.map((channel) => clamp(((channel - 128) * contrast) + 128));
  const gray = (contrasted[0] * 0.299) + (contrasted[1] * 0.587) + (contrasted[2] * 0.114);
  return contrasted.map((channel) => clamp(gray + ((channel - gray) * saturation)));
}

function bayerOffset(x, y) {
  const bayer = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5]
  ];
  return ((bayer[y % 4][x % 4] / 16) - 0.5) * 34;
}

function addError(target, error, factor) {
  if (!target) {
    return;
  }
  target[0] = clamp(target[0] + (error[0] * factor));
  target[1] = clamp(target[1] + (error[1] * factor));
  target[2] = clamp(target[2] + (error[2] * factor));
}

function mapPixelsToPalette(pixelBuffer, selectedPalette, width, height, ditherMode) {
  const working = pixelBuffer.map((pixel) => (pixel ? [...pixel] : null));
  const cells = new Array(working.length).fill(null);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = (y * width) + x;
      const pixel = working[index];
      if (!pixel) {
        continue;
      }

      let mappedRgb = pixel;
      if (ditherMode === "ordered") {
        const offset = bayerOffset(x, y);
        mappedRgb = [
          clamp(pixel[0] + offset),
          clamp(pixel[1] + offset),
          clamp(pixel[2] + offset)
        ];
      }

      const color = nearestPaletteColor(mappedRgb, selectedPalette);
      cells[index] = color;

      if (ditherMode === "diffusion") {
        const error = [
          pixel[0] - color.rgb[0],
          pixel[1] - color.rgb[1],
          pixel[2] - color.rgb[2]
        ];
        addError(x < width - 1 ? working[index + 1] : null, error, 7 / 16);
        addError(x > 0 ? working[index + width - 1] : null, error, 3 / 16);
        addError(working[index + width], error, 5 / 16);
        addError(x < width - 1 ? working[index + width + 1] : null, error, 1 / 16);
      }
    }
  }

  return cells;
}

function keepMainSubjectComponents(cells, width, height) {
  const visited = new Uint8Array(cells.length);
  const components = [];

  for (let start = 0; start < cells.length; start += 1) {
    if (!cells[start] || visited[start]) {
      continue;
    }

    const component = [];
    const stack = [start];
    visited[start] = 1;

    while (stack.length) {
      const index = stack.pop();
      component.push(index);
      const x = index % width;
      const neighbors = [];

      if (x > 0) {
        neighbors.push(index - 1);
      }
      if (x < width - 1) {
        neighbors.push(index + 1);
      }
      if (index >= width) {
        neighbors.push(index - width);
      }
      if (index < cells.length - width) {
        neighbors.push(index + width);
      }

      neighbors.forEach((neighbor) => {
        if (cells[neighbor] && !visited[neighbor]) {
          visited[neighbor] = 1;
          stack.push(neighbor);
        }
      });
    }

    components.push(component);
  }

  if (!components.length) {
    return cells;
  }

  components.sort((a, b) => b.length - a.length);
  const largest = components[0].length;
  const minimumSubjectPart = Math.max(10, Math.floor(largest * 0.08));
  const keep = new Set();

  components.forEach((component, index) => {
    if (index < 2 || component.length >= minimumSubjectPart) {
      component.forEach((cellIndex) => keep.add(cellIndex));
    }
  });

  return cells.map((cell, index) => (keep.has(index) ? cell : null));
}

function buildPatternCells(image, width, height, maxColors, trim, mode, ditherMode) {
  const sourceCanvas = document.createElement("canvas");
  sourceCanvas.width = width;
  sourceCanvas.height = height;
  const sourceContext = sourceCanvas.getContext("2d", { willReadFrequently: true });
  sourceContext.imageSmoothingEnabled = true;
  sourceContext.imageSmoothingQuality = "high";
  drawImageSubjectAware(sourceContext, image, width, height);

  const imageData = sourceContext.getImageData(0, 0, width, height).data;
  const backgroundSamples = collectBackgroundSamples(imageData, width, height)
    .map((sample) => adjustRgbForMode(sample, mode));
  const pixelBuffer = [];
  const rawCounts = new Map();

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = (y * width + x) * 4;
      const alpha = imageData[index + 3];
      const rgb = adjustRgbForMode([imageData[index], imageData[index + 1], imageData[index + 2]], mode);

      if (alpha < 16 || shouldRemoveBackground(rgb, backgroundSamples, trim)) {
        pixelBuffer.push(null);
        continue;
      }

      const color = nearestPaletteColor(rgb);
      pixelBuffer.push(rgb);
      rawCounts.set(color.code, (rawCounts.get(color.code) || 0) + 1);
    }
  }

  const selectedPalette = [...rawCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxColors)
    .map(([code]) => beadPalette.find((color) => color.code === code));

  if (!selectedPalette.length) {
    return { cells: pixelBuffer.map(() => null), colors: [] };
  }

  const cells = mapPixelsToPalette(pixelBuffer, selectedPalette, width, height, ditherMode);

  const cleanedCells = keepMainSubjectComponents(cells, width, height);
  const finalCounts = new Map();
  cleanedCells.forEach((color) => {
    if (color) {
      finalCounts.set(color.code, (finalCounts.get(color.code) || 0) + 1);
    }
  });

  const colors = [...finalCounts.entries()]
    .map(([code, count]) => ({ ...beadPalette.find((color) => color.code === code), count }))
    .sort((a, b) => b.count - a.count);

  return { cells: cleanedCells, colors };
}

function readableTextColor(hex) {
  const [r, g, b] = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.58 ? "#1d1b1a" : "#ffffff";
}

function renderPatternCanvas(cells, colors, width, height) {
  if (!patternCanvas) {
    return;
  }

  const context = patternCanvas.getContext("2d");
  const cellSize = Math.max(8, Math.min(18, Math.floor(680 / Math.max(width, height))));
  patternCanvas.width = width * cellSize;
  patternCanvas.height = height * cellSize;

  context.fillStyle = "#fffdfa";
  context.fillRect(0, 0, patternCanvas.width, patternCanvas.height);

  const colorNumbers = new Map(colors.map((color, index) => [color.code, String(index + 1)]));

  cells.forEach((color, index) => {
    const x = (index % width) * cellSize;
    const y = Math.floor(index / width) * cellSize;

    if (color) {
      context.fillStyle = color.hex;
      context.fillRect(x, y, cellSize, cellSize);
      if (cellSize >= 12) {
        context.fillStyle = readableTextColor(color.hex);
        context.font = `700 ${Math.max(8, Math.floor(cellSize * 0.52))}px Inter, Arial, sans-serif`;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(colorNumbers.get(color.code), x + cellSize / 2, y + cellSize / 2);
      }
    }

    context.strokeStyle = "rgba(29, 27, 26, 0.18)";
    context.lineWidth = 1;
    context.strokeRect(x + 0.5, y + 0.5, cellSize, cellSize);
  });
}

function renderPatternLegend(colors) {
  if (!patternLegend) {
    return;
  }
  patternLegend.innerHTML = "";
  colors.forEach((color, index) => {
    const item = document.createElement("div");
    item.className = "legend-item";

    const swatch = document.createElement("span");
    swatch.className = "legend-swatch";
    swatch.style.background = color.hex;

    const name = document.createElement("span");
    name.innerHTML = `<strong>${index + 1}. ${color.code}</strong> ${color.name}`;

    const count = document.createElement("span");
    count.textContent = String(color.count);

    item.append(swatch, name, count);
    patternLegend.appendChild(item);
  });
}

function updatePatternStatus(beadCount) {
  if (!patternStatus || !patternWidthInput) {
    return;
  }
  patternStatus.textContent = t("pattern.statusReady")
    .replace("{width}", patternWidthInput.value)
    .replace("{height}", patternHeightInput.value)
    .replace("{beads}", String(beadCount))
    .replace("{colors}", String(patternState.colors.length));
}

function buildPatternCsv(colors) {
  const rows = [["code", "name", "hex", "beads"]];
  colors.forEach((color) => rows.push([color.code, color.name, color.hex, String(color.count)]));
  return rows.map((row) => row.map((cell) => `"${cell.replaceAll('"', '""')}"`).join(",")).join("\n");
}

function generatePattern() {
  if (!patternState.image || !patternWidthInput) {
    return;
  }
  patternStatus.textContent = t("pattern.statusWorking");

  window.requestAnimationFrame(() => {
    try {
      const width = Number(patternWidthInput.value);
      const height = Number(patternHeightInput.value);
      const maxColors = Number(patternColorInput.value);
      const trim = Number(patternTrimInput.value);
      const mode = patternModeSelect?.value || "clean";
      const ditherMode = patternDitherSelect?.value || "none";
      const result = buildPatternCells(patternState.image, width, height, maxColors, trim, mode, ditherMode);
      const beadCount = result.cells.filter(Boolean).length;

      patternState.cells = result.cells;
      patternState.colors = result.colors;
      patternState.csv = buildPatternCsv(result.colors);

      renderPatternCanvas(result.cells, result.colors, width, height);
      renderPatternLegend(result.colors);
      updatePatternStatus(beadCount);

      patternDownload.href = patternCanvas.toDataURL("image/png");
      setPatternButtons(Boolean(beadCount));
    } catch (error) {
      patternStatus.textContent = t("pattern.statusError");
      setPatternButtons(false);
    }
  });
}

window.addEventListener("scroll", syncHeader, { passive: true });
productSelect?.addEventListener("change", syncEstimate);
sizeSelect?.addEventListener("change", syncEstimate);
subjectSelect?.addEventListener("change", syncEstimate);
orderForm?.addEventListener("input", syncEstimate);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langButton));
});

[
  patternWidthInput,
  patternHeightInput,
  patternColorInput,
  patternTrimInput,
  patternModeSelect,
  patternDitherSelect
].forEach((input) => {
  input?.addEventListener("input", () => {
    syncPatternControls();
    if (patternState.image) {
      generatePattern();
    }
  });
});

patternGenerateButton?.addEventListener("click", generatePattern);
aiCutoutButton?.addEventListener("click", runAiCutout);

patternPhotoInput?.addEventListener("change", () => {
  const file = patternPhotoInput.files && patternPhotoInput.files[0];
  if (!file) {
    patternState.file = null;
    patternState.image = null;
    patternState.originalImage = null;
    patternState.aiImage = null;
    patternState.aiRunId += 1;
    patternStatus.textContent = t("pattern.statusEmpty");
    setAiStatus("pattern.aiIdle");
    setAiBusy(false);
    if (aiPreviewWrap) {
      aiPreviewWrap.hidden = true;
    }
    resetPatternOutput();
    return;
  }

  patternState.file = file;
  patternState.aiImage = null;
  patternState.aiRunId += 1;
  resetPatternOutput();
  setAiStatus("pattern.aiLoading");
  setAiBusy(false);
  if (aiPreviewWrap) {
    aiPreviewWrap.hidden = true;
  }

  const imageUrl = URL.createObjectURL(file);
  loadImageFromSource(imageUrl)
    .then((image) => {
      URL.revokeObjectURL(imageUrl);
      patternState.originalImage = image;
      patternState.image = image;
      patternStatus.textContent = t("pattern.statusLoaded");
      generatePattern();
      runAiCutout();
    })
    .catch(() => {
      URL.revokeObjectURL(imageUrl);
      patternStatus.textContent = t("pattern.statusError");
      setAiStatus("pattern.aiFallback");
      setPatternButtons(false);
    });
});

patternCsvButton?.addEventListener("click", () => {
  if (!patternState.csv) {
    return;
  }
  const blob = new Blob([patternState.csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "pixel-charm-colors.csv";
  link.click();
  URL.revokeObjectURL(link.href);
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
