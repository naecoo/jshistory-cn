import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "附录",
        "link": "appendices.html"
    },
    'next': {
        "text": "参考文献",
        "link": "references.html"
    },
    'sidebar': [
        {
            "text": "JavaScript 20 年",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "text": "语言诞生",
            "link": "part-1.html",
            "pagePath": "part-1.md"
        },
        {
            "text": "创立标准",
            "link": "part-2.html",
            "pagePath": "part-2.md"
        },
        {
            "text": "改革失败",
            "link": "part-3.html",
            "pagePath": "part-3.md"
        },
        {
            "text": "继往开来",
            "link": "part-4.html",
            "pagePath": "part-4.md"
        },
        {
            "text": "附录",
            "link": "appendices.html",
            "pagePath": "appendices.md"
        },
        {
            "text": "备注",
            "link": "notes.html",
            "pagePath": "notes.md"
        },
        {
            "text": "参考文献",
            "link": "references.html",
            "pagePath": "references.md"
        }
    ],
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "notes.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "notes.html",
    'title': "备注",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="%E5%A4%87%E6%B3%A8">备注<a class="anchor" href="#%E5%A4%87%E6%B3%A8">§</a></h1>\n<ul>\n<li><a id="4">[4]</a> 在 Coders at Work [<a href="./references.html#codersatwork">Seibel 2009</a>, chapter 4] 一书中，对 Eich 的早期职业生涯有更详细的描述。</li>\n<li><a id="5">[5]</a> 此处指 Scheme 编程语言 [<a href="./references.html#Sussman75scheme:an">Sussman and Steele Jr 1975</a>]。</li>\n<li><a id="6">[6]</a> Java 的秘密 alpha 版本是 1995 年 3 月或 4 月发布的。</li>\n<li><a id="7">[7]</a> Jon Bentley [<a href="./references.html#littlelangs">1986</a>] 引入了「小语言」（little language）术语，以表示那些小而易于学习的语言。它们专注于解决特定领域的问题，并不包含许多传统语言中的特性。</li>\n<li><a id="8">[8]</a> Mocha 的诞生日期没有已知的确切记录，但 Brendan Eich 相信这一时间是 5 月 6 日到 15 日。</li>\n<li><a id="9">[9]</a> 最早的 Mocha 实现使用了大型的 <em>discriminated union</em><sup><a href="./appendices.html#discriminated-union">g</a></sup> 来表达不同的数据<em>值</em><sup><a href="./appendices.html#value">g</a></sup>，并基于引用计数来做内存管理。</li>\n<li><a id="10">[10]</a> 在 Brendan Eich 进入 Netscape 的第一个月里，他在服务器团队工作。</li>\n<li><a id="11">[11]</a> Eich 的讨论对象包括曾在 General Magic 公司工作过的 John Giannandrea，他在那里实现了两门可以同时在客户端与服务端使用的编程语言。</li>\n<li><a id="12">[12]</a> <code>eval</code> 的设计，可以支持某种形式上对代码的部分求值，或者将提供给客户端的代码在服务端执行，和 Telescript [<a href="./references.html#telescript">General Magic 1995</a>] 代理类似。</li>\n<li><a id="13">[13]</a> 1995 年的开发者不会使用「冲刺」（sprint）这个术语，但它很好地描述了 Eich 所做工作的性质。</li>\n<li><a id="14">[14]</a> 复合语句包含了嵌套语句，以此作为其语法结构的一部分。通常被用作嵌套语句的是一个语句块。大多数种类的复合语句内都有单条嵌套语句。在这种情况下，嵌套语句是复合语句的「主体」。</li>\n<li><a id="15">[15]</a> <code>with</code> 语句是在 10 天 Mocha 冲刺结束后，应 Netscape LiveWire 团队的要求而添加的。</li>\n<li><a id="16">[16]</a> 借鉴部分包括 AWK 中函数声明的语法，以及 <code>return</code> 语句的语义。</li>\n<li><a id="17">[17]</a> 本部分中的「undefined」使用斜体表示，因为 JavaScript 1.0 中尚未提供能直接获取该值的名称。</li>\n<li><a id="18">[18]</a> 所谓遮盖，指创建一个新属性，以此覆盖掉对原型属性的访问。</li>\n<li><a id="19">[19]</a> 由于 JavaScript 的对象抽象机制缺乏正式的命名，因此很难讨论 JavaScript 库所支持的特定种类的对象。JavaScript 文档中使用了包括「类型」、「对象」、「构造函数」和「类」在内的各种术语来讨论这种抽象。在本文的余下部分，对于一组具备共同的表示和方法的 JavaScript 对象，我们使用「类」这个词汇来讨论对它们的定义，而不管具体的定义形式如何。</li>\n<li><a id="20">[20]</a> 最早的 HTML <code>&lt;frame&gt;</code> 标签已经被废弃，并由 <code>&lt;iframe&gt;</code> 标签所取代。但本节中所讨论的语义，对于这两种元素来说是相同的。</li>\n<li><a id="21">[21]</a> 只要脚本体中不出现任何 <code>&gt;</code> 或 <code>--</code> 这样在 HTML 注释中非法的运算符，就属于有效的 HTML 注释。</li>\n<li><a id="22">[22]</a> 本节中的大部分材料，均基于 Allen Wirfs-Brock 在 2018 年 3 月 22 日对 Robert Welland、Shon Katzenberger 和 Peter Kukol 进行的采访录音 [<a href="./references.html#jscript:interview">Welland et al. 2018</a>]。</li>\n<li><a id="23">[23]</a> VBA 即 Visual Basic for Application，属于在 Microsoft Office 应用中嵌入的一种 Visual Basic 6 的变体。</li>\n<li><a id="24">[24]</a> 在 2018 年接受采访时，Kukol 说他最近访问了微软的 JavaScript 团队，发现他最初的解析器仍然（在扩展后）被微软当时的 JavaScript 实现所使用。</li>\n<li><a id="25">[25]</a> 在 JavaScript 社区中，术语「引擎」指的是 JavaScript 语言的实现。JavaScript 引擎通常由解析器、虚拟机（或类似的运行时支持）、垃圾收集器、标准库实现和其他组件所组成。</li>\n<li><a id="26">[26]</a> 这是 Brendan Eich 的回顾性描述。所谓「技术债」并不是他在 1996 年会用来表达此类「弥补维护上的拖延」类型需求的词汇。</li>\n<li><a id="27">[27]</a> SpiderMonkey 成为了后续 Netscape 和 Mozilla 浏览器中 JavaScript 子系统的名称。截止到 2020 年，尽管实际实现技术已经多次改变，Mozilla 仍然在使用这个名称。</li>\n<li><a id="28">[28]</a> JavaScript 1.2 的文档和 ES3 规范中，将字面量语法称为「数组初始化器」和「对象初始化器」。但「字面量」术语在 JavaScript 程序员群体与文章和书籍中更为常见。</li>\n<li><a id="29">[29]</a> <code>__proto__</code> 伪属性类似于 Self 中的 parent slot。</li>\n<li><a id="30">[30]</a> 所谓「互联网节奏」（Internet time）一词，是为了描述 Netscape 和其他早期 Web 技术开发商的短开发周期与频繁的产品发布而创造的。</li>\n<li><a id="31">[31]</a> 在此期间，Ecma 使用明确的连字符来拼写「coördinating」一词。</li>\n<li><a id="32">[32]</a> Ecma 准会员仅可参加一个技术委员会。Ecma 称其最高会员等级为标准会员。标准会员是 Ecma GA 大会的正式投票成员，可参加所有的技术委员会。</li>\n<li><a id="33">[33]</a> Welland 想到的可能是 McCarthy 编写的附录 B 中，对 PROG 特性的描述。</li>\n<li><a id="34">[34]</a> 我们没能找到关于这些频道的档案。</li>\n<li><a id="35">[35]</a> Brendan Eich 认为，Netscape 从来没有认真考虑过允许 Ecma 使用 LiveScript 这个名字。</li>\n<li><a id="36">[36]</a> RDScript 指 Rapid Development Scripting Language。</li>\n<li><a id="37">[37]</a> JavaScript 1.3 中的序列化方案，包含了一套可扩展的 <code>toSource</code> 方法，用于将单个对象序列化为 JavaScript 源代码。另外还有用于表示循环引用的 <code>#</code> 变量。全局函数 <code>uneval</code> 会从一个对象的根级开始，序列化出一份对象图。这一过程所产生的源码字符串，可以用 <code>eval</code> 进行反序列化。Brendan Eich 从 Common Lisp [<a href="./references.html#steele1990common">Steele 1990</a>, pages 578-579] 中借鉴了 <code>#</code> 变量的 <code>#n=</code> 和 <code>#n#</code> 语法。</li>\n<li><a id="38">[38]</a> Mike Shaver 在 2019 年的个人交流中说，设计多个 <code>catch</code> 子句的想法是他原创的。后来 Netscape [<a href="./references.html#netscape:js1.5:guide">2000</a>] 在 JavaScript 1.5 中支持了多个 <code>catch</code> 子句，这属于对 ES3 的非标准扩展。</li>\n<li><a id="39">[39]</a> 在一些工作文档 [<a href="./references.html#980930-horwat:12">Horwat 1998</a>; <a href="./references.html#Venter:980430-label3">Venter 1998c</a>] 中，以 <code>catch</code> 为前缀守卫表达式的 <code>if</code> 关键字，会被一个冒号所取代。</li>\n<li><a id="40">[40]</a> <em>FunctionExpression</em> 是 ECMAScript 语法中的一个非终止符。按照约定，这一符号用斜体表示。</li>\n<li><a id="41">[41]</a> Annex B 是 ES3 规范的附录之一，用于提供对 ECMAScript 废弃特性的定义。</li>\n<li><a id="42">[42]</a> Linter 是一种开发时工具，可以检查源码中是否存在可疑的编码实践，以及容易出错的结构。</li>\n<li><a id="43">[43]</a> Minimization 意味着删除注释和不必要的空白，并执行其他保持语义不变的源代码变换，以此来机制性地减少 JavaScript 程序的下载体积。</li>\n<li><a id="44">[44]</a> 最后人们认识到，使用 <code>eval</code> 来处理 JSON 是一种安全隐患，可能会使应用受到代码注入攻击。现代 JavaScript 引擎使用专门的 JSON 解析器，因此不容易受到这种攻击。</li>\n<li><a id="45">[45]</a> DiNucci [<a href="./references.html#Web20">1999</a>] 很早就使用了 Web 1.0 和 Web 2.0 的术语。</li>\n<li><a id="46">[46]</a> 动态 HTML（DHTML）使用 JavaScript 来动态修改活动网页中的 HTML 元素。</li>\n<li><a id="47">[47]</a> Firefox 是 Netscape 的 Mozilla 项目的产物，Brendan Eich 是该项目的首席架构师。</li>\n<li><a id="48">[48]</a> 该观点来自 2019 年与 Douglas Crockford 的个人交流。</li>\n<li><a id="49">[49]</a> 立即执行的函数表达式，属于块级作用域的替代品。这种技术为 Scheme 程序员所熟知，并从 2000 年代中期开始被 JavaScript 程序员广泛使用。Ben Alman [<a href="./references.html#iife">2010</a>] 创造了 IIFE 这个术语。</li>\n<li><a id="50">[50]</a> 所谓数值单位，指的是用米和公斤等计量单位来对数值做注解。对于网页中的像素和点等单位，这一特性很有意义。</li>\n<li><a id="51">[51]</a> Chris Dollin 和 Steve Leach 仍然继续开发不再基于 JavaScript 的 Spice 语言 [<a href="./references.html#spicelang">Dollin 2002</a>]，后来 Leach 将其演化成了 Ginger 编程语言 [<a href="./references.html#gingerlang">Leach et al. 2018</a>]。</li>\n<li><a id="52">[52]</a> 对于动态添加的属性，微软将其称为「expando properties」。</li>\n<li><a id="53">[53]</a> 在 Mozilla 的代码仓库 [<a href="./references.html#js2:mozsrc">Horwat et al. 2005</a>] 中，包含了 Netscape 的试验性项目 <em>Epimetheus</em> [<a href="./references.html#js2:Epimetheus">Horwat et al. 2003</a>]，它是 JavaScript 2 的实现。</li>\n<li><a id="54">[54]</a> Venter 在 2018 年的个人交流中认为，Raggett 的提案对 Horwat 的设计影响不大。</li>\n<li><a id="55">[55]</a> .NET 平台的 1.0 版于 2002 年 2 月 13 日正式发布。</li>\n<li><a id="56">[56]</a> WPF 后来更名为 Windows Presentation Foundation。</li>\n<li><a id="57">[57]</a> 在记录 JavaScript 2 的网页 [<a href="./references.html#js2:webpage">Horwat 2003c</a>] 中，有从 1999 年 2 月至 2003 年 6 月的规范变更日志。</li>\n<li><a id="58">[58]</a> 所谓 downcast，即检查具有某种类型声明的变量值，是否能在需要一个更具体的子类型变量值的上下文中使用。</li>\n<li><a id="59">[59]</a> NetObjects 是一家由 IBM 投资的创业公司。</li>\n<li><a id="60">[60]</a> 当时手机的处理器、内存和通信带宽资源都还非常有限。</li>\n<li><a id="61">[61]</a> 关于 Macromedia 内部理念和行动的描述，来源于 2017-2018 年同 Jeff Dyer 和 Gary Grossman 进行的个人交流。</li>\n<li><a id="62">[62]</a> 所谓自举，此处指用 JavaScript 代码实现 JavaScript 的内置库。</li>\n<li><a id="63">[63]</a> XUL（XML User interface Language）是 Mozilla 用于创建 Firefox 浏览器扩展的 JavaScript 框架。</li>\n<li><a id="64">[64]</a> 从 2007 年 4 月起，Hansen 成为了 Adobe 的代表。</li>\n<li><a id="65">[65]</a> 在 2005 年 12 月 3 日，Adobe 完成了对 Macromedia 的收购。</li>\n<li><a id="66">[66]</a> 在 2006 年，Hoare 正在以个人项目的形式，进行 Rust [<a href="./references.html#rust:wiki">Hoare 2010</a>] 编程语言的早期设计。</li>\n<li><a id="67">[67]</a> TC39 的内部 Wiki，最终以 <code>wiki.ecmascript.org</code> 的形式公开 [<a href="./references.html#TC39:wiki">TC39 2007</a>]。</li>\n<li><a id="68">[68]</a> TG1 使用的是 SML 的 Standard ML of New Jersey 实现。</li>\n<li><a id="69">[69]</a> Ecma 国际保存了此邮件列表的档案 [<a href="./references.html#tc39:reflector">TC39 2003</a>]，后续内容是对该档案的评论。</li>\n<li><a id="70">[70]</a> DHTML 即 Dynamic HTML。</li>\n<li><a id="71">[71]</a> 微软这一平台最初的代号为 WPF/E，当时还处于预发布预览阶段。该平台于 2007 年 4 月正式发布，产品名称为「Silverlight」。</li>\n<li><a id="72">[72]</a> Lambda the Ultimate 是一个在编程语言研究者和实现者中很受欢迎的网络博客，又称 LtU。</li>\n<li><a id="73">[73]</a> M0 是 Milestone 0 的缩写。</li>\n<li><a id="74">[74]</a> 在对象能力语言中，会将对象作为「基于能力（capability）的访问控制系统」的基础。</li>\n<li><a id="75">[75]</a> 在新版 ES4 中，<code>wrap</code> 运算符会对一个值进行动态的结构化类型检查。如果类型检查成功，就创建一个可用于代替该值的包装器（wrapper）对象。在包装器将操作代理到原始值上之前，它会逐个重新验证应用在其之上的操作。这样通过包装器，即使在静态类型声明的上下文中，也能使用属性可被删除或修改的对象。</li>\n<li><a id="76">[76]</a> 由于缺乏书面记录，人们对于 Adobe 当时是由 Smith、McAllister 还是两人一同作为代表，其记忆是模糊的。</li>\n<li><a id="77">[77]</a> 2018 年 8 月，本文作者之一在 2011 年的老款 iMac 上使用当时的 V8 版本，在浏览器中运行了同样的基准测试。测试结果相比 Hobbs 在 2008 年对 V8 的测试结果，快了大约 20 倍。</li>\n<li><a id="78">[78]</a> 只有对特定模块的第一次 <code>require</code>，才会执行完整的加载过程。相应的 <code>exports</code> 值由加载器保留，并在后续 <code>require</code> 同一模块时立即返回。</li>\n<li><a id="79">[79]</a> 网页开发者们仍然应该考虑到浏览器用户禁用 JavaScript 的可能性，或者页面也可能被加载到不带 JavaScript 支持的程序中。</li>\n<li><a id="80">[80]</a> 在 2009 年 3 月，这个邮件论坛被更名为 <code>es5-discuss</code>。</li>\n<li><a id="81">[81]</a> 接收 <code>arguments</code> 对象的其他代码可能来自未知来源，不应被信任。</li>\n<li><a id="82">[82]</a> 所谓「静态对象函数」也叫「静态对象方法」。在作为命名空间使用的对象和作为行为抽象的对象之间，是具有概念上的的区别的。这种区别并没有反映在语言的实际语义中。一些 JavaScript 程序员用「方法」一词来做这种区分，其他人则不然。</li>\n<li><a id="83">[83]</a> 所谓「复用」意味着，各个特性的设计应该使用一套共同的概念和语法元素。</li>\n<li><a id="84">[84]</a> Wirfs-Brock 的这份提案已无法直接获得，但在 Miller [<a href="./references.html#msm:defineProp">2008a</a>] 的回复中，已嵌入了该提案中的大部分文本。</li>\n<li><a id="85">[85]</a> 所谓「configurable」一词由 Neil Mix [<a href="./references.html#mix:21aug08">2008a</a>] 提出。</li>\n<li><a id="86">[86]</a> Pratap Lakshman 对本节内容有贡献。</li>\n<li><a id="87">[87]</a> Herman 不记得他是在哪里遇到了这个想法。但它很可能与 Oscar Nierstrasz [<a href="./references.html#nierstrasz2000identify">2000</a>] 用于组织项目委员会的「倡导者模式」有关。</li>\n<li><a id="88">[88]</a> 这些「梦想」的标签和描述，是从 Brendan Eich 的博文中转述的。「梦想」的代码片段是对原文的直接引用。注意他在编写「梦想」代码时选择了无分号的风格。</li>\n<li><a id="89">[89]</a> 基本 trap 都是原始性的，派生 trap 的默认行为均通过基本 trap 来定义。</li>\n<li><a id="90">[90]</a> ES5 中不支持由用户定义内部方法，所以不需要显式地实行这些一致性规则。</li>\n<li><a id="91">[91]</a> 一个设计上的顾虑，是在每个 Proxy 的 trap 之后实行一致性规则的成本。通知代理（Notification Proxies）[<a href="./references.html#notificationproxies">Van Cutsem 2013</a>] 这种替代性设计，可以粗略地认为是一种能消除此类开销的方式。</li>\n<li><a id="92">[92]</a> 所谓「高完整性对象」支持不可穿透的信息隐藏。在定义此类对象的代码段之外，它的结构、继承关系、封装状态和方法都不能被直接修改或扩展。</li>\n<li><a id="93">[93]</a> 典型的约定形如方法的不可枚举性，以及对只读属性的使用。</li>\n<li><a id="94">[94]</a> 在 ES6 之前，规范的第 15 条是定义内置对象和 Class 的部分。</li>\n<li><a id="95">[95]</a> Russell Leggett 用「安全学校」做了一个比喻，即一个准大学生在没有被任何一所心仪的学校录取的情况下，会申请「安全学校」作为备用。</li>\n<li><a id="96">[96]</a> 构造函数方法最终以 <code>static</code> 关键字的形式加回了设计中。</li>\n<li><a id="97">[97]</a> CommonJS 模块通常导出一个单一的对象，将其作为命名空间使用。</li>\n<li><a id="98">[98]</a> Mozilla 的实现，是基于一份新版 ES4 提案的 [<a href="./references.html#es4:expressionclosures">TC39 ES4 2006c</a>]。</li>\n<li><a id="99">[99]</a> Tennent 一致性原则认为，在某个函数中，如果将某段代码移到另一个函数中并立刻调用该函数，应该产生与直接执行原有代码段相同的效果。</li>\n<li><a id="100">[100]</a> 消栈的尾调用已被证明是一个有争议的特性。它已由至少一个主流浏览器引擎成功实现，但其他引擎却拒绝支持它。</li>\n</ul>'
        } }),
    'head': undefined,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': null
};
