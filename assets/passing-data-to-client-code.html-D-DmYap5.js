import{_ as t,r as p,o as i,c as r,a as s,b as e,d as a,w as o,e as l}from"./app-C1hgw8qQ.js";const c={},d=s("h1",{id:"passing-data-to-client-code",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#passing-data-to-client-code"},[s("span",null,"Passing Data to Client Code")])],-1),D=s("p",null,"As we know, VuePress plugin entries and theme entries are processed in Node side, but sometimes you might need to pass data to client side. For example, you want to generate different data when users use different options.",-1),y=s("h2",{id:"use-define-hook",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#use-define-hook"},[s("span",null,[e("Use "),s("code",null,"define"),e(" Hook")])])],-1),m=l(`<p>First, define some constants in <code>define</code> hook:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> ({</span></span>
<span class="line"><span style="color:#9CDCFE;">  define:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    __FOO__:</span><span style="color:#9CDCFE;"> options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> || </span><span style="color:#CE9178;">&#39;str&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    __OBJ__:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      bar:</span><span style="color:#9CDCFE;"> options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> || </span><span style="color:#B5CEA8;">123</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then use them in client code directly:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">__FOO__</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> obj</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">__OBJ__</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you are using TypeScript in client code, you may need to declare the types of the global constants manually:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">declare</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> __FOO__</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#569CD6;">declare</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> __OBJ__</span><span style="color:#D4D4D4;">: { </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;"> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="write-and-load-temp-files" tabindex="-1"><a class="header-anchor" href="#write-and-load-temp-files"><span>Write and Load Temp Files</span></a></h2><p>If you need to achieve some more complex features, you can write temp files and load them dynamically in client code.</p>`,8),u=s("code",null,"foo.js",-1),C=l(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> ({</span></span>
<span class="line"><span style="color:#569CD6;">  async</span><span style="color:#DCDCAA;"> onPrepared</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">    // write temp file</span></span>
<span class="line"><span style="color:#C586C0;">    await</span><span style="color:#9CDCFE;"> app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">writeTemp</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;foo.js&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      \`export const foo = </span><span style="color:#569CD6;">\${</span><span style="color:#4FC1FF;">JSON</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">stringify</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">)</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    )</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, load the temp file via <code>@temp</code> alias in client code:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@temp/foo&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If you are using TypeScript in client code, you may need to declare the type of the temp module manually:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">declare</span><span style="color:#569CD6;"> module</span><span style="color:#CE9178;"> &#39;@temp/foo&#39;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">  export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> foo</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function h(v,g){const n=p("RouteLink");return i(),r("div",null,[d,D,y,s("p",null,[e("Plugin API provides a "),a(n,{to:"/reference/plugin-api.html#define"},{default:o(()=>[e("define")]),_:1}),e(" hook to define global constants for client code. You can make use of it to pass data to client.")]),m,s("p",null,[e("First, write a temp file "),u,e(", which will be generated in the "),a(n,{to:"/reference/config.html#temp"},{default:o(()=>[e("temp")]),_:1}),e(" directory:")]),C])}const f=t(c,[["render",h],["__file","passing-data-to-client-code.html.vue"]]),_=JSON.parse('{"path":"/advanced/cookbook/passing-data-to-client-code.html","title":"Passing Data to Client Code","lang":"zh-CN","frontmatter":{"description":"Passing Data to Client Code As we know, VuePress plugin entries and theme entries are processed in Node side, but sometimes you might need to pass data to client side. For examp...","head":[["meta",{"property":"og:url","content":"https://alex-jiang.github.io/advanced/cookbook/passing-data-to-client-code.html"}],["meta",{"property":"og:site_name","content":"JAVA WEB"}],["meta",{"property":"og:title","content":"Passing Data to Client Code"}],["meta",{"property":"og:description","content":"Passing Data to Client Code As we know, VuePress plugin entries and theme entries are processed in Node side, but sometimes you might need to pass data to client side. For examp..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-10T13:10:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-10T13:10:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Passing Data to Client Code\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-10T13:10:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Use define Hook","slug":"use-define-hook","link":"#use-define-hook","children":[]},{"level":2,"title":"Write and Load Temp Files","slug":"write-and-load-temp-files","link":"#write-and-load-temp-files","children":[]}],"git":{"updatedTime":1702213846000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"advanced/cookbook/passing-data-to-client-code.md"}');export{f as comp,_ as data};
