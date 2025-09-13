import{_ as n,c as i,a,o as e}from"./app-D9na5qdx.js";const l="/docs/images/image-20220604130102991.png",p="/docs/images/image-20220604130332920.png",d="/docs/images/image-20220604130915476.png",t="/docs/images/image-20220604132300355.png",r="/docs/images/image-20220604132424778.png",h="/docs/images/image-20200517120844827.png",c="/docs/images/image-20230928161317601.png",k="/docs/images/image-20200516232059055.png",v="/docs/images/image-20200516232559924.png",u="/docs/images/image-20200516232640969.png",g="/docs/images/image-20200516232706997.png",m="/docs/images/image-20200516232729955.png",o="/docs/images/image-20200516232800944.png",b="/docs/images/image-20220113152017462.png",y="/docs/images/image-20220113150108444.png",A="/docs/images/image-20220530160637842.png",D="/docs/images/image-20220530160917816.png",B="/docs/images/image-20220530161010217.png",f="/docs/images/image-20220609152207574.png",q="/docs/images/image-20220609213147075.png",C="/docs/images/image-20220609215144445.png",E="/docs/images/image-20220609225330420.png",S="/docs/images/image-20220609231259823.png",x="/docs/images/image-20220609234231046.png",I="/docs/images/image-20220427143155787.png",w="/docs/images/image-20220531101815549.png",L="/docs/images/image-20220531102217260.png",_="/docs/images/image-20220531102303900.png",M="/docs/images/image-20220531105144003.png",F="/docs/images/image-20220531105258026.png",T="/docs/images/image-20220530174159175.png",P="/docs/images/image-20220531112535405.png",z="/docs/images/image-20220610114526159.png",O="/docs/images/image-20220531113117582.png",R="/docs/images/image-20220531115942432.png",U="/docs/images/image-20220531123424307.png",N="/docs/images/image-20220531123523553.png",j="/docs/images/image-20220531123647106.png",Q="/docs/images/image-20220531142806602.png",J="/docs/images/image-20220531144232978.png",H="/docs/images/image-20220531145132383.png",G="/docs/images/image-20220531145329859.png",V="/docs/images/image-20220531150626670.png",Y="/docs/images/image-20220531151900807.png",W="/docs/images/image-20220531153450542.png",Z="/docs/images/image-20220531154203800.png",X="/docs/images/image-20220531154351928.png",K="/docs/images/image-20220531154642231.png",$="/docs/images/image-20220531155341579.png",ss="/docs/images/image-20220531160711146.png",ns="/docs/images/image-20220531163411507.png",is="/docs/images/image-20220531163527689.png",as="/docs/images/image-20220531165449126.png",es="/docs/images/image-20220531165606647.png",ls="/docs/images/image-20220531172024778.png",ps="/docs/images/image-20220531175212219.png",ds="/docs/images/image-20220531175326723.png",ts="/docs/images/image-20220531175531398.png",rs="/docs/images/image-20220531180533510.png",hs="/docs/images/image-20220531181648675.png",cs="/docs/images/image-20220531182121801.png",ks="/docs/images/image-20220531182355574.png",vs="/docs/images/image-20220531182736591.png",us={};function gs(ms,s){return e(),i("div",null,s[0]||(s[0]=[a(`<p>在软件工程中，设计模式（design pattern）是对软件设计中普遍存在（反复出现）的各种问题，所提出的解决方案。这个术语是由埃里希·伽玛（Erich Gamma）等人在1990年代从建筑设计领域引入到计算机科学的。</p><p>Richard Helm, Ralph Johnson ,John Vlissides （Gof）</p><p>《设计模式：可复用面向对象软件的基础》 收录 23种模式</p><ul><li>观察者模式</li><li>策略模式</li><li>装饰者模式</li><li>享元模式</li><li>模板方法</li><li>...</li></ul><p>广义上的设计模式（思想上的）</p><ul><li>架构模式 <ul><li>MVC</li><li>分层</li></ul></li><li>设计模式 <ul><li>提炼系统中的组件</li></ul></li><li>代码模式（成例 Idiom） <ul><li>低层次，与编码直接相关</li><li>如DCL</li></ul></li></ul><h1 id="单例设计模式" tabindex="-1"><a class="header-anchor" href="#单例设计模式"><span>单例设计模式</span></a></h1><blockquote><p>怎么让单例在多线程中保证多个线程只创建一个，而不是这个线程创建一个单例，另一个线程创建另一个单例。</p></blockquote><h2 id="单例设计模式的概述" tabindex="-1"><a class="header-anchor" href="#单例设计模式的概述"><span>单例设计模式的概述</span></a></h2><p>正常情况下一个类可以创建多个对象</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 默认生成一个公共的空参构造方法</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 测试类</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">	// 正常情况下一个类可以创建多个对象</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是有些时候的某些类, 我们希望只能创建单一的一个对象, 这时候我们需要使用到单例设计模式, 下面我们来介绍一下单例设计模式.</p><h3 id="单例设计模式的作用" tabindex="-1"><a class="header-anchor" href="#单例设计模式的作用"><span>单例设计模式的作用</span></a></h3><p>单例模式，是一种常用的软件设计模式。<strong>通过单例模式可以保证系统中，应用该模式的这个类只有一个实例</strong>。即一个类只有一个对象实例。</p><h3 id="单例设计模式实现步骤" tabindex="-1"><a class="header-anchor" href="#单例设计模式实现步骤"><span>单例设计模式实现步骤</span></a></h3><ol><li>将构造方法私有化，使其不能在类的外部通过new关键字实例化该类对象。</li><li>在该类内部产生一个唯一的实例化对象</li><li>定义一个静态方法返回这个唯一对象。</li></ol><h3 id="例设计模式的类型" tabindex="-1"><a class="header-anchor" href="#例设计模式的类型"><span>例设计模式的类型</span></a></h3><p>根据实例化对象的时机单例设计模式又分为以下两种:</p><ol><li>饿汉单例设计模式</li><li>懒汉单例设计模式</li></ol><h2 id="饿汉式单例设计模式" tabindex="-1"><a class="header-anchor" href="#饿汉式单例设计模式"><span>饿汉式单例设计模式</span></a></h2><p>饿汉单例设计模式就是使用类的时候已经将对象创建完毕，不管以后会不会使用到该实例化对象，先创建了再说。很着急的样子，故被称为“饿汉模式”。</p><p>代码如下：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 使用饿汉式单例设计模式: 比较着急,不管要不要获取我这个类的对象,先创建了该对象再说</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 1. 将构造方法私有化，使其不能在类的外部通过new关键字实例化该类对象。</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Singleton is create</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 2. 在该类内部产生一个唯一的实例化对象</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> final</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 3. 定义一个静态方法返回这个唯一对象。</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Person </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // ....</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Test</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">p1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">p2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">p3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>何时产生实例，不太好控制。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 使用饿汉式单例设计模式: 比较着急,不管要不要获取我这个类的对象,先创建了该对象再说</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 1. 将构造方法私有化，使其不能在类的外部通过new关键字实例化该类对象。</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Singleton is create</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 2. 在该类内部产生一个唯一的实例化对象</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> final</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 3. 定义一个静态方法返回这个唯一对象。</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Person </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // ....</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> STATUS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">访问：</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Singleton</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">STATUS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	Singleton is create</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">	1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">也会创建实例。</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">而实际上，你可能没有创建这个单例的需求，只是因为访问了一下他的静态成员变量。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>改进就是延迟加载策略,懒汉式,只有真正要的时候才创建</p></blockquote><h2 id="懒汉式单例设计模式" tabindex="-1"><a class="header-anchor" href="#懒汉式单例设计模式"><span>懒汉式单例设计模式</span></a></h2><p>懒汉单例设计模式就是调用getInstance()方法时实例才被创建，先不急着实例化出对象，等要用的时候才实例化出对象。不着急，故称为“懒汉模式”。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 懒汉式单例: 不着急,只要当你调用了getInstance静态方法获取对象的时候,就创建,其他时候不创建</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 1. 将构造方法私有化，使其不能在类的外部通过new关键字实例化该类对象。</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">		System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Singleton is create</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 2. 在该类内部产生一个唯一的实例化对象</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 默认值为null</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 3. 定义一个静态方法返回这个唯一对象。</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> synchronized</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Person </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 创建Person类的唯一对象</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 判断一下,如果p这个成语变量的值为null,就创建,不为null,说明该对象已经创建了,直接返回即可</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">p </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">==</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">            p </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Test</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">p1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">p2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">p3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：懒汉单例设计模式在多线程环境下可能会实例化出多个对象，不能保证单例的状态，所以加上关键字：synchronized，保证其同步安全。</p></blockquote><blockquote><p>synchronize并不是个高效的关键字,如果高频访问的话,还是会对性能造成影响。</p><p>改进就是用静态内部类延迟加载获取单例</p></blockquote><h2 id="静态内部类单例设计模式" tabindex="-1"><a class="header-anchor" href="#静态内部类单例设计模式"><span>静态内部类单例设计模式</span></a></h2><p>通过静态内部类的方式,访问外部类的时候不会初始化内部类，调用getInstance真正需要的时候才会初始化内部类，延迟的单例效果。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> StaticSingleton</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> StaticSingleton</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">StaticSingleton is create</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> SingletonHolder</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> StaticSingleton</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> instance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> StaticSingleton</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> StaticSingleton </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> SingletonHolder</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">instance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="不变模式" tabindex="-1"><a class="header-anchor" href="#不变模式"><span>不变模式</span></a></h1><blockquote><p>对多线程非常重要，多线程中进行各种各样的同步，同步是非常消耗资源的。不变模式丢到并行的项目中可以很好的工作，并且提供非常高的性能。</p><p>如果我们需要提供一个类在多线程中被频繁的访问和使用,就可以把它设计为一个不变类,提高性能</p></blockquote><ul><li>一个类的内部状态创建后，在整个生命期间都不会发生变化时，就是不变类</li><li>不变模式不需要同步（只读对象）</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> final</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Product</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    //确保无子类</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> final</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> no</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    //私有属性，不会被其他对象获取</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> final</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    //final保证属性不会被2次赋值</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> final</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> double</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> price</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Product</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">no</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> double</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> price</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //在创建对象时，必须指定数据</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        super</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        //因为创建之后，无法进行修改</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">no</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> no</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">price</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> price</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 创建之后不会在发生改变,所以不需要set</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getNo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> no</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> double</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> getPrice</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> price</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>java中不变模式的使用</p><ul><li><p>java.lang.String : String中的那些对字符串的操作是新生成一个String对象，而不是修改原对象</p></li><li><p>java.lang.Boolean</p></li><li><p>java.lang.Byte</p></li><li><p>java.lang.Character</p></li><li><p>java.lang.Double</p></li><li><p>java.lang.Float</p></li><li><p>java.lang.Integer</p></li><li><p>java.lang.Long</p></li><li><p>java.lang.Short</p></li></ul><h1 id="future模式" tabindex="-1"><a class="header-anchor" href="#future模式"><span>Future模式</span></a></h1><p>核心思想是<strong>异步调用</strong></p><p><img src="`+l+'" alt="image-20220604130102991"></p><ul><li>Main: 系统启动，调用Client发出请求</li><li>Client: 返回Data对象，立即返回FutureData，并开启ClientThread线程装配RealData</li><li>Data: 返回数据的接口</li><li>FutureData: Future数据，构造很快，但是是一个虚拟的数据，需要装配RealData</li><li>RealData: 真实数据，其构造是比较慢的</li></ul><p><img src="'+p+`" alt="image-20220604130332920"></p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getResult</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> RealData</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> implements</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    protected</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> final</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> result</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> RealData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">para</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        //RealData的构造可能很慢，需要用户等待很久，这里使用sleep模拟</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        StringBuffer</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> sb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> StringBuffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        for</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> i </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">++</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            sb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">append</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">para</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            try</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                //这里使用sleep，代替一个很慢的操作过程</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">                Thread</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sleep</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">100</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">InterruptedException </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        result </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">sb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">toString</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getResult</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> result</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> FutureData</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> implements</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    protected</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> RealData</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> realdata</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //FutureData是RealData的包装</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    protected</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> boolean</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> isReady</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> synchronized</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> setRealData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">RealData </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">realdata</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">isReady</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">realdata</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> realdata</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        isReady </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        notifyAll</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //RealData已经被注入，通知getResult()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> synchronized</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getResult</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //会等待RealData构造完成</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        while</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">isReady</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            try</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">                wait</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //一直等待，知道RealData被注入</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">InterruptedException </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> realdata</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">result</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //由RealData实现</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 客户端</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Client</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Data </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">request</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">final</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">queryStr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        final</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> FutureData</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> future</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> FutureData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Thread</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">            public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// RealData的构建很慢，</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                //所以在单独的线程中进行</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                RealData</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> realdata</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> RealData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">queryStr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">                future</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">setRealData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">realdata</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            }</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">start</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> future</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // FutureData会被立即返回</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 使用</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Client</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> client</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Client</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    //这里会立即返回，因为得到的是FutureData而不是RealData</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Data</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> client</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">request</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">name</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">请求完毕</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    try</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        //这里可以用一个sleep代替了对其他业务逻辑的处理</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        //在处理这些业务逻辑的过程中，RealData被创建，从而充分利用了等待时间</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        Thread</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sleep</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2000</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">InterruptedException </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    //使用真实的数据</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">数据 = </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getResult</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">());</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JDK对Future模式的支持：</p><p><img src="`+d+`" alt="image-20220604130915476"></p><h2 id="callable接口实现future模式" tabindex="-1"><a class="header-anchor" href="#callable接口实现future模式"><span>callable接口实现future模式</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> RealData</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> implements</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Callable</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> para</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> RealData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">para</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">para</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">para</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    @</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">Override</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">call</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> throws</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Exception </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        StringBuffer</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> sb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> StringBuffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        for</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> i </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">++</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            sb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">append</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">para</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            try</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">                Thread</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sleep</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">100</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">InterruptedException </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> sb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">toString</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> FutureMain</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> throws</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> InterruptedException</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ExecutionException </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        //构造FutureTask</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        FutureTask</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> future</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> FutureTask</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> RealData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">a</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        ExecutorService</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> executor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Executors</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">newFixedThreadPool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        //执行FutureTask，相当于上例中的 client.request(&quot;a&quot;) 发送请求</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        //在这里开启线程进行RealData的call()执行</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        executor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">submit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">future</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">请求完毕</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        try</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            //这里依然可以做额外的数据操作，这里使用sleep代替其他业务逻辑的处理</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            Thread</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sleep</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2000</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">InterruptedException </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        //相当于data.getResult ()，取得call()方法的返回值</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        //如果此时call()方法没有执行完成，则依然会等待</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">数据 = </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> future</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">());</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="匿名callable实现future模式" tabindex="-1"><a class="header-anchor" href="#匿名callable实现future模式"><span>匿名callable实现future模式</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> FutureMain2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> throws</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> InterruptedException</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ExecutionException </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        ExecutorService</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> executor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Executors</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">newFixedThreadPool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        //执行FutureTask，相当于上例中的 client.request(&quot;a&quot;) 发送请求</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        //在这里开启线程进行RealData的call()执行</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Future</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> future</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">executor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">submit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> RealData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">a</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">请求完毕</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        try</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            //这里依然可以做额外的数据操作，这里使用sleep代替其他业务逻辑的处理</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            Thread</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sleep</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2000</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">InterruptedException </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        //相当于data.getResult ()，取得call()方法的返回值</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        //如果此时call()方法没有执行完成，则依然会等待</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">数据 = </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> future</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">());</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="生产者消费者模式" tabindex="-1"><a class="header-anchor" href="#生产者消费者模式"><span>生产者消费者模式</span></a></h1><blockquote><p>2个线程间如果共享数据，如果线程A要知道线程B,线程B知道线程A的存在,就不符合松散耦合的原则了。所以我们不要2个线程间知道批次的存在,而是应该有一个块公共的区域去知道。</p></blockquote><p>生产者-消费者模式是一个<strong>经典的多线程设计模式</strong>。它为多线程间的协作提供了良好的解决方案。</p><p>在生产者-消费者模式中，通常由两类线程，即若干个生产者线程和若干个消费者线程。生产者线程负责提交用户请求，消费者线程则负责具体处理生产者提交的任务。生产者和消费者之间则通过共享内存缓冲区进行通信。</p><p><img src="`+t+'" alt="image-20220604132300355"></p><ul><li>生产者 ：用于提交用户请求，提取用户任务，并装入内存缓冲区</li><li>消费者 ：在内存缓冲区中提取并处理任务</li><li>内存缓冲区 ：缓存生产者提交的任务或数据，供消费者使用</li><li>任务 ：生成者向内存缓冲区提交的数据结构。</li><li>Main ：使用生产者和消费者的客户端</li></ul><p>ps: BlockingQueue是一个很容易的生产者消费者实现方案,但是不是一个高效的解决方案</p><p><img src="'+r+`" alt="image-20220604132424778"></p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">private</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> BlockingQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">PCData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> queue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 生产者</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">while</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">isRunning</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    Thread</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sleep</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">r</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nextInt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">SLEEPTIME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    data </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> PCData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">count</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">incrementAndGet</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">());</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    //构造任务数据</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">data</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> is put into queue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">queue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">offer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> TimeUnit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">SECONDS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        //提交数据到缓冲区中</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">err</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">failed to put data：</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 消费者</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">while</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    PCData</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> queue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">take</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 消费者如果没拿到,会挂起等待</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    //提取任务</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">null</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> !=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> re</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> *</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //计算平方</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">MessageFormat</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">format</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{0}*{1}={2}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">                                                data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">                                                data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> re</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        Thread</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sleep</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">r</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nextInt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">SLEEPTIME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="第二章-多例设计模式" tabindex="-1"><a class="header-anchor" href="#第二章-多例设计模式"><span>第二章 多例设计模式</span></a></h1><h2 id="知识点-多例设计模式" tabindex="-1"><a class="header-anchor" href="#知识点-多例设计模式"><span>知识点--多例设计模式</span></a></h2><h3 id="目标" tabindex="-1"><a class="header-anchor" href="#目标"><span>目标</span></a></h3><ul><li>掌握多例设计模式的书写</li></ul><h3 id="路径" tabindex="-1"><a class="header-anchor" href="#路径"><span>路径</span></a></h3><ul><li>多例设计模式的作用</li><li>实现步骤</li><li>实现代码</li><li>测试结果</li></ul><h3 id="讲解" tabindex="-1"><a class="header-anchor" href="#讲解"><span>讲解</span></a></h3><h4 id="多例设计模式的作用" tabindex="-1"><a class="header-anchor" href="#多例设计模式的作用"><span>多例设计模式的作用</span></a></h4><p>多例模式，是一种常用的软件设计模式。通过多例模式可以保证系统中，应用该模式的类有<strong>固定数量</strong>的实例。多例类要自我创建并管理自己的实例，还要向外界提供获取本类实例的方法。</p><h4 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤"><span>实现步骤</span></a></h4><p>​ 1.创建一个类, 将构造方法私有化，使其不能在类的外部通过new关键字实例化该类对象。</p><p>​ 2.在该类内部产生固定数量的实例化对象 ----&gt; 集合</p><p>​ 3.提供一个静态方法来随机获取一个该类的实例化对象</p><h4 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码"><span>实现代码</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 使用多例设计模式: 保证程序运行期间该类只有固定数量的对象产生</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 1.创建一个类,  将构造方法私有化，使其不能在类的外部通过new关键字实例化该类对象。</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 2.在该类内部产生固定数量的实例化对象 ----&gt; 集合  只能产生依次固定数量的对象</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 2.1 定义一个存放该类对象的集合</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ArrayList</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ArrayList</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 2.2 在静态代码块中,创建固定数量的对象,添加到集合中</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    static</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 创建固定数量的该类对象</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        for</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> i </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">++</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">            Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 3.提高一个静态方法来随机获取一个该了的实例化对象</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Person </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 创建一个Random对象</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Random</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> r</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Random</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 随机产生一个list集合的索引</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> index</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> r</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nextInt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">());</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// [0,3) 0,1,2</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 根据索引获取对象</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">index</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 返回对象</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果"><span>测试结果</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Test</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        for</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> i </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">++</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">            Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">p1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt="image-20200517120844827"></p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h3><p>多例模式可以保证系统中一个类有固定个数的实例, 在实现需求的基础上, 能够提高实例的复用性.</p><p>实现多例模式的步骤：</p><ol><li>创建一个类, 将构造方法私有化，使其不能在类的外部通过new关键字实例化该类对象。</li><li>在类中定义存放类实例的list集合</li><li>在类中提供静态代码块,在静态代码块中创建类的实例</li><li>提供获取类实例的静态方法</li></ol><h1 id="第四章-枚举" tabindex="-1"><a class="header-anchor" href="#第四章-枚举"><span>第四章 枚举</span></a></h1><h2 id="知识点-枚举的概述和定义" tabindex="-1"><a class="header-anchor" href="#知识点-枚举的概述和定义"><span>知识点--枚举的概述和定义</span></a></h2><h3 id="目标-1" tabindex="-1"><a class="header-anchor" href="#目标-1"><span>目标</span></a></h3><ul><li>掌握枚举的定义和使用</li></ul><h3 id="路径-1" tabindex="-1"><a class="header-anchor" href="#路径-1"><span>路径</span></a></h3><ul><li>引入不使用枚举存在的问题</li><li>枚举的概述</li><li>枚举的定义</li><li>枚举的使用</li></ul><h3 id="讲解-1" tabindex="-1"><a class="header-anchor" href="#讲解-1"><span>讲解</span></a></h3><h4 id="不使用枚举存在的问题" tabindex="-1"><a class="header-anchor" href="#不使用枚举存在的问题"><span>不使用枚举存在的问题</span></a></h4><p>假设我们要定义一个人类，人类中包含姓名和性别。通常会将性别定义成字符串类型，效果如下：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 省略get/set/toString方法</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Demo01</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">张三</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">男</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">张三</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">abc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 因为性别是字符串,所以我们可以传入任意字符串</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不使用枚举存在的问题：可以给性别传入任意的字符串，导致性别是非法的数据，不安全。</p><h4 id="枚举的概念" tabindex="-1"><a class="header-anchor" href="#枚举的概念"><span>枚举的概念</span></a></h4><p>枚举是一种引用数据类型,java中的枚举是有固定个数对象的&quot;特殊类&quot;。如果有些类的对象是固定个数的，就可以定义成枚举。比如性别,季节，方向。</p><h4 id="定义枚举的格式" tabindex="-1"><a class="header-anchor" href="#定义枚举的格式"><span>定义枚举的格式</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> enum</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> 枚举名</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 第一行都是罗列枚举实例,这些枚举实例直接写大写名字即可。</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    实例</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">实例</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">实例</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">...；</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> enum</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">   BOY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> GIRL</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> enum</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Season</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    SPRING</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> SUMMER</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> AUTUMN</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> WINTER</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> enum</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Direction</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    UP</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> RIGHT</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> DOWN</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> LEFT</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="枚举的使用" tabindex="-1"><a class="header-anchor" href="#枚举的使用"><span>枚举的使用</span></a></h4><ol><li>定义枚举：BOY表示男，GIRL表示女</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">enum</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    BOY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> GIRL</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 男，女</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Perosn中的性别有String类型改为Sex枚举类型</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Sex</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Sex </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 省略get/set/toString方法</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>使用是只能传入枚举中的固定值</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Demo02</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 使用枚举格式: 枚举类型.枚举值</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">张三</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">BOY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">张三</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">GIRL</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">张三</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">abc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 编译报错</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结-1" tabindex="-1"><a class="header-anchor" href="#小结-1"><span>小结</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">枚举定义</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">:</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">	public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> enum</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> 枚举名</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        枚举值</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">枚举值</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">枚举值</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">枚举的使用</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	枚举类型 变量名 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 枚举名</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">枚举值</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="知识点-枚举的其他内容-听听就好" tabindex="-1"><a class="header-anchor" href="#知识点-枚举的其他内容-听听就好"><span>知识点--枚举的其他内容( 听听就好)</span></a></h2><h3 id="目标-2" tabindex="-1"><a class="header-anchor" href="#目标-2"><span>目标</span></a></h3><ul><li>了解枚举的其他内容</li></ul><h3 id="路径-2" tabindex="-1"><a class="header-anchor" href="#路径-2"><span>路径</span></a></h3><h3 id="讲解-2" tabindex="-1"><a class="header-anchor" href="#讲解-2"><span>讲解</span></a></h3><p>枚举的本质是一个使用了多例设计模式的类，所以枚举中还可以有成员变量，成员方法等。</p><p>枚举的本质是一个类，我们刚才定义的Sex枚举最终效果如下：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> enum</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    BOY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> GIRL</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 男，女</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> enum</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    BOY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">18</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> GIRL</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">16</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    Sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> showAge</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">年龄是: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Demo03</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">张三</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">BOY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> p2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">张三</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">GIRL</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        Sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">BOY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">showAge</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        Sex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">GIRL</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">showAge</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果：</p><p><img src="`+c+`" alt="image-20230928161317601"></p><h3 id="小结-2" tabindex="-1"><a class="header-anchor" href="#小结-2"><span>小结</span></a></h3><ul><li>略</li></ul><h1 id="第五章-工厂设计模式" tabindex="-1"><a class="header-anchor" href="#第五章-工厂设计模式"><span>第五章 工厂设计模式</span></a></h1><h2 id="知识点-工厂模式的概述" tabindex="-1"><a class="header-anchor" href="#知识点-工厂模式的概述"><span>知识点-- 工厂模式的概述</span></a></h2><h3 id="目标-3" tabindex="-1"><a class="header-anchor" href="#目标-3"><span>目标</span></a></h3><ul><li>工厂模式其实就是用来帮我们创建对象的, 那么它到底有哪些特点, 我们来学习一下.</li></ul><h3 id="路径-3" tabindex="-1"><a class="header-anchor" href="#路径-3"><span>路径</span></a></h3><ul><li>工厂模式的介绍</li><li>工厂模式的作用</li><li>案例演示</li></ul><h3 id="讲解-3" tabindex="-1"><a class="header-anchor" href="#讲解-3"><span>讲解</span></a></h3><h4 id="工厂模式的介绍" tabindex="-1"><a class="header-anchor" href="#工厂模式的介绍"><span>工厂模式的介绍</span></a></h4><p>​ 工厂模式（Factory Pattern）是 Java 中最常用的设计模式之一。这种类型的设计模式<strong>属于创建型模式</strong>，它提供了一种创建对象的最佳方式。之前我们创建类对象时, 都是使用new 对象的形式创建, 除new 对象方式以外, 工厂模式也可以创建对象.</p><p>耦合度: 类与类之间的关系,如果关系比较强,高耦合, 如果关系比较弱,低耦合,而<strong>开发是要尽量低耦合</strong></p><p>10个类:</p><p>10个测试类: 每个测试类都要创建这10个类的对象</p><p>以前: 直接在测试类中通过new 来创建 这10个测试类和这10个类关系起来</p><p>工厂模式: 定义一个类,专门用来创建这10个类的对象, 并提供获取的方法,那这个时候测试类只需要跟工厂类关联 低耦合</p><h4 id="工厂模式的作用" tabindex="-1"><a class="header-anchor" href="#工厂模式的作用"><span>工厂模式的作用</span></a></h4><p>将前端代码与要创建的对象分开，前端不需要直接创建对象，也就不需要关心创建对象时需要的数据。只需要通过工厂获取对象即可。</p><ul><li>解决类与类之间的耦合问题</li></ul><h4 id="案例演示" tabindex="-1"><a class="header-anchor" href="#案例演示"><span>案例演示</span></a></h4><h5 id="需求" tabindex="-1"><a class="header-anchor" href="#需求"><span>需求</span></a></h5><ol><li>编写一个Car接口, 提供run方法</li><li>编写一个Falali类实现Car接口,重写run方法</li><li>编写一个Benchi类实现Car接口,重写run方法</li></ol><p>提供一个工厂类,可以用来生产汽车对象</p><h5 id="实现代码-1" tabindex="-1"><a class="header-anchor" href="#实现代码-1"><span>实现代码</span></a></h5><p>1.编写一个Car接口, 提供run方法</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Car</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.编写一个Falali类实现Car接口,重写run方法</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Falali</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> implements</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Car</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    @</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">Override</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">法拉利以每小时500公里的速度在奔跑.....</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.编写一个Benchi类实现Car接口</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Benchi</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> implements</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Car</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    @</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">Override</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">奔驰汽车以每秒1米的速度在挪动.....</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.提供一个CarFactory(汽车工厂),用于生产汽车对象</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> CarFactory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     * </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">@param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> id</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> : 车的标识</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     *           benchi : 代表需要创建Benchi类对象</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     *           falali : 代表需要创建Falali类对象</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     *           如果传入的车标识不正确,代表当前工厂生成不了当前车对象,则返回null</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     * </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">@return</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Car </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">createCar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">falali</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">equals</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)){</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            return</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Falali</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">else</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">benchi</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">equals</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)){</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            return</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Benchi</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.定义CarFactoryTest测试汽车工厂</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> CarFactoryTest</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        CarFactory</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> carFactory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> CarFactory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Car</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> benchi</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> carFactory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">createCar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">benchi</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        benchi</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Car</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> falali</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> carFactory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">createCar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">falali</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        falali</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结-3" tabindex="-1"><a class="header-anchor" href="#小结-3"><span>小结</span></a></h3><ul><li>工厂模式的存在可以改变创建类的对象的方式,解决类与类之间的耦合.</li></ul><h1 id="第六章-lombok【自学扩展】" tabindex="-1"><a class="header-anchor" href="#第六章-lombok【自学扩展】"><span>第六章 Lombok【自学扩展】</span></a></h1><h2 id="知识点-lombok的使用" tabindex="-1"><a class="header-anchor" href="#知识点-lombok的使用"><span>知识点-- Lombok的使用</span></a></h2><h3 id="目标-4" tabindex="-1"><a class="header-anchor" href="#目标-4"><span>目标</span></a></h3><ul><li>能够使用Lombok</li></ul><h3 id="路径-4" tabindex="-1"><a class="header-anchor" href="#路径-4"><span>路径</span></a></h3><ul><li>lombok介绍</li><li>lombok使用</li></ul><h3 id="讲解-4" tabindex="-1"><a class="header-anchor" href="#讲解-4"><span>讲解</span></a></h3><p>lombok介绍</p><ul><li>lombok可以使用注解的方式让一些代码变的简洁 方便</li><li>实体类中有一些固定的代码：构造方法，getter/setter、equals、hashcode、toString方法都是固定的，写出来看着比较麻烦。而Lombok能通过注解的方式，在编译时自动为属性生成这些代码。</li></ul><p>lombok使用</p><p>​ 1. 添加lombox的jar包：</p><p>​ 将lombok.jar(本例使用版本：1.18.10)，添加到模块目录下，并添加到ClassPath</p><p><img src="`+k+'" alt="image-20200516232059055"></p><p>​ 2. 为IDEA添加lombok插件（<strong>连接网络使用）</strong></p><ul><li>第一步</li></ul><p><img src="'+v+'" alt="image-20200516232559924"></p><ul><li>第二步：</li></ul><p><img src="'+u+'" alt="image-20200516232640969"></p><ul><li>第三步：</li></ul><p><img src="'+g+'" alt="image-20200516232706997"></p><ul><li>第四步：</li></ul><p><img src="'+m+'" alt="image-20200516232729955"></p><ol><li><p><strong>安装完毕后，重启IDEA。</strong></p></li><li><p>新建一个类：Student</p><p><img src="'+o+`" alt="image-20200516232800944"></p></li></ol><h4 id="lombok常用注解" tabindex="-1"><a class="header-anchor" href="#lombok常用注解"><span>lombok常用注解</span></a></h4><ul><li><p>@Getter和@Setter</p><ul><li>作用：生成成员变量的get和set方法。</li><li>写在成员变量上，指对当前成员变量有效。</li><li>写在类上，对所有成员变量有效。</li><li>注意：静态成员变量无效。</li></ul></li><li><p>@ToString：</p><ul><li>作用：生成toString()方法。</li><li>该注解只能写在类上。</li></ul></li><li><p>@NoArgsConstructor和@AllArgsConstructor</p><ul><li>@NoArgsConstructor：无参数构造方法。</li><li>@AllArgsConstructor：满参数构造方法。</li><li>注解只能写在类上。</li></ul></li><li><p>@EqualsAndHashCode</p><ul><li>作用：生成hashCode()和equals()方法。</li><li>注解只能写在类上。</li></ul></li><li><p>@Data</p><ul><li><p>作用： 生成setter/getter、equals、hashCode、toString方法，如为final属性，则不会为该属性生成setter方法。</p></li><li><p>注解只能写在类上。</p></li></ul></li></ul><h3 id="小结-4" tabindex="-1"><a class="header-anchor" href="#小结-4"><span>小结</span></a></h3><p>略</p><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h1><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">必须练习</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">单例设计模式</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">多例设计模式</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">枚举的定义和使用</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">工厂设计模式</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 能够说出单例设计模式的好处</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">   作用</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">保证使用该模式的类只有一个对象产生</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">   步骤</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">将构造方法私有化</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">在类的内部创建该类的唯一对象</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">提供一个静态方法用来获取该类的唯一对象</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 能够说出多例模式的好处</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">   作用</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">保证使用该模式的类只有固定数量个对象产生</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">   步骤</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">将构造方法私有化</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">在类的内部创建该类的固定数量个对象</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">提供一个静态方法用来获取该类的对象</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 能够定义枚举</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">   格式</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">:</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">		public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> enum</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> 枚举名</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">            枚举值</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">枚举值</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">   使用</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">		枚举类型 变量名 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 枚举名</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">枚举值</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 能够使用工厂模式编写java程序</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">   作用</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">用来创建对象</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">实现对类的解耦操作</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">   步骤</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">		1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">创建一个工厂类</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">在工厂类中提供一个静态方法</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">在静态方法中</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">创建对象</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">并返回</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">返回值类型多态</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="扩展-动态代理" tabindex="-1"><a class="header-anchor" href="#扩展-动态代理"><span>扩展-动态代理</span></a></h1><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">package</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> com</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">itheima</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">demo8_动态代理加强</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> java</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">reflect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">InvocationHandler</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> java</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">reflect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Method</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> java</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">reflect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Proxy</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> java</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">util</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ArrayList</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> java</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">util</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Arrays</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> java</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">util</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Collection</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> java</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">util</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Iterator</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * @Author：pengzhilin</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * @Date: 2020/9/27 11:23</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> */</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//@SuppressWarnings(&quot;all&quot;)</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Test</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        /*</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            对Collection接口进行代理，以前的remove(Object obj)方法是删除集合中第一次出现的元素</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            (比如集合中有多个“abc”,调用remove(“abc”)后只会删除一个元素)。</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            代理后，要求在调用remove(Object obj)方法后，能够删除集合中所有匹配的元素。【动态代理】</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">         */</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 创建ArrayList集合</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Collection</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ArrayList</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 添加元素</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">abc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">abc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bac</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">abc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">abc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">abc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">删除前:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 删除前:[abc, abc, bac, abc, abc, abc]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 动态代理增强remove方法</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Collection</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> proxy</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Collection</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Proxy</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">newProxyInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getClass</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getClassLoader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getClass</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInterfaces</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> InvocationHandler</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            @</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">Override</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">            public</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Object </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">invoke</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Object </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">proxy</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Method </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">method</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> Object</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> throws</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Throwable </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                /*</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                    invoke方法:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                        参数1proxy:表示生成的代理对象,一般不用</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                        参数2method:表示代理对象调用的方法</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                        参数3args:表示代理对象调用方法传入的实际参数</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                        返回值:表示代理对象调用方法的返回值</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                 */</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                // 代理对象调用方法就会来到这里,所以增强方法的代码就写在这,就可以了</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                // 被代理对象执行一次代理对象调用的方法,来确定返回值  删除一个</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                Object</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> res</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> method</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">invoke</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// col.remove(&quot;abc&quot;)  col.toArray();</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">                if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">method</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">equals</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">remove</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                    // 删除剩余的</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                    // 获取col集合对象的迭代器</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                    Iterator</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> it</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">iterator</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                    // 使用迭代器进行遍历</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">                    while</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">it</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">hasNext</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">())</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                        // 在循环中,判断遍历出来的元素是否是要删除的元素</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                        String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> it</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">                        if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">equals</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]))</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                            // 如果是,就删除</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">                            it</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">remove</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">                        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">                    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">                if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">method</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">equals</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">toArray</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">                    System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">增强toArray方法...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">                return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> res</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 代理对象删除元素</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        boolean</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> res</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> proxy</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">remove</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">abc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">res</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//true</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">删除后:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 删除后:[bac]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        Object</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> arr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> proxy</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">toArray</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">arr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Arrays</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">toString</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">arr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">       /*</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 集合对象删除元素</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        boolean res = col.remove(&quot;abc&quot;);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        System.out.println(res);// true</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        System.out.println(&quot;删除后:&quot;+col);// 删除后:[abc, bac, abc, abc, abc]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="有趣的设计模式" tabindex="-1"><a class="header-anchor" href="#有趣的设计模式"><span>有趣的设计模式</span></a></h1><h2 id="_1-设计模式概述" tabindex="-1"><a class="header-anchor" href="#_1-设计模式概述"><span>1. 设计模式概述</span></a></h2><h3 id="_1-1-概述" tabindex="-1"><a class="header-anchor" href="#_1-1-概述"><span>1.1 概述</span></a></h3><ul><li>**设计模式（Designpattern）**是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结</li><li>大部分设计模式要解决的都是代码的可重用性、可扩展性问题</li></ul><h3 id="_1-2-产生背景" tabindex="-1"><a class="header-anchor" href="#_1-2-产生背景"><span>1.2 产生背景</span></a></h3><p><strong>&quot;设计模式&quot;</strong> 最初并不是出现在软件设计中，而是被用于建筑领域的设计中。</p><p>1977年美国著名建筑大师、加利福尼亚大学伯克利分校环境结构中心主任<code>克里斯托夫·亚历山大（Christopher Alexander）</code>在他的著作《建筑模式语言：城镇、建筑、构造》中描述了一些常见的建筑设计问题，并提出了 253 种关于对城镇、邻里、住宅、花园和房间等进行设计的基本模式。</p><p><img src="`+b+'" alt="image-20220113152017462"></p><p><strong>四人帮（GOF）</strong></p><p>1990年软件工程界开始研讨设计模式的话题，后来召开了多次关于设计模式的研讨会。</p><p>1994 年，艾瑞克·伽马（ErichGamma）、理査德·海尔姆（Richard Helm）、拉尔夫·约翰森（Ralph Johnson）、约翰·威利斯迪斯（John Vlissides）等 4 位作者合作出版了《设计模式：可复用面向对象软件的基础》一书，在此书中收录了 23 个设计模式，这是设计模式领域里程碑的事件，导致了软件设计模式的突破。</p><p>备注：由于书名太长， 人们将其简称为 &quot;四人组 （Gang of Four， GoF） 的书&quot;， 并且很快进一步简化为 &quot;GoF 的书&quot;。</p><p><img src="'+y+'" alt="image-20220113150108444"></p><h3 id="_1-3-设计模式分类" tabindex="-1"><a class="header-anchor" href="#_1-3-设计模式分类"><span>1.3 设计模式分类</span></a></h3><p>按照不同的业务领域和场景的复杂程度，以及选择不同的设计模式，在整个系统建设落地中都会有不同的呈现形式。就像出行可以选择不同的交通工具一样，如近距离骑自行车、中短程驾车、远程乘坐高铁或飞机等</p><p>GoF设计模式只有23个，但是它们各具特色，每个模式都为某一个可重复的设计问题提供了一套解决方案。</p><p>根据它们的用途，设计模式可分为 <strong>创建型(Creational)</strong>，<strong>结构型(Structural)<strong>和</strong>行为型(Behavioral)</strong></p><ul><li><strong>创建型模式：提供创建对象的机制，提升已有代码的灵活性和可复用性</strong></li></ul><p><img src="'+A+'" alt="image-20220530160637842"></p><ul><li><strong>结构型模式：介绍如何将对象和类组装成较大的结构，并同时保持结构的灵活和高效</strong></li></ul><p><img src="'+D+'" alt="image-20220530160917816"></p><ul><li><strong>行为模式：负责对象间的高效沟通和职责传递委派</strong></li></ul><p><img src="'+B+'" alt="image-20220530161010217"></p><h2 id="_2-六大设计原则" tabindex="-1"><a class="header-anchor" href="#_2-六大设计原则"><span>2. 六大设计原则</span></a></h2><h3 id="_2-1-单一职责原则-srp" tabindex="-1"><a class="header-anchor" href="#_2-1-单一职责原则-srp"><span>2.1 单一职责原则（SRP）</span></a></h3><h4 id="_2-1-1-定义" tabindex="-1"><a class="header-anchor" href="#_2-1-1-定义"><span>2.1.1 定义</span></a></h4><p><img src="'+f+`" alt="image-20220609152207574"></p><p>单一职责原则（Single Responsibility Principle，SRP）又称单一功能原则，是面向对象的五个基本原则（SOLID）之一</p><h4 id="_2-1-2-职责分析" tabindex="-1"><a class="header-anchor" href="#_2-1-2-职责分析"><span>2.1.2 职责分析</span></a></h4><p>如果需要开发的一个功能需求不是一次性的，且随着业务发展的不断变化而变化，那么当一个Class类负责超过两个及以上的职责时，就在需求的不断迭代、实现类持续扩张的情况下，就会出现难以维护、不好扩展、测试难度大和上线风险高等问题。</p><p>所谓的职责就是指类变化的原因，也就是业务需求。如果一个类有多于一个的原因被改变，那么这个类就有超过两个及以上的职责。而单一职责约定一个类应该有且仅有一个改变类的原因。</p><h4 id="_2-1-3-模拟场景" tabindex="-1"><a class="header-anchor" href="#_2-1-3-模拟场景"><span>2.1.3 模拟场景</span></a></h4><p>这里通过一个视频网站用户分类的例子，来帮助大家理解单一职责原则的构建方法。当在各类视频网站看电影、电视剧时，网站针对不同的用户类型，会在用户观看时给出不同的服务反馈，如以下三种：</p><ul><li>访客用户，一般只可以观看480P视频，并时刻提醒用户注册会员能观看高清视</li><li>普通会员，可以观看720P超清视频，但不能屏蔽视频中出现的广告</li><li>VIP 会员（属于付费用户），既可以观看 1080P 蓝光视频，又可以关闭或跳过广告</li></ul><h4 id="_2-1-4-违背原则方案" tabindex="-1"><a class="header-anchor" href="#_2-1-4-违背原则方案"><span>2.1.4 违背原则方案</span></a></h4><p>下面根据需求场景直接编码，实现一个最简单的基本功能，即根据不同的用户类型，判断用户可以观看视频的类型。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class VideoUserService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void serveGrade(String userType){</span></span>
<span class="line"><span>        if (&quot;VIP用户&quot;.equals(userType)){</span></span>
<span class="line"><span>            System.out.println(&quot;VIP用户，视频1080P蓝光&quot;);</span></span>
<span class="line"><span>        } else if (&quot;普通用户&quot;.equals(userType)){</span></span>
<span class="line"><span>            System.out.println(&quot;普通用户，视频720P超清&quot;);</span></span>
<span class="line"><span>        } else if (&quot;访客用户&quot;.equals(userType)){</span></span>
<span class="line"><span>            System.out.println(&quot;访客用户，视频480P高清&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上，实现业务功能逻辑的方式非常简单，暂时也不会出什么问题。但是这一个类里包含着多个不同的行为，也就是多种用户职责。如果在这样的类上继续扩展功能或添加逻辑，就会显得非常臃肿</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_serveGrade(){</span></span>
<span class="line"><span>        VideoUserService service = new VideoUserService();</span></span>
<span class="line"><span>        service.serveGrade(&quot;VIP用户&quot;);</span></span>
<span class="line"><span>        service.serveGrade(&quot;普通用户&quot;);</span></span>
<span class="line"><span>        service.serveGrade(&quot;访客用户&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为上面的实现方式是在一个类中用if…else判断逻辑，所以在调用方法时是所有的职责用户都使用一个方法实现，作为程序调用入口。对于简单的或者几乎不需要迭代的功能，这种实现也未偿不可。但如果面对频繁迭代的业务需求，这样的代码结构就很难支撑系统迭代，每一次需求的实现都可能会影响其他逻辑，给整个接口服务带来不可控的风险</p><h4 id="_2-1-5-单一职责原则改善代码" tabindex="-1"><a class="header-anchor" href="#_2-1-5-单一职责原则改善代码"><span>2.1.5 单一职责原则改善代码</span></a></h4><p>视频播放是视频网站的核心功能，当核心功能开发完成后，就需要不断地完善用户权限。这样才能更好地运营一家视频网站。 在模拟用户场景中，其实就是在不断地建设用户权益。针对不同的用户类型提供差异化服务，既满足获客需求，又可以让部分用户选择付费。 为了满足这样不断迭代的需求，就不能使用一个类把所有职责行为混为一谈，而是需要提供一个上层的接口类，对不同的差异化用户给出单独的实现类，拆分各自的职责边界。</p><h5 id="_1-定义接口" tabindex="-1"><a class="header-anchor" href="#_1-定义接口"><span>1.定义接口</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface IVideoUserService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 视频清晰级别；480P、720P、1080P</span></span>
<span class="line"><span>    void definition();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 广告播放方式；无广告、有广告</span></span>
<span class="line"><span>    void advertisement();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义出上层接口 IVideoUserService，统一定义需要实现的功能，包括：视频清晰级别接口definition（）、广告播放方式接口advertisement（）。</p><p>三种不同类型的用户就可以分别实现自己的服务类，做到职责统一。</p><p>**（1）实现类，访客用户。**这个类实现的是访客用户在视频网站中的形态，比如这类用户只能观看480P高清视频，同时需要观看广告。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class GuestVideoUserService implements IVideoUserService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void definition() {</span></span>
<span class="line"><span>        System.out.println(&quot;访客用户，视频480P高清&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void advertisement() {</span></span>
<span class="line"><span>        System.out.println(&quot;访客用户，视频有广告&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）实现类，普通会员</strong>。这个类实现的是普通会员在视频网站中的形态，也就是注册用户可以观看720P超清视频，另外也需要观看广告。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class OrdinaryVideoUserService implements IVideoUserService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void definition() {</span></span>
<span class="line"><span>        System.out.println(&quot;普通用户，视频720P超清&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void advertisement() {</span></span>
<span class="line"><span>        System.out.println(&quot;普通用户，视频有广告&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）实现类，VIP会员</strong>。这个类实现的是VIP会员在视频网站中的形态。因为这类用户已经是付费用户，所以可以观看更高清的视频，同时不需要观看广告</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class VipVideoUserService implements IVideoUserService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void definition() {</span></span>
<span class="line"><span>        System.out.println(&quot;VIP用户，视频1080P蓝光&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void advertisement() {</span></span>
<span class="line"><span>        System.out.println(&quot;VIP用户，视频无广告&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>综上，每种用户对应的服务职责都有对应的类实现，不会互相干扰。当某一类用户需要添加新的运营规则时，操作起来也可以非常方便。比如，所有的注册用户可以发弹幕、付费用户可以点播等</p><h5 id="_2-单元测试" tabindex="-1"><a class="header-anchor" href="#_2-单元测试"><span>2.单元测试</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_VideoUserService(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        IVideoUserService guest = new GuestVideoUserService();</span></span>
<span class="line"><span>        guest.definition();</span></span>
<span class="line"><span>        guest.advertisement();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        IVideoUserService ordinary = new OrdinaryVideoUserService();</span></span>
<span class="line"><span>        ordinary.definition();</span></span>
<span class="line"><span>        ordinary.advertisement();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        IVideoUserService vip = new VipVideoUserService();</span></span>
<span class="line"><span>        vip.definition();</span></span>
<span class="line"><span>        vip.advertisement();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过利用单一职责原则的代码优化后，现在每个类都只负责自己的用户行为。后续无论扩展新的功能还是需要在某个时刻修改某个用户行为类，都可以非常方便地开发和维护。 在项目开发的过程中，尽可能保证接口的定义、类的实现以及方法开发保持单一职责，对项目后期的迭代和维护会有很大的帮助</p><h3 id="_2-2-开闭原则-ocp" tabindex="-1"><a class="header-anchor" href="#_2-2-开闭原则-ocp"><span>2.2 开闭原则（OCP）</span></a></h3><h4 id="_2-2-1-定义" tabindex="-1"><a class="header-anchor" href="#_2-2-1-定义"><span>2.2.1 定义</span></a></h4><p><img src="`+q+`" alt="image-20220609213147075"></p><h4 id="_2-2-2-职责分析" tabindex="-1"><a class="header-anchor" href="#_2-2-2-职责分析"><span>2.2.2 职责分析</span></a></h4><p><strong>任何软件都需要面临一个很重要的问题：即它们的需求会随时间的推移而发生变化。</strong></p><p>在面向对象编程领域中，开闭原则规定软件中的对象、类、模块和函数对扩展应该是开放的，但对于修改是封闭的。这意味着应该用抽象定义结构，用具体实现扩展细节，以此确保软件系统开发和维护过程的可靠性。</p><p><strong>开闭原则的核心思想也可以理解为面向抽象编程</strong></p><h4 id="_2-2-3-模拟场景" tabindex="-1"><a class="header-anchor" href="#_2-2-3-模拟场景"><span>2.2.3 模拟场景</span></a></h4><p>对于外部的调用方来说，只要能体现出面向抽象编程，定义出接口并实现其方法，即不修改原有方法体，只通过继承方式进行扩展，都可以体现出开闭原则。</p><p><strong>场景</strong>：这里计算三种形状的面积，如长方形、三角形、圆形，它们在类中已经按照固定的公式实现，其中圆形面积公式中π=3.14。但后续由于π值取的精度对于某些场景是不足的，需要扩展，接下来就通过模拟这个场景体现开闭原则。</p><p><strong>实现：（1）：定义接口。分别定义了三种求面积的接口</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface ICalculationArea {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 计算面积，长方形</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param x 长</span></span>
<span class="line"><span>     * @param y 宽</span></span>
<span class="line"><span>     * @return 面积</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    double rectangle(double x, double y);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 计算面积，三角形</span></span>
<span class="line"><span>     * @param x 边长x</span></span>
<span class="line"><span>     * @param y 边长y</span></span>
<span class="line"><span>     * @param z 边长z</span></span>
<span class="line"><span>     * @return  面积</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * 海伦公式：S=√[p(p-a)(p-b)(p-c)] 其中：p=(a+b+c)/2</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    double triangle(double x, double y, double z);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 计算面积，圆形</span></span>
<span class="line"><span>     * @param r 半径</span></span>
<span class="line"><span>     * @return 面积</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * 圆面积公式：S=πr²</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    double circular(double r);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）实现类。在实现类中，分别实现三种类型的面积计算，长方形（rectangle）、三角形（triangle）、圆形（circular）。其中，圆形面积的 π 值取的是 3.14D，这也是要扩展精度的方法和体现开闭原则的地方。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class CalculationArea implements ICalculationArea {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final static double π = 3.14D;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public double rectangle(double x, double y) {</span></span>
<span class="line"><span>        return x * y;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public double triangle(double x, double y, double z) {</span></span>
<span class="line"><span>        double p = (x + y + z) / 2;</span></span>
<span class="line"><span>        return Math.sqrt(p * (p - x) * (p - y) * (p - z));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public double circular(double r) {</span></span>
<span class="line"><span>        return π * r * r;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-4-违背原则方案" tabindex="-1"><a class="header-anchor" href="#_2-2-4-违背原则方案"><span>2.2.4 违背原则方案</span></a></h4><p>如果不考虑开闭原则，也不思考这种方法在整个工程服务中的使用情况，那么直接修改π值就可以了；但这样做就会破坏整个工程服务的稳定性，也会造成一些风险。</p><p>例如，用原来精度的π值计算出的圆形面积本可以满足需求，但是因为精度加长破坏了原有精度下的稳定性，就像齿轮间的啮合程度、方向盘的间隙等</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>    private final static double π = 3.141592653D;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public double circular(double r) {</span></span>
<span class="line"><span>        return π * r * r;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-5-开闭原则改善代码" tabindex="-1"><a class="header-anchor" href="#_2-2-5-开闭原则改善代码"><span>2.2.5 开闭原则改善代码</span></a></h4><p>按照开闭原则方式实现起来并不复杂，它的主要目的是不能因为个例需求的变化而改变预定的实现类，除非预定的实现类有错误。 实现过程是继承父类扩展需要的方法，同时可以保留原有的方法，新增自己需要的方法。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class CalculationAreaExt extends CalculationArea {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final static double π = 3.141592653D;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public double circular(double r) {</span></span>
<span class="line"><span>        return π * r * r;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>扩展后的方法已经把求圆形面积的精度增长，需要使用此方法的用户可以直接调用。而其他的方法，如长方形面积、三角形面积，则可以继续使用。</p><h3 id="_2-3-里氏代换原则-lsp" tabindex="-1"><a class="header-anchor" href="#_2-3-里氏代换原则-lsp"><span>2.3 里氏代换原则( LSP )</span></a></h3><h4 id="_2-2-1-定义-1" tabindex="-1"><a class="header-anchor" href="#_2-2-1-定义-1"><span>2.2.1 定义：</span></a></h4><p><img src="`+C+`" alt="image-20220609215144445"></p><p>里氏替换原则（Liskov Substitution Principle，LSP）是由麻省理工学院计算机科学系教授芭芭拉·利斯科夫（Barbara Liskov）于 1987 年在“面向对象技术的高峰会议”（OOPSLA）上发表的一篇文章《数据抽象和层次》（Data Abstraction and Hierarchy）里提出的，她提出：<strong>继承必须确保超类所拥有的性质在子类中仍然成立。</strong></p><h4 id="_2-2-2-职责分析-1" tabindex="-1"><a class="header-anchor" href="#_2-2-2-职责分析-1"><span>2.2.2 职责分析</span></a></h4><p><strong>里氏替换原则目的是指导继承中子类如何设计，子类的设计保证在替换父类是，不改变原有的逻辑和程序的正确性。</strong></p><p>如果S是T的子类型，那么所有T类型的对象都可以在不破坏程序的情况下被S类型的对象替换。 简单来说，子类可以扩展父类的功能，但不能改变父类原有的功能。也就是说：当子类继承父类时，除添加新的方法且完成新增功能外，尽量不要重写父类的方法。这句话包括了四点含义：</p><ul><li>子类可以实现父类的抽象方法，但不能覆盖父类的非抽象方法。</li><li>子类可以增加自己特有的方法。</li><li>当子类的方法重载父类的方法时，方法的前置条件（即方法的输入参数）要比父类的方法更宽松。</li><li>当子类的方法实现父类的方法（重写、重载或实现抽象方法）时，方法的后置条件（即方法的输出或返回值）要比父类的方法更严格或与父类的方法相等。</li></ul><h5 id="里氏替换原则的作用" tabindex="-1"><a class="header-anchor" href="#里氏替换原则的作用"><span>里氏替换原则的作用</span></a></h5><ul><li>里氏替换原则是实现开闭原则的重要方式之一。</li><li>解决了继承中重写父类造成的可复用性变差的问题。</li><li>是动作正确性的保证，即类的扩展不会给已有的系统引入新的错误，降低了代码出错的可能性</li><li>加强程序的健壮性，同时变更时可以做到非常好的兼容性，提高程序的维护性、可扩展性，降低需求变更时引入的风险</li></ul><h4 id="模拟场景" tabindex="-1"><a class="header-anchor" href="#模拟场景"><span>模拟场景</span></a></h4><p>关于里氏替换的场景，最有名的就是“正方形不是长方形”。同时还有一些关于动物的例子，比如鸵鸟、企鹅都是鸟，但是却不能飞。这样的例子可以非常形象地帮助我们理解里氏替换中关于两个类的继承不能破坏原有特性的含义。</p><p>为了从真实的开发场景感受里氏替换原则，这里选择不同种类的银行卡作为场景对象进行学习。</p><p>我们会使用各种类型的银行卡，例如储蓄卡、信用卡，还有一些其他特性的银行卡。储蓄卡和信用卡都具备一定的消费功能，但又有一些不同。例如信用卡不宜提现，如果提现可能会产生高额的利息。</p><p>下面构建这样一个模拟场景，假设在构建银行系统时，储蓄卡是第一个类，信用卡是第二个类。为了让信用卡可以使用储蓄卡的一些方法，选择由信用卡类继承储蓄卡类，讨论是否满足里氏替换原则产生的一些要点。</p><h4 id="违背原则方案" tabindex="-1"><a class="header-anchor" href="#违背原则方案"><span>违背原则方案</span></a></h4><p>储蓄卡和信用卡在使用功能上类似，都有支付、提现、还款、充值等功能，也有些许不同，例如支付，储蓄卡做的是账户扣款动作，信用卡做的是生成贷款单动作。下面这里模拟先有储蓄卡的类，之后继承这个类的基本功能，以实现信用卡的功能。</p><h5 id="_1-储蓄卡" tabindex="-1"><a class="header-anchor" href="#_1-储蓄卡"><span>1.储蓄卡</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class CashCard {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(CashCard.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 提现</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param orderId 单号</span></span>
<span class="line"><span>     * @param amount  金额</span></span>
<span class="line"><span>     * @return 状态码 0000成功、0001失败、0002重复</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public String withdrawal(String orderId, BigDecimal amount) {</span></span>
<span class="line"><span>        // 模拟支付成功</span></span>
<span class="line"><span>        logger.info(&quot;提现成功，单号：{} 金额：{}&quot;, orderId, amount);</span></span>
<span class="line"><span>        return &quot;0000&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 储蓄</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param orderId 单号</span></span>
<span class="line"><span>     * @param amount  金额</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public String recharge(String orderId, BigDecimal amount) {</span></span>
<span class="line"><span>        // 模拟充值成功</span></span>
<span class="line"><span>        logger.info(&quot;储蓄成功，单号：{} 金额：{}&quot;, orderId, amount);</span></span>
<span class="line"><span>        return &quot;0000&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 交易流水查询</span></span>
<span class="line"><span>     * @return 交易流水</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public List&lt;String&gt; tradeFlow() {</span></span>
<span class="line"><span>        logger.info(&quot;交易流水查询成功&quot;);</span></span>
<span class="line"><span>        List&lt;String&gt; tradeList = new ArrayList&lt;String&gt;();</span></span>
<span class="line"><span>        tradeList.add(&quot;100001,100.00&quot;);</span></span>
<span class="line"><span>        tradeList.add(&quot;100001,80.00&quot;);</span></span>
<span class="line"><span>        tradeList.add(&quot;100001,76.50&quot;);</span></span>
<span class="line"><span>        tradeList.add(&quot;100001,126.00&quot;);</span></span>
<span class="line"><span>        return tradeList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在储蓄卡的功能实现中包括了三个方法：提现、储蓄、交易流水查询，这些是模拟储蓄卡的基本功能。接下来通过继承储蓄卡的功能，实现信用卡服务。</p><h5 id="_2-信用卡" tabindex="-1"><a class="header-anchor" href="#_2-信用卡"><span>2.信用卡</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class CreditCard extends CashCard {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(CashCard.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String withdrawal(String orderId, BigDecimal amount) {</span></span>
<span class="line"><span>        // 校验</span></span>
<span class="line"><span>        if (amount.compareTo(new BigDecimal(1000)) &gt;= 0){</span></span>
<span class="line"><span>            logger.info(&quot;贷款金额校验(限额1000元)，单号：{} 金额：{}&quot;, orderId, amount);</span></span>
<span class="line"><span>            return &quot;0001&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 模拟生成贷款单</span></span>
<span class="line"><span>        logger.info(&quot;生成贷款单，单号：{} 金额：{}&quot;, orderId, amount);</span></span>
<span class="line"><span>        // 模拟支付成功</span></span>
<span class="line"><span>        logger.info(&quot;贷款成功，单号：{} 金额：{}&quot;, orderId, amount);</span></span>
<span class="line"><span>        return &quot;0000&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String recharge(String orderId, BigDecimal amount) {</span></span>
<span class="line"><span>        // 模拟生成还款单</span></span>
<span class="line"><span>        logger.info(&quot;生成还款单，单号：{} 金额：{}&quot;, orderId, amount);</span></span>
<span class="line"><span>        // 模拟还款成功</span></span>
<span class="line"><span>        logger.info(&quot;还款成功，单号：{} 金额：{}&quot;, orderId, amount);</span></span>
<span class="line"><span>        return &quot;0000&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public List&lt;String&gt; tradeFlow() {</span></span>
<span class="line"><span>        return super.tradeFlow();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>信用卡的功能实现是在继承了储蓄卡类后，进行方法重写：支付withdrawal（）、还款recharge（）。其实交易流水可以复用，也可以不用重写这个类。</p><p>这种继承父类方式的优点是复用了父类的核心功能逻辑，但是也破坏了原有的方法。此时继承父类实现的信用卡类并不满足里氏替换原则，也就是说，此时的子类不能承担原父类的功能，直接给储蓄卡使用。</p><h4 id="里氏替换原则改善代码" tabindex="-1"><a class="header-anchor" href="#里氏替换原则改善代码"><span>里氏替换原则改善代码</span></a></h4><p>储蓄卡和信用卡在功能使用上有些许类似，在实际的开发过程中也有很多共同可复用的属性及逻辑。实现这样的类的最好方式是提取出一个抽象类，由抽象类定义所有卡的共用核心属性、逻辑，把卡的支付和还款等动作抽象成正向和逆向操作。</p><h5 id="_1-抽象银行卡类" tabindex="-1"><a class="header-anchor" href="#_1-抽象银行卡类"><span>1.抽象银行卡类</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public abstract class BankCard {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(BankCard.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String cardNo;   // 卡号</span></span>
<span class="line"><span>    private String cardDate; // 开卡时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public BankCard(String cardNo, String cardDate) {</span></span>
<span class="line"><span>        this.cardNo = cardNo;</span></span>
<span class="line"><span>        this.cardDate = cardDate;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    abstract boolean rule(BigDecimal amount);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 正向入账，+ 钱</span></span>
<span class="line"><span>    public String positive(String orderId, BigDecimal amount) {</span></span>
<span class="line"><span>        // 入款成功，存款、还款</span></span>
<span class="line"><span>        logger.info(&quot;卡号{} 入款成功，单号：{} 金额：{}&quot;, cardNo, orderId, amount);</span></span>
<span class="line"><span>        return &quot;0000&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 逆向入账，- 钱</span></span>
<span class="line"><span>    public String negative(String orderId, BigDecimal amount) {</span></span>
<span class="line"><span>        // 入款成功，存款、还款</span></span>
<span class="line"><span>        logger.info(&quot;卡号{} 出款成功，单号：{} 金额：{}&quot;, cardNo, orderId, amount);</span></span>
<span class="line"><span>        return &quot;0000&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 交易流水查询</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @return 交易流水</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public List&lt;String&gt; tradeFlow() {</span></span>
<span class="line"><span>        logger.info(&quot;交易流水查询成功&quot;);</span></span>
<span class="line"><span>        List&lt;String&gt; tradeList = new ArrayList&lt;String&gt;();</span></span>
<span class="line"><span>        tradeList.add(&quot;100001,100.00&quot;);</span></span>
<span class="line"><span>        tradeList.add(&quot;100001,80.00&quot;);</span></span>
<span class="line"><span>        tradeList.add(&quot;100001,76.50&quot;);</span></span>
<span class="line"><span>        tradeList.add(&quot;100001,126.00&quot;);</span></span>
<span class="line"><span>        return tradeList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getCardNo() {</span></span>
<span class="line"><span>        return cardNo;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getCardDate() {</span></span>
<span class="line"><span>        return cardDate;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在抽象银行卡类中，提供了基本的卡属性，包括卡号、开卡时间及三个核心方法。正向入账，加钱；逆向入账，减钱。当然，实际的业务开发抽象出来的逻辑会比模拟场景多一些。接下来继承这个抽象类，实现储蓄卡的功能逻辑。</p><h5 id="_2-储蓄卡类实现" tabindex="-1"><a class="header-anchor" href="#_2-储蓄卡类实现"><span>2.储蓄卡类实现</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class CashCard extends BankCard {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(CashCard.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public CashCard(String cardNo, String cardDate) {</span></span>
<span class="line"><span>        super(cardNo, cardDate);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    boolean rule(BigDecimal amount) {</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 提现</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param orderId 单号</span></span>
<span class="line"><span>     * @param amount  金额</span></span>
<span class="line"><span>     * @return 状态码 0000成功、0001失败、0002重复</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public String withdrawal(String orderId, BigDecimal amount) {</span></span>
<span class="line"><span>        // 模拟支付成功</span></span>
<span class="line"><span>        logger.info(&quot;提现成功，单号：{} 金额：{}&quot;, orderId, amount);</span></span>
<span class="line"><span>        return super.negative(orderId, amount);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 储蓄</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param orderId 单号</span></span>
<span class="line"><span>     * @param amount  金额</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public String recharge(String orderId, BigDecimal amount) {</span></span>
<span class="line"><span>        // 模拟充值成功</span></span>
<span class="line"><span>        logger.info(&quot;储蓄成功，单号：{} 金额：{}&quot;, orderId, amount);</span></span>
<span class="line"><span>        return super.positive(orderId, amount);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 风险校验</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param cardNo  卡号</span></span>
<span class="line"><span>     * @param orderId 单号</span></span>
<span class="line"><span>     * @param amount  金额</span></span>
<span class="line"><span>     * @return 状态</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public boolean checkRisk(String cardNo, String orderId, BigDecimal amount) {</span></span>
<span class="line"><span>        // 模拟风控校验</span></span>
<span class="line"><span>        logger.info(&quot;风控校验，卡号：{} 单号：{} 金额：{}&quot;, cardNo, orderId, amount);</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>储蓄卡类中继承抽象银行卡父类 BankCard，实现的核心功能包括规则过滤rule、提现withdrawal、储蓄recharge和新增的扩展方法，即风控校验 checkRisk。</p><p>这样的实现方式满足了里氏替换的基本原则，既实现抽象类的抽象方法，又没有破坏父类中的原有方法。接下来实现信用卡的功能，信用卡的功能可以继承于储蓄卡，也可以继承抽象银行卡父类。但无论哪种实现方式，都需要遵从里氏替换原则，不可以破坏父类原有的方法。</p><h5 id="_3-信用卡类实现" tabindex="-1"><a class="header-anchor" href="#_3-信用卡类实现"><span>3.信用卡类实现</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class CreditCard extends CashCard {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(CreditCard.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public CreditCard(String cardNo, String cardDate) {</span></span>
<span class="line"><span>        super(cardNo, cardDate);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    boolean rule2(BigDecimal amount) {</span></span>
<span class="line"><span>        return amount.compareTo(new BigDecimal(1000)) &lt;= 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 提现，信用卡贷款</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param orderId 单号</span></span>
<span class="line"><span>     * @param amount  金额</span></span>
<span class="line"><span>     * @return 状态码</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public String loan(String orderId, BigDecimal amount) {</span></span>
<span class="line"><span>        boolean rule = rule2(amount);</span></span>
<span class="line"><span>        if (!rule) {</span></span>
<span class="line"><span>            logger.info(&quot;生成贷款单失败，金额超限。单号：{} 金额：{}&quot;, orderId, amount);</span></span>
<span class="line"><span>            return &quot;0001&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 模拟生成贷款单</span></span>
<span class="line"><span>        logger.info(&quot;生成贷款单，单号：{} 金额：{}&quot;, orderId, amount);</span></span>
<span class="line"><span>        // 模拟支付成功</span></span>
<span class="line"><span>        logger.info(&quot;贷款成功，单号：{} 金额：{}&quot;, orderId, amount);</span></span>
<span class="line"><span>        return super.negative(orderId, amount);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 还款，信用卡还款</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param orderId 单号</span></span>
<span class="line"><span>     * @param amount  金额</span></span>
<span class="line"><span>     * @return 状态码</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public String repayment(String orderId, BigDecimal amount) {</span></span>
<span class="line"><span>        // 模拟生成还款单</span></span>
<span class="line"><span>        logger.info(&quot;生成还款单，单号：{} 金额：{}&quot;, orderId, amount);</span></span>
<span class="line"><span>        // 模拟还款成功</span></span>
<span class="line"><span>        logger.info(&quot;还款成功，单号：{} 金额：{}&quot;, orderId, amount);</span></span>
<span class="line"><span>        return super.positive(orderId, amount);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>信用卡类在继承父类后，使用了公用的属性，即卡号 cardNo、开卡时间 cardDate，同时新增了符合信用卡功能的新方法，即贷款loan、还款repayment，并在两个方法中都使用了抽象类的核心功能。</p><p>另外，关于储蓄卡中的规则校验方法，新增了自己的规则方法 rule2，并没有破坏储蓄卡中的校验方法。</p><p>以上的实现方式都是在遵循里氏替换原则下完成的，子类随时可以替代储蓄卡类。</p><h5 id="_4-功能测试" tabindex="-1"><a class="header-anchor" href="#_4-功能测试"><span>4.功能测试</span></a></h5><p>储蓄卡</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_bankCard() {</span></span>
<span class="line"><span>        logger.info(&quot;里氏替换前，CashCard类：&quot;);</span></span>
<span class="line"><span>        CashCard bankCard = new CashCard(&quot;6214567800989876&quot;, &quot;2020-10-01&quot;);</span></span>
<span class="line"><span>        // 提现</span></span>
<span class="line"><span>        bankCard.withdrawal(&quot;100001&quot;, new BigDecimal(100));</span></span>
<span class="line"><span>        // 储蓄</span></span>
<span class="line"><span>        bankCard.recharge(&quot;100001&quot;, new BigDecimal(100));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>信用卡</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span> @Test</span></span>
<span class="line"><span>    public void test_CreditCard(){</span></span>
<span class="line"><span>        CreditCard creditCard = new CreditCard(&quot;6214567800989876&quot;, &quot;2020-10-01&quot;);</span></span>
<span class="line"><span>        // 支付，贷款</span></span>
<span class="line"><span>        creditCard.loan(&quot;100001&quot;, new BigDecimal(100));</span></span>
<span class="line"><span>        // 还款</span></span>
<span class="line"><span>        creditCard.repayment(&quot;100001&quot;, new BigDecimal(100));</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>信用卡替换储蓄卡</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>        logger.info(&quot;里氏替换后，CreditCard类：&quot;);</span></span>
<span class="line"><span>        CashCard creditCard = new CreditCard(&quot;6214567800989876&quot;, &quot;2020-10-01&quot;);</span></span>
<span class="line"><span>        // 提现</span></span>
<span class="line"><span>        creditCard.withdrawal(&quot;100001&quot;, new BigDecimal(1000000));</span></span>
<span class="line"><span>        // 储蓄</span></span>
<span class="line"><span>        creditCard.recharge(&quot;100001&quot;, new BigDecimal(100));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上的测试结果可以看到，储蓄卡功能正常，继承储蓄卡实现的信用卡功能也正常。同时，原有储蓄卡类的功能可以由信用卡类支持，即 CashCard creditCard=new CreditCard（...）。</p><p>继承作为面向对象的重要特征，虽然给程序开发带来了非常大的便利，但也引入了一些弊端。继承的开发方式会给代码带来侵入性，可移植能力降低，类之间的耦合度较高。当对父类修改时，就要考虑一整套子类的实现是否有风险，测试成本较高。</p><p>里氏替换原则的目的是使用约定的方式，让使用继承后的代码具备良好的扩展性和兼容性。</p><h3 id="_2-4-迪米特法则-lkp" tabindex="-1"><a class="header-anchor" href="#_2-4-迪米特法则-lkp"><span>2.4 迪米特法则（LKP）</span></a></h3><h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义：</span></a></h4><p><img src="`+E+`" alt="image-20220609225330420"></p><p>1987年秋天，迪米特法则由美国Northeastern University的Ian Holland提出，被UML的创始者之一Booch等人普及。后来，因为经典著作The Pragmatic Programmer而广为人知。</p><h4 id="职责分析" tabindex="-1"><a class="header-anchor" href="#职责分析"><span>职责分析：</span></a></h4><p>迪米特法则（Law of Demeter，LoD）又称为最少知道原则（Least Knowledge Principle，LKP），是指一个对象类对于其他对象类来说，知道得越少越好。也就是说，两个类之间不要有过多的耦合关系，保持最少关联性。</p><p>迪米特法则有一句经典语录：只和朋友通信，不和陌生人说话。也就是说，有内在关联的类要内聚，没有直接关系的类要低耦合。这样的例子在我们生活中也随处可见，就像家里的水管装修，有洗衣机地漏、卫生间地漏、厨房地漏，但它们最终都汇到同一个污水处理系统里。在平常使用时，我们不会考虑这些水管是怎么关联流向的，只需要考虑最上层的使用即可。</p><h4 id="模拟场景-1" tabindex="-1"><a class="header-anchor" href="#模拟场景-1"><span>模拟场景</span></a></h4><p>通过模拟学生、老师、校长之间关系的例子来说明迪米特法则。老师需要负责具体某一个学生的学习情况，而校长会关心老师所在班级的总体成绩，不会过问具体某一个学生的学习情况。</p><p>下面模拟这样的例子，如果校长想知道一个班级的总分和平均分，是应该找老师要，还是跟每一个学生要再进行统计呢？显然是应该找具体的班主任老师。我们在实际开发时，容易忽略这样的真实情况，开发出逻辑错误的程序。</p><h4 id="违背原则方案-1" tabindex="-1"><a class="header-anchor" href="#违背原则方案-1"><span>违背原则方案</span></a></h4><p>首先定义一个学生信息类，这个类比较简单，包括学生姓名、考试排名、总分。在实际的业务开发中会更复杂，这里只是简化后的类。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class Student {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String name;    // 学生姓名</span></span>
<span class="line"><span>    private int rank;       // 考试排名(总排名)</span></span>
<span class="line"><span>    private double grade;   // 考试分数(总分)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后再定义出老师类，在老师类里初始化学生的信息，以及提供基本的信息获取接口。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class Teacher {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String name;                // 老师名称</span></span>
<span class="line"><span>    private String clazz;               // 班级</span></span>
<span class="line"><span>    private static List&lt;Student&gt; studentList;  // 学生</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Teacher() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Teacher(String name, String clazz) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.clazz = clazz;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        studentList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        studentList.add(new Student(&quot;花花&quot;, 10, 589));</span></span>
<span class="line"><span>        studentList.add(new Student(&quot;豆豆&quot;, 54, 356));</span></span>
<span class="line"><span>        studentList.add(new Student(&quot;秋雅&quot;, 23, 439));</span></span>
<span class="line"><span>        studentList.add(new Student(&quot;皮皮&quot;, 2, 665));</span></span>
<span class="line"><span>        studentList.add(new Student(&quot;蛋蛋&quot;, 19, 502));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static List&lt;Student&gt; getStudentList() {</span></span>
<span class="line"><span>        return studentList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getClazz() {</span></span>
<span class="line"><span>        return clazz;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在老师类中初始化了学生信息，同时提供了简单的接口。接下来定义校长类，校长管理全局，并在校长类中获取学生人数、总分、平均分等。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class Principal {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Teacher teacher = new Teacher(&quot;丽华&quot;, &quot;3年1班&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 查询班级信息，总分数、学生人数、平均值</span></span>
<span class="line"><span>    public Map&lt;String, Object&gt; queryClazzInfo(String clazzId) {</span></span>
<span class="line"><span>        // 获取班级信息；学生总人数、总分、平均分</span></span>
<span class="line"><span>        int stuCount = clazzStudentCount();</span></span>
<span class="line"><span>        double totalScore = clazzTotalScore();</span></span>
<span class="line"><span>        double averageScore = clazzAverageScore();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 组装对象，实际业务开发会有对应的类</span></span>
<span class="line"><span>        Map&lt;String, Object&gt; mapObj = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>        mapObj.put(&quot;班级&quot;, teacher.getClazz());</span></span>
<span class="line"><span>        mapObj.put(&quot;老师&quot;, teacher.getName());</span></span>
<span class="line"><span>        mapObj.put(&quot;学生人数&quot;, stuCount);</span></span>
<span class="line"><span>        mapObj.put(&quot;班级总分数&quot;, totalScore);</span></span>
<span class="line"><span>        mapObj.put(&quot;班级平均分&quot;, averageScore);</span></span>
<span class="line"><span>        return mapObj;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 总分</span></span>
<span class="line"><span>    public double clazzTotalScore() {</span></span>
<span class="line"><span>        double totalScore = 0;</span></span>
<span class="line"><span>        for (Student stu : teacher.getStudentList()) {</span></span>
<span class="line"><span>            totalScore += stu.getGrade();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return totalScore;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 平均分</span></span>
<span class="line"><span>    public double clazzAverageScore(){</span></span>
<span class="line"><span>        double totalScore = 0;</span></span>
<span class="line"><span>        for (Student stu : teacher.getStudentList()) {</span></span>
<span class="line"><span>            totalScore += stu.getGrade();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return totalScore / teacher.getStudentList().size();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 班级人数</span></span>
<span class="line"><span>    public int clazzStudentCount(){</span></span>
<span class="line"><span>        return teacher.getStudentList().size();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是通过校长管理所有学生，老师只提供了非常简单的信息。虽然可以查询到结果，但是违背了迪米特法则，因为校长需要了解每个学生的情况。如果所有班级都让校长类统计，代码就会变得非常臃肿，也不易于维护和扩展。</p><h4 id="迪米特法则改善代码" tabindex="-1"><a class="header-anchor" href="#迪米特法则改善代码"><span>迪米特法则改善代码</span></a></h4><p>从以上的实现方式我们发现，不该让校长直接管理学生，校长应该管理老师，由老师提供相应的学生信息查询服务。那么，接下来我们就把校长要的信息交给老师类去处理。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class Teacher {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String name;                // 老师名称</span></span>
<span class="line"><span>    private String clazz;               // 班级</span></span>
<span class="line"><span>    private static List&lt;Student&gt; studentList;  // 学生</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Teacher() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Teacher(String name, String clazz) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.clazz = clazz;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        studentList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        studentList.add(new Student(&quot;花花&quot;, 10, 589));</span></span>
<span class="line"><span>        studentList.add(new Student(&quot;豆豆&quot;, 54, 356));</span></span>
<span class="line"><span>        studentList.add(new Student(&quot;秋雅&quot;, 23, 439));</span></span>
<span class="line"><span>        studentList.add(new Student(&quot;皮皮&quot;, 2, 665));</span></span>
<span class="line"><span>        studentList.add(new Student(&quot;蛋蛋&quot;, 19, 502));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 总分</span></span>
<span class="line"><span>    public double clazzTotalScore() {</span></span>
<span class="line"><span>        double totalScore = 0;</span></span>
<span class="line"><span>        for (Student stu : studentList) {</span></span>
<span class="line"><span>            totalScore += stu.getGrade();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return totalScore;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 平均分</span></span>
<span class="line"><span>    public double clazzAverageScore(){</span></span>
<span class="line"><span>        double totalScore = 0;</span></span>
<span class="line"><span>        for (Student stu : studentList) {</span></span>
<span class="line"><span>            totalScore += stu.getGrade();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return totalScore / studentList.size();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 班级人数</span></span>
<span class="line"><span>    public int clazzStudentCount(){</span></span>
<span class="line"><span>        return studentList.size();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getClazz() {</span></span>
<span class="line"><span>        return clazz;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用迪米特法则后，把原来违背迪米特法则的服务接口交给老师类处理。这样每一位老师都会提供相应的功能，校长类只需要调用使用即可，而不需要了解每一位学生的分数。</p><p>接下来再看校长类是如何使用的，如下所示。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class Principal {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Teacher teacher = new Teacher(&quot;丽华&quot;, &quot;3年1班&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 查询班级信息，总分数、学生人数、平均值</span></span>
<span class="line"><span>    public Map&lt;String, Object&gt; queryClazzInfo(String clazzId) {</span></span>
<span class="line"><span>        // 获取班级信息；学生总人数、总分、平均分</span></span>
<span class="line"><span>        int stuCount = teacher.clazzStudentCount();</span></span>
<span class="line"><span>        double totalScore = teacher.clazzTotalScore();</span></span>
<span class="line"><span>        double averageScore = teacher.clazzAverageScore();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 组装对象，实际业务开发会有对应的类</span></span>
<span class="line"><span>        Map&lt;String, Object&gt; mapObj = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>        mapObj.put(&quot;班级&quot;, teacher.getClazz());</span></span>
<span class="line"><span>        mapObj.put(&quot;老师&quot;, teacher.getName());</span></span>
<span class="line"><span>        mapObj.put(&quot;学生人数&quot;, stuCount);</span></span>
<span class="line"><span>        mapObj.put(&quot;班级总分数&quot;, totalScore);</span></span>
<span class="line"><span>        mapObj.put(&quot;班级平均分&quot;, averageScore);</span></span>
<span class="line"><span>        return mapObj;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>校长类直接调用老师类的接口，并获取相应的信息。这样一来，整个功能逻辑就非常清晰了。</p><p>使用单元测试验证程序结果。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(ApiTest.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_Principal() {</span></span>
<span class="line"><span>        Principal principal = new Principal();</span></span>
<span class="line"><span>        Map&lt;String, Object&gt; map = principal.queryClazzInfo(&quot;3年1班&quot;);</span></span>
<span class="line"><span>        logger.info(&quot;查询结果：{}&quot;, JSON.toJSONString(map));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-接口隔离原则-isp" tabindex="-1"><a class="header-anchor" href="#_2-5-接口隔离原则-isp"><span>2.5 接口隔离原则（ISP）</span></a></h3><h4 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1"><span>定义：</span></a></h4><p><img src="`+S+`" alt="image-20220609231259823"></p><p>《代码整洁之道》的作者Robert C.Martin于2002年给“接口隔离原则”的定义是：客户端不应该被迫依赖于它不使用的方法（Clients should not be forced to depend on methods they do not use）。</p><p>该原则还有另外一个定义：一个类对另一个类的依赖应该建立在最小的接口上（The dependency of one class to another one should depend on the smallest possible interface）。</p><p>接口隔离原则（Interface Segregation Principle，ISP）要求程序员尽量将臃肿庞大的接口拆分成更小的和更具体的接口，让接口中只包含客户感兴趣的方法。</p><p>接口隔离是为了高内聚、低耦合。在实际的业务开发中，通常会先定义好需要开发的接口，并由各个服务类实现。但如果没有经过考虑和设计，就很可能造成一个接口中包括众多的接口方法，而这些接口并不一定在每一个类中都需要实现。这样的接口很难维护，也不易于扩展，每一次修改验证都有潜在的风险。</p><p>在具体应用接口隔离原则时，应该根据以下几个规则衡量。</p><ul><li>接口尽量小，但是要有限度。一个接口只服务于一个子模块或业务逻辑。</li><li>为依赖接口的类定制服务。只提供调用者需要的方法，屏蔽不需要的方法</li><li>了解环境，拒绝盲从。每个项目或产品都有选定的环境因素，环境不同，接口拆分的标准就不同，要深入了解业务逻辑。</li><li>提高内聚，减少对外交互。让接口用最少的方法完成最多的事情</li></ul><h4 id="模拟场景-2" tabindex="-1"><a class="header-anchor" href="#模拟场景-2"><span>模拟场景</span></a></h4><p>对于接口隔离的场景，在平时简单的业务开发中可能不会遇到，也可能体现得不明显。为了让大家更好地理解，举一个《王者荣耀》中英雄技能的例子，如果由你来开发这样的功能，会怎样设计？</p><p>《王者荣耀》里有很多英雄，可以分为射手、战士、刺客等，每个英雄有三种技能。这些技能该如何定义，让每个英雄实现相应的技能效果呢？接下来就分别使用两种不同的方式实现，来体现设计原则的应用。</p><h4 id="违背原则方案-2" tabindex="-1"><a class="header-anchor" href="#违背原则方案-2"><span>违背原则方案</span></a></h4><p>首先定义一个技能接口，实现的英雄都需要实现这个接口，进而实现自己的技能。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface ISkill {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //灼日之矢</span></span>
<span class="line"><span>    void doArchery();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 隐袭</span></span>
<span class="line"><span>    void doInvisible();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 技能沉默</span></span>
<span class="line"><span>    void doSilent();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 眩晕</span></span>
<span class="line"><span>    void doVertigo();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里提供了四个技能的接口，包括射箭、隐袭、沉默、眩晕，每个英雄都实现这个接口。接下来实现两个英雄：后羿和廉颇。当然，这里为了说明问题进行了简化，英雄技能只有三个，与真实游戏中有所差别。</p><p>1.英雄后裔 在英雄后羿的类中，实现了三个技能，最后一个眩晕的技能是不需要实现的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class HeroHouYi implements ISkill{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doArchery() {</span></span>
<span class="line"><span>        System.out.println(&quot;后裔的灼日之矢&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doInvisible() {</span></span>
<span class="line"><span>        System.out.println(&quot;后裔的隐身技能&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doSilent() {</span></span>
<span class="line"><span>        System.out.println(&quot;后裔的沉默技能&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doVertigo() {</span></span>
<span class="line"><span>        // 无此技能的实现</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2英雄廉颇 在英雄廉颇的类中，同样只实现了三个技能，有一个射箭的技能没有实现。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class HeroLianPo implements ISkill{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doArchery() {</span></span>
<span class="line"><span>        // 无此技能的实现</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doInvisible() {</span></span>
<span class="line"><span>        System.out.println(&quot;廉颇的隐身技能&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doSilent() {</span></span>
<span class="line"><span>        System.out.println(&quot;廉颇的沉默技能&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doVertigo() {</span></span>
<span class="line"><span>        System.out.println(&quot;廉颇的眩晕技能&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>综上，每个英雄的实现类里都有一个和自己无关的接口实现类，非常不符合设计模式，也不易于维护。因为不仅无法控制外部的调用，还需要维护对应的文档，来说明这个接口不需要实现。如果有更多这样的接口，就会变得非常麻烦</p><h4 id="接口隔离原则改善代码" tabindex="-1"><a class="header-anchor" href="#接口隔离原则改善代码"><span>接口隔离原则改善代码</span></a></h4><p>按照接口隔离原则的约定，应该在确保合理的情况下，把接口细分。保证一个松散的结构，也就是把技能拆分出来，每个英雄都可以按需继承实现。 接下来分别定义四个技能接口，包括射箭（ISkillArchery）、隐身（ISkillInvisible）、沉默（ISkillSilent）、眩晕（ISkillVertigo），如下所示。</p><p>ISkillArchery</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface ISkillArchery {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //灼日之矢</span></span>
<span class="line"><span>    void doArchery();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ISkillInvisible</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface ISkillInvisible {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 隐袭</span></span>
<span class="line"><span>    void doInvisible();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ISkillSilent</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface ISkillSilent {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 技能沉默</span></span>
<span class="line"><span>    void doSilent();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ISkillVertigo</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface ISkillVertigo {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 眩晕</span></span>
<span class="line"><span>    void doVertigo();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了四个技能细分的接口，英雄的类就可以自由地组合了。</p><p>英雄后羿的实现。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class HeroHouYi implements ISkillArchery, ISkillInvisible, ISkillSilent {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doArchery() {</span></span>
<span class="line"><span>        System.out.println(&quot;后裔的灼日之矢&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doInvisible() {</span></span>
<span class="line"><span>        System.out.println(&quot;后裔的隐身技能&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doSilent() {</span></span>
<span class="line"><span>        System.out.println(&quot;后裔的沉默技能&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>英雄廉颇的实现。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class HeroLianPo implements ISkillInvisible, ISkillSilent, ISkillVertigo {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doInvisible() {</span></span>
<span class="line"><span>        System.out.println(&quot;廉颇的隐身技能&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doSilent() {</span></span>
<span class="line"><span>        System.out.println(&quot;廉颇的沉默技能&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doVertigo() {</span></span>
<span class="line"><span>        System.out.println(&quot;廉颇的眩晕技能&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在可以看到这两个英雄的类都按需实现了自己需要的技能接口。这样的实现方式就可以避免一些本身不属于自己的技能还需要不断地用文档的方式进行维护，同时提高了代码的可靠性，在别人接手或者修改时，可以降低开发成本和维护风险。</p><h3 id="_2-6-依赖倒转原则-dip" tabindex="-1"><a class="header-anchor" href="#_2-6-依赖倒转原则-dip"><span>2.6 依赖倒转原则(DIP)</span></a></h3><h4 id="定义-2" tabindex="-1"><a class="header-anchor" href="#定义-2"><span>定义：</span></a></h4><p>如果说开闭原则是面向对象设计的目标的话，那么依赖倒转原则就是面向对象设计的主要实现机制之一，它是系统抽象化的具体实现</p><p><img src="`+x+`" alt="image-20220609234231046"></p><p>依赖倒置原则是Robert C.Martin于1996年在C++Report上发表的文章中提出的。 依赖倒置原则（Dependence Inversion Principle，DIP）是指在设计代码架构时，高层模块不应该依赖于底层模块，二者都应该依赖于抽象。抽象不应该依赖于细节，细节应该依赖于抽象。</p><h4 id="原则分析" tabindex="-1"><a class="header-anchor" href="#原则分析"><span>原则分析：</span></a></h4><p>依赖倒置原则是实现开闭原则的重要途径之一，它降低了类之间的耦合，提高了系统的稳定性和可维护性，同时这样的代码一般更易读，且便于传承。</p><ul><li>1）如果说开闭原则是面向对象设计的目标,依赖倒转原则是到达面向设计&quot;开闭&quot;原则的手段..如果要达到最好的&quot;开闭&quot;原则,就要尽量的遵守依赖倒转原则. 可以说依赖倒转原则是对&quot;抽象化&quot;的最好规范</li><li>2）依赖倒转原则的常用实现方式之一是在代码中使用抽象类，而将具体类放在配置文件中</li><li>3）在实现依赖倒转原则时，我们需要针对抽象层编程，而将具体类的对象通过依赖注入(DependencyInjection, DI)的方式注入到其他对象中，依赖注入是指当一个对象要与其他对象发生依赖关系时，通过抽象来注入所依赖的对象。常用的注入方式有三种，分别是：构造注入，设值注入（Setter注入）和接口注入。构造注入是指通过构造函数来传入具体类的对象，设值注入是指通过Setter方法来传入具体类的对象，而接口注入是指通过在接口中声明的业务方法来传入具体类的对象。这些方法在定义时使用的是抽象类型，在运行时再传入具体类型的对象，由子类对象来覆盖父类对象。</li></ul><h4 id="模拟场景-3" tabindex="-1"><a class="header-anchor" href="#模拟场景-3"><span>模拟场景：</span></a></h4><p>在互联网的营销活动中，经常为了拉新和促活，会做一些抽奖活动。这些抽奖活动的规则会随着业务的不断发展而调整，如随机抽奖、权重抽奖等。其中，权重是指用户在当前系统中的一个综合排名，比如活跃度、贡献度等。</p><p>下面模拟出抽奖的一个系统服务，如果是初次搭建这样的系统会怎么实现？这个系统是否有良好的扩展性和可维护性，同时在变动和新增业务时测试的复杂度是否高？这些都是在系统服务设计时需要考虑的问题。</p><h4 id="违背原则方案-3" tabindex="-1"><a class="header-anchor" href="#违背原则方案-3"><span>违背原则方案</span></a></h4><p>下面先用最直接的方式，即按照不同的抽奖逻辑定义出不同的接口，让外部的服务调用。</p><p>1.定义抽奖用户类</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class BetUser {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String userName;  // 用户姓名</span></span>
<span class="line"><span>    private int userWeight;   // 用户权重</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个类就是一个普通的对象类，其中包括了用户姓名和对应的权重，方便满足不同的抽奖方式。 接下来实现两种不同的抽奖逻辑，在一个类中用两个接口实现，如下所示。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class DrawControl {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 随机抽取指定数量的用户，作为中奖用户</span></span>
<span class="line"><span>    public List&lt;BetUser&gt; doDrawRandom(List&lt;BetUser&gt; list, int count) {</span></span>
<span class="line"><span>        // 集合数量很小直接返回</span></span>
<span class="line"><span>        if (list.size() &lt;= count) return list;</span></span>
<span class="line"><span>        // 乱序集合</span></span>
<span class="line"><span>        Collections.shuffle(list);</span></span>
<span class="line"><span>        // 取出指定数量的中奖用户</span></span>
<span class="line"><span>        List&lt;BetUser&gt; prizeList = new ArrayList&lt;&gt;(count);</span></span>
<span class="line"><span>        for (int i = 0; i &lt; count; i++) {</span></span>
<span class="line"><span>            prizeList.add(list.get(i));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return prizeList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 权重排名获取指定数量的用户，作为中奖用户</span></span>
<span class="line"><span>    public List&lt;BetUser&gt; doDrawWeight(List&lt;BetUser&gt; list, int count) {</span></span>
<span class="line"><span>        // 按照权重排序</span></span>
<span class="line"><span>        list.sort((o1, o2) -&gt; {</span></span>
<span class="line"><span>            int e = o2.getUserWeight() - o1.getUserWeight();</span></span>
<span class="line"><span>            if (0 == e) return 0;</span></span>
<span class="line"><span>            return e &gt; 0 ? 1 : -1;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        // 取出指定数量的中奖用户</span></span>
<span class="line"><span>        List&lt;BetUser&gt; prizeList = new ArrayList&lt;&gt;(count);</span></span>
<span class="line"><span>        for (int i = 0; i &lt; count; i++) {</span></span>
<span class="line"><span>            prizeList.add(list.get(i));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return prizeList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个抽奖逻辑类中包括了两个接口，一个是随机抽奖，另一个是按照权重排序。</p><ul><li>随机抽取好理解，把集合中的元素使用工具包Collections.shuffle（）进行乱序，之后选取三个元素。当然，除了这样的随机抽取方式，还有其他方式。</li><li>按照权重排序，这里使用了list.sort的方法，并按排序逻辑的方式进行自定义排序。最终选择权重最高的前三名作为中奖用户。</li></ul><p>测试结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(ApiTest.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_DrawControl(){</span></span>
<span class="line"><span>        List&lt;BetUser&gt; betUserList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        betUserList.add(new BetUser(&quot;花花&quot;, 65));</span></span>
<span class="line"><span>        betUserList.add(new BetUser(&quot;豆豆&quot;, 43));</span></span>
<span class="line"><span>        betUserList.add(new BetUser(&quot;小白&quot;, 72));</span></span>
<span class="line"><span>        betUserList.add(new BetUser(&quot;笨笨&quot;, 89));</span></span>
<span class="line"><span>        betUserList.add(new BetUser(&quot;丑蛋&quot;, 10));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        DrawControl drawControl = new DrawControl();</span></span>
<span class="line"><span>        List&lt;BetUser&gt; prizeRandomUserList = drawControl.doDrawRandom(betUserList, 3);</span></span>
<span class="line"><span>        logger.info(&quot;随机抽奖，中奖用户名单：{}&quot;, JSON.toJSON(prizeRandomUserList));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;BetUser&gt; prizeWeightUserList = drawControl.doDrawWeight(betUserList, 3);</span></span>
<span class="line"><span>        logger.info(&quot;权重抽奖，中奖用户名单：{}&quot;, JSON.toJSON(prizeWeightUserList));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里使用单元测试的方式，在初始化数据后分别调用两个接口方法进行测试。</p><p>从测试结果上看，程序没有问题，验证结果正常。但是这样实现有什么问题呢？ 如果程序是一次性的、几乎不变的，那么可以不考虑很多的扩展性和可维护性因素；但如果这些程序具有不确定性，或者当业务发展时需要不断地调整和新增，那么这样的实现方式就很不友好了。</p><p>首先，这样的实现方式扩展起来很麻烦，每次扩展都需要新增接口，同时对于调用方来说需要新增调用接口的代码。其次，对于这个服务类来说，随着接口数量的增加，代码行数会不断地暴增，最后难以维护。</p><h4 id="依赖倒转原则改善代码" tabindex="-1"><a class="header-anchor" href="#依赖倒转原则改善代码"><span>依赖倒转原则改善代码</span></a></h4><p>既然上述方式不具备良好的扩展性，那么用依赖倒置、面向抽象编程的方式实现。 首先定义抽奖功能的接口，任何一个实现方都可以实现自己的抽奖逻辑。</p><p><strong>1.抽奖接口</strong></p><p>这里只有一个抽奖接口，接口中包括了需要传输的 list 集合，以及中奖用户数量。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface IDraw {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取中奖用户接口</span></span>
<span class="line"><span>    List&lt;BetUser&gt; prize(List&lt;BetUser&gt; list, int count);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.随机抽奖实现</strong></p><p>这部分随机抽奖逻辑与上面的抽奖方式逻辑是一样的，只不过放到接口实现中了。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class DrawRandom implements IDraw {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public List&lt;BetUser&gt; prize(List&lt;BetUser&gt; list, int count) {</span></span>
<span class="line"><span>        // 集合数量很小直接返回</span></span>
<span class="line"><span>        if (list.size() &lt;= count) return list;</span></span>
<span class="line"><span>        // 乱序集合</span></span>
<span class="line"><span>        Collections.shuffle(list);</span></span>
<span class="line"><span>        // 取出指定数量的中奖用户</span></span>
<span class="line"><span>        List&lt;BetUser&gt; prizeList = new ArrayList&lt;&gt;(count);</span></span>
<span class="line"><span>        for (int i = 0; i &lt; count; i++) {</span></span>
<span class="line"><span>            prizeList.add(list.get(i));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return prizeList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.<strong>权重抽奖实现</strong></p><p>权重抽奖也是一样，把这些都放到自己的接口实现中。这样一来，任何一种抽奖都有自己的实现类，既可以不断地完善，也可以新增。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class DrawWeightRank implements IDraw {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public List&lt;BetUser&gt; prize(List&lt;BetUser&gt; list, int count) {</span></span>
<span class="line"><span>        // 按照权重排序</span></span>
<span class="line"><span>        list.sort((o1, o2) -&gt; {</span></span>
<span class="line"><span>            int e = o2.getUserWeight() - o1.getUserWeight();</span></span>
<span class="line"><span>            if (0 == e) return 0;</span></span>
<span class="line"><span>            return e &gt; 0 ? 1 : -1;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        // 取出指定数量的中奖用户</span></span>
<span class="line"><span>        List&lt;BetUser&gt; prizeList = new ArrayList&lt;&gt;(count);</span></span>
<span class="line"><span>        for (int i = 0; i &lt; count; i++) {</span></span>
<span class="line"><span>            prizeList.add(list.get(i));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return prizeList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.<strong>创建抽奖服务</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class DrawControl {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private IDraw draw;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public List&lt;BetUser&gt; doDraw(IDraw draw, List&lt;BetUser&gt; betUserList, int count) {</span></span>
<span class="line"><span>        return draw.prize(betUserList, count);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个类中体现了依赖倒置的重要性，可以把任何一种抽奖逻辑传递给这个类。这样实现的好处是可以不断地扩展，但是不需要在外部新增调用接口，降低了一套代码的维护成本，并提高了可扩展性及可维护性。</p><p>另外，这里的重点是把实现逻辑的接口作为参数传递，在一些框架源码中经常会有这种做法。</p><p><strong>测试结果</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(ApiTest.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_DrawControl() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;BetUser&gt; betUserList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        betUserList.add(new BetUser(&quot;花花&quot;, 65));</span></span>
<span class="line"><span>        betUserList.add(new BetUser(&quot;豆豆&quot;, 43));</span></span>
<span class="line"><span>        betUserList.add(new BetUser(&quot;小白&quot;, 72));</span></span>
<span class="line"><span>        betUserList.add(new BetUser(&quot;笨笨&quot;, 89));</span></span>
<span class="line"><span>        betUserList.add(new BetUser(&quot;丑蛋&quot;, 10));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        DrawControl drawControl = new DrawControl();</span></span>
<span class="line"><span>        List&lt;BetUser&gt; prizeRandomUserList = drawControl.doDraw(new DrawRandom(), betUserList, 3);</span></span>
<span class="line"><span>        logger.info(&quot;随机抽奖，中奖用户名单：{}&quot;, JSON.toJSON(prizeRandomUserList));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;BetUser&gt; prizeWeightUserList = drawControl.doDraw(new DrawWeightRank(), betUserList, 3);</span></span>
<span class="line"><span>        logger.info(&quot;权重抽奖，中奖用户名单：{}&quot;, JSON.toJSON(prizeWeightUserList));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里与前面代码唯一不同的是新增了实现抽奖的入参 new DrawRandom（）、new DrawWeightRank（）。在这两个抽奖的功能逻辑作为入参后，扩展起来会非常的方便。 以这种抽象接口为基准搭建起来的框架结构会更加稳定，算程已经建设好，外部只需要实现自己的算子即可，最终把算子交给算程处理。</p><h3 id="_2-7-合成复用原则-carp" tabindex="-1"><a class="header-anchor" href="#_2-7-合成复用原则-carp"><span>2.7 合成复用原则（CARP）</span></a></h3><h4 id="定义-3" tabindex="-1"><a class="header-anchor" href="#定义-3"><span>定义：</span></a></h4><p>合成复用原则又称为组合/聚合复用原则(Composition/Aggregate Reuse Principle, CARP)，其定义如下：</p><p><img src="`+I+'" alt="image-20220427143155787"></p><p>合成复用原则 就是在一个新的对象里通过关联关系（包括组合关系和聚合关系）来使用一些已有的对象，使之成为新对象的一部分；新对象通过委派调用已有对象的方法达到复用功能的目的。</p><p>总结：<strong>复用时要尽量使用组合/聚合关系（关联关系），少用继承</strong>。</p><h4 id="原则分析-1" tabindex="-1"><a class="header-anchor" href="#原则分析-1"><span>原则分析：</span></a></h4><p>1）在面向对象设计中，可以通过两种基本方法在不同的环境中复用已有的设计和实现，即通过 组合 / 聚合关系 或通过 继承 。 继承复用 ：实现简单，易于扩展。破坏系统的封装性；从基类继承而来的实现是静态的，不可能在运行时发生改变，没有足够的灵活性；只能在有限的环境中使用。（ “白箱”复用） 组合/聚合复用 ：耦合度相对较低，选择性地调用成员对象的操作；可以在运行时动态进行。（ “黑箱”复用 ）</p><p>2）一般而言，如果两个类之间是“Has-A”的关系应使用组合或聚合，如果是“Is-A”关系可使用继承。&quot;Is-A&quot;是严格的分类学意义上的定义，意思是一个类是另一个类的&quot;一种&quot;；而&quot;Has-A&quot;则不同，它表示某一个角色具有某一项责任。</p><h2 id="_3-创建型模式" tabindex="-1"><a class="header-anchor" href="#_3-创建型模式"><span>3. 创建型模式</span></a></h2><p>创建型模式的主要关注点是“怎样创建对象？”，它的主要特点是“将对象的创建与使用分离”。</p><p>这样可以降低系统的耦合度，使用者不需要关注对象的创建细节。</p><p>创建型模式分为：</p><ul><li>单例模式</li><li>工厂方法模式</li><li>抽象工程模式</li><li>原型模式</li><li>建造者模式</li></ul><h3 id="_3-1-工厂模式" tabindex="-1"><a class="header-anchor" href="#_3-1-工厂模式"><span>3.1 工厂模式</span></a></h3><h4 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述：</span></a></h4><p><strong>工厂方法模式</strong>是一种创建型设计模式， 其在父类中提供一个创建对象的方法， 允许子类决定实例化对象的类型。</p><p>这种设计模式提供了按需创建对象的最佳方式。同时，这种创建方式不会对外暴露创建细节，并且会通过一个统一的接口创建所需对象</p><p>如图所示，柳州动力机械厂可以生产织布机和缝纫机</p><p><img src="'+w+'" alt="image-20220531101815549"></p><p>这种设计模式也是Java开发中常见的一种模式，它的主要意图是定义一个创建对象的接口，让其子类自己决定将哪一个工厂类实例化，工厂模式使创建过程延迟到子类中进行。</p><p>简单地说，就是为了给代码结构提供扩展性，屏蔽每一个功能类中的具体实现逻辑。这种方式便于外部更加简单地调用，同时也是去掉众多if…else的最佳手段。当然，这种设计模式也有一些缺点，需要治理。例如需要实现的类比较多、难以维护、开发成本高等，但这些问题都可以通过结合不同的设计模式逐步优化。</p><h4 id="模拟发放多种奖品" tabindex="-1"><a class="header-anchor" href="#模拟发放多种奖品"><span>模拟发放多种奖品</span></a></h4><p><img src="'+L+'" alt="image-20220531102217260"></p><p>模拟互联网运营活动中营销场景的业务需求，如图所示。由于营销场景存在复杂性、多变性、临时性，因此在研发设计时需要更加深入地了解业务需求；否则会经常面临各种紧急穿插的需求，让原本简单的增删改查（CRUD）实现变得臃肿不堪、代码结构极其混乱，最终难以维护，也无法防控风险。</p><p>在营销场景中经常会有某个⽤户做了⼀些操作；打卡、分享、留⾔、邀请注册等等，进⾏返利积分，最 后通过积分在兑换商品，从⽽促活和拉新。</p><p>那么在这⾥我们模拟积分兑换中的发放多种类型商品，假如现在我们有如下三种类型的商品接⼝</p><p><img src="'+_+`" alt="image-20220531102303900"></p><p>从以上接⼝来看有如下信息：</p><ul><li>三个接⼝返回类型不同，有对象类型、布尔类型、还有⼀个空类型。</li><li>⼊参不同，发放优惠券需要仿重、兑换卡需要卡ID、实物商品需要发货位置(对象中含有)。</li><li>另外可能会随着后续的业务的发展，会新增其他种商品类型。因为你所有的开发需求都是随着业务 对市场的拓展⽽带来的。</li></ul><h4 id="违背设计模式实现" tabindex="-1"><a class="header-anchor" href="#违背设计模式实现"><span>违背设计模式实现</span></a></h4><p>如果不考虑程序的任何扩展性，只为了尽快满足需求，那么对这三种奖励的发放只需使用if…else语句判断，调用不同的接口即可。我们先按照这样的方式实现业务需求，最后再使用设计模式重构这段代码，方便对照理解。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class PrizeController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(PrizeController.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public AwardRes awardToUser(AwardReq req) {</span></span>
<span class="line"><span>        String reqJson = JSON.toJSONString(req);</span></span>
<span class="line"><span>        AwardRes awardRes = null;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            logger.info(&quot;奖品发放开始{}。req:{}&quot;, req.getuId(), reqJson);</span></span>
<span class="line"><span>            // 按照不同类型方法商品[1优惠券、2实物商品、3第三方兑换卡(爱奇艺)]</span></span>
<span class="line"><span>            if (req.getAwardType() == 1) {</span></span>
<span class="line"><span>                CouponService couponService = new CouponService();</span></span>
<span class="line"><span>                CouponResult couponResult = couponService.sendCoupon(req.getuId(), req.getAwardNumber(), req.getBizId());</span></span>
<span class="line"><span>                if (&quot;0000&quot;.equals(couponResult.getCode())) {</span></span>
<span class="line"><span>                    awardRes = new AwardRes(&quot;0000&quot;, &quot;发放成功&quot;);</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    awardRes = new AwardRes(&quot;0001&quot;, couponResult.getInfo());</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else if (req.getAwardType() == 2) {</span></span>
<span class="line"><span>                GoodsService goodsService = new GoodsService();</span></span>
<span class="line"><span>                DeliverReq deliverReq = new DeliverReq();</span></span>
<span class="line"><span>                deliverReq.setUserName(queryUserName(req.getuId()));</span></span>
<span class="line"><span>                deliverReq.setUserPhone(queryUserPhoneNumber(req.getuId()));</span></span>
<span class="line"><span>                deliverReq.setSku(req.getAwardNumber());</span></span>
<span class="line"><span>                deliverReq.setOrderId(req.getBizId());</span></span>
<span class="line"><span>                deliverReq.setConsigneeUserName(req.getExtMap().get(&quot;consigneeUserName&quot;));</span></span>
<span class="line"><span>                deliverReq.setConsigneeUserPhone(req.getExtMap().get(&quot;consigneeUserPhone&quot;));</span></span>
<span class="line"><span>                deliverReq.setConsigneeUserAddress(req.getExtMap().get(&quot;consigneeUserAddress&quot;));</span></span>
<span class="line"><span>                Boolean isSuccess = goodsService.deliverGoods(deliverReq);</span></span>
<span class="line"><span>                if (isSuccess) {</span></span>
<span class="line"><span>                    awardRes = new AwardRes(&quot;0000&quot;, &quot;发放成功&quot;);</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    awardRes = new AwardRes(&quot;0001&quot;, &quot;发放失败&quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else if (req.getAwardType() == 3) {</span></span>
<span class="line"><span>                String bindMobileNumber = queryUserPhoneNumber(req.getuId());</span></span>
<span class="line"><span>                IQiYiCardService iQiYiCardService = new IQiYiCardService();</span></span>
<span class="line"><span>                iQiYiCardService.grantToken(bindMobileNumber, req.getAwardNumber());</span></span>
<span class="line"><span>                awardRes = new AwardRes(&quot;0000&quot;, &quot;发放成功&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            logger.info(&quot;奖品发放完成{}。&quot;, req.getuId());</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            logger.error(&quot;奖品发放失败{}。req:{}&quot;, req.getuId(), reqJson, e);</span></span>
<span class="line"><span>            awardRes = new AwardRes(&quot;0001&quot;, e.getMessage());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return awardRes;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String queryUserName(String uId) {</span></span>
<span class="line"><span>        return &quot;花花&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String queryUserPhoneNumber(String uId) {</span></span>
<span class="line"><span>        return &quot;13812341234&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码使用了if…else语句，用非常直接的方式实现了业务需求。如果仅从产品需求角度来说，确实实现了相应的功能逻辑。甚至靠这样简单粗暴的开发方式，也许能让需求提前上线。既然这样的代码可以实现快速交付，又存在什么问题呢？在互联网业务快速迭代的情况下，这段代码会在源源不断的需求中迭代和拓展。如</p><p>果这些逻辑都用 if…else填充到一个类里，则非常难以维护。这样的代码使用的时间越久，其重构成本就越高。重构前需要清理所有的使用方，测试回归验证时间加长，带来的风险也会非常高。所以，很多研发人员并不愿意接手这样的代码，如果接手后需求开发又非常紧急，可能根本来不及重构，导致这样的if…else语句还会继续增加。</p><h4 id="工厂模式重构代码" tabindex="-1"><a class="header-anchor" href="#工厂模式重构代码"><span>工厂模式重构代码</span></a></h4><p>接下来使用工厂模式优化代码，也算是一次代码重构。当整理代码流程并重构后，会发现代码结构更清晰了，也具备了应对下次新增业务需求的扩展性。</p><p>（注意：以下这段代码重构只是抽离出最核心的部分，方便理解和学习。在实际的业务开发中，还需要额外添加一些其他逻辑，在使用上进行完善，例如调用方式、参数校验和Spring注入等。）</p><h5 id="定义发奖接口" tabindex="-1"><a class="header-anchor" href="#定义发奖接口"><span>定义发奖接⼝</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface ICommodity {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void sendCommodity(String uId, String commodityId, String bizId, Map&lt;String, String&gt; extMap) throws Exception;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对于所有的奖品，无论是实物商品、优惠券还是第三方兑换卡（爱奇艺），都需要通过程序实现此接口并处理。这样的方式可以保证入参和出参的统一性。</li><li>接口的入参包括：用户 ID（uId）、奖品 ID（commodityId）、业务 ID（bizId）及扩展字段（extMap），用于处理发放实物商品时的收货地址</li></ul><h5 id="实现三种发奖接口" tabindex="-1"><a class="header-anchor" href="#实现三种发奖接口"><span>实现三种发奖接口</span></a></h5><h6 id="_1-优惠券" tabindex="-1"><a class="header-anchor" href="#_1-优惠券"><span>1.优惠券</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class CouponCommodityService implements ICommodity {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(CouponCommodityService.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private CouponService couponService = new CouponService();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void sendCommodity(String uId, String commodityId, String bizId, Map&lt;String, String&gt; extMap) throws Exception {</span></span>
<span class="line"><span>        CouponResult couponResult = couponService.sendCoupon(uId, commodityId, bizId);</span></span>
<span class="line"><span>        logger.info(&quot;请求参数[优惠券] =&gt; uId：{} commodityId：{} bizId：{} extMap：{}&quot;, uId, commodityId, bizId, JSON.toJSON(extMap));</span></span>
<span class="line"><span>        logger.info(&quot;测试结果[优惠券]：{}&quot;, JSON.toJSON(couponResult));</span></span>
<span class="line"><span>        if (!&quot;0000&quot;.equals(couponResult.getCode())) throw new RuntimeException(couponResult.getInfo());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-实物商品" tabindex="-1"><a class="header-anchor" href="#_2-实物商品"><span>2.实物商品</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class GoodsCommodityService implements ICommodity {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(GoodsCommodityService.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private GoodsService goodsService = new GoodsService();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void sendCommodity(String uId, String commodityId, String bizId, Map&lt;String, String&gt; extMap) throws Exception {</span></span>
<span class="line"><span>        DeliverReq deliverReq = new DeliverReq();</span></span>
<span class="line"><span>        deliverReq.setUserName(queryUserName(uId));</span></span>
<span class="line"><span>        deliverReq.setUserPhone(queryUserPhoneNumber(uId));</span></span>
<span class="line"><span>        deliverReq.setSku(commodityId);</span></span>
<span class="line"><span>        deliverReq.setOrderId(bizId);</span></span>
<span class="line"><span>        deliverReq.setConsigneeUserName(extMap.get(&quot;consigneeUserName&quot;));</span></span>
<span class="line"><span>        deliverReq.setConsigneeUserPhone(extMap.get(&quot;consigneeUserPhone&quot;));</span></span>
<span class="line"><span>        deliverReq.setConsigneeUserAddress(extMap.get(&quot;consigneeUserAddress&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Boolean isSuccess = goodsService.deliverGoods(deliverReq);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        logger.info(&quot;请求参数[实物商品] =&gt; uId：{} commodityId：{} bizId：{} extMap：{}&quot;, uId, commodityId, bizId, JSON.toJSON(extMap));</span></span>
<span class="line"><span>        logger.info(&quot;测试结果[实物商品]：{}&quot;, isSuccess);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (!isSuccess) throw new RuntimeException(&quot;实物商品发放失败&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String queryUserName(String uId) {</span></span>
<span class="line"><span>        return &quot;花花&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String queryUserPhoneNumber(String uId) {</span></span>
<span class="line"><span>        return &quot;13812341234&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3-第三方兑换卡-爱奇艺" tabindex="-1"><a class="header-anchor" href="#_3-第三方兑换卡-爱奇艺"><span>3.第三方兑换卡（爱奇艺）</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class CardCommodityService implements ICommodity {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(CardCommodityService.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 模拟注入</span></span>
<span class="line"><span>    private IQiYiCardService iQiYiCardService = new IQiYiCardService();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void sendCommodity(String uId, String commodityId, String bizId, Map&lt;String, String&gt; extMap) throws Exception {</span></span>
<span class="line"><span>        String mobile = queryUserMobile(uId);</span></span>
<span class="line"><span>        iQiYiCardService.grantToken(mobile, bizId);</span></span>
<span class="line"><span>        logger.info(&quot;请求参数[爱奇艺兑换卡] =&gt; uId：{} commodityId：{} bizId：{} extMap：{}&quot;, uId, commodityId, bizId, JSON.toJSON(extMap));</span></span>
<span class="line"><span>        logger.info(&quot;测试结果[爱奇艺兑换卡]：success&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String queryUserMobile(String uId) {</span></span>
<span class="line"><span>        return &quot;13812341234&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面代码实现中可以看到，每一种奖品的实现都包装到自己的类中，当新增、修改或删除逻辑时，都不会影响其他奖品功能的测试，可以降低回归测试和相应的连带风险。</p><ul><li>如果有新增的奖品，只需要按照此结构进行填充对应的实现类即可。这样的实现方式非常易于维护和扩展</li><li>在统一了入参及出参后，调用方不再需要关心奖品发放的内部逻辑，按照统一的方式即可处理。</li></ul><h5 id="创建商店工厂" tabindex="-1"><a class="header-anchor" href="#创建商店工厂"><span>创建商店工厂</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class StoreFactory {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 奖品类型方式实例化</span></span>
<span class="line"><span>     * @param commodityType 奖品类型</span></span>
<span class="line"><span>     * @return              实例化对象</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public ICommodity getCommodityService(Integer commodityType) {</span></span>
<span class="line"><span>        if (null == commodityType) return null;</span></span>
<span class="line"><span>        if (1 == commodityType) return new CouponCommodityService();</span></span>
<span class="line"><span>        if (2 == commodityType) return new GoodsCommodityService();</span></span>
<span class="line"><span>        if (3 == commodityType) return new CardCommodityService();</span></span>
<span class="line"><span>        throw new RuntimeException(&quot;不存在的奖品服务类型&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 奖品类信息方式实例化</span></span>
<span class="line"><span>     * @param clazz 奖品类</span></span>
<span class="line"><span>     * @return      实例化对象</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public ICommodity getCommodityService(Class&lt;? extends ICommodity&gt; clazz) throws IllegalAccessException, InstantiationException {</span></span>
<span class="line"><span>        if (null == clazz) return null;</span></span>
<span class="line"><span>        return clazz.newInstance();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这是一个商店的工厂实现类，里面提供了两种获取工厂实现类的方法：一种是依赖奖品类型，另一种是根据奖品类信息进行实例化。这两种方式都有自己的使用场景，按需选择即可。在第一种实现方式中用到了 if判断，这里既可以选择使用 switch语句，也可以使用map结构进行配置（key是类型值，value是具体的逻辑实现）。</li><li>通过商店工厂类获取各种奖品服务，可以非常干净、整洁地处理业务逻辑代码。后续新增的奖品按照这样的结构扩展即可。</li></ul><h5 id="测试类" tabindex="-1"><a class="header-anchor" href="#测试类"><span>测试类</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_StoreFactory_01() throws Exception {</span></span>
<span class="line"><span>        StoreFactory storeFactory = new StoreFactory();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 1. 优惠券</span></span>
<span class="line"><span>        ICommodity commodityService_1 = storeFactory.getCommodityService(1);</span></span>
<span class="line"><span>        commodityService_1.sendCommodity(&quot;10001&quot;, &quot;EGM1023938910232121323432&quot;, &quot;791098764902132&quot;, null);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 2. 实物商品</span></span>
<span class="line"><span>        ICommodity commodityService_2 = storeFactory.getCommodityService(2);</span></span>
<span class="line"><span>        commodityService_2.sendCommodity(&quot;10001&quot;, &quot;9820198721311&quot;, &quot;1023000020112221113&quot;, new HashMap&lt;String, String&gt;() {{
            put(&quot;consigneeUserName&quot;, &quot;张飞&quot;);
            put(&quot;consigneeUserPhone&quot;, &quot;13812341234&quot;);
            put(&quot;consigneeUserAddress&quot;, &quot;北京市昌平区&quot;);
        }});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 3. 第三方兑换卡(模拟爱奇艺)</span></span>
<span class="line"><span>        ICommodity commodityService_3 = storeFactory.getCommodityService(3);</span></span>
<span class="line"><span>        commodityService_3.sendCommodity(&quot;10001&quot;, &quot;AQY1xjkUodl8LO975GdfrYUio&quot;, null, null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_StoreFactory_02() throws Exception {</span></span>
<span class="line"><span>        StoreFactory storeFactory = new StoreFactory();</span></span>
<span class="line"><span>        // 1. 优惠券</span></span>
<span class="line"><span>        ICommodity commodityService = storeFactory.getCommodityService(CouponCommodityService.class);</span></span>
<span class="line"><span>        commodityService.sendCommodity(&quot;10001&quot;, &quot;EGM1023938910232121323432&quot;, &quot;791098764902132&quot;, null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+M+'" alt="image-20220531105144003"></p><p><img src="'+F+'" alt="image-20220531105258026"></p><ul><li>从运行结果可以看到，这两种获取工厂实现的接口都可以满足业务需求。在实际使用中按需选择即可</li><li>另外，从运行的测试结果也可以看出来，在进行封装后，这样一整套发放奖品服务有统一的入参、统一的结果。既提高了代码的结构性，也让工程易于维护和扩展。</li></ul><h4 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1"><span>总结：</span></a></h4><ul><li>从优化过程来看，工厂模式并不复杂。一旦理解和掌握，会发现它更加简单，同时也可以借助它提升开发效率。同时，不难总结出它的优点：避免创建者与具体的产品逻辑耦合；满足单一职责，每一个业务逻辑实现都在自己所属的类中完成；满足开闭原则，无须更改使用调用方就可以在程序中引入新的产品类型</li><li>当然，这也会带来一些问题，例如有非常多的奖品类型，实现的子类会极速扩张，因此需要使用其他的模式进行优化，这些在后续的设计模式中会逐步介绍</li></ul><h3 id="_3-2-单例设计模式" tabindex="-1"><a class="header-anchor" href="#_3-2-单例设计模式"><span>3.2 单例设计模式</span></a></h3><h4 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1"><span>概述：</span></a></h4><p><strong>单例模式</strong>是一种创建型设计模式， 让你能够保证一个类只有一个实例， 并提供一个访问该实例的全局节点。</p><p><img src="'+T+`" alt="image-20220530174159175"></p><p>在编程开发中经常会遇到这样⼀种场景，那就是需要保证⼀个类只有⼀个实例哪怕多线程同时访 问，并需要提供⼀个全局访问此实例的点。 综上以及我们平常的开发中，可以总结⼀条经验，单例模式主要解决的是，⼀个全局使⽤的类频繁的创 建和消费，从⽽提升提升整体的代码的性能</p><h4 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h4><ol><li>数据库的连接池不会反复创建</li><li>spring中⼀个单例模式bean的⽣成和使⽤</li><li>在我们平常的代码中需要设置全局的的⼀些属性保存</li></ol><p>在我们的⽇常开发中⼤致上会出现如上这些场景中使⽤到单例模式，虽然单例模式并不复杂但是使⽤⾯ 却⽐较⼴</p><h4 id="如何实现一个单例" tabindex="-1"><a class="header-anchor" href="#如何实现一个单例"><span>如何实现一个单例？</span></a></h4><p>单例模式的实现⽅式⽐较多，主要在实现上是否⽀持懒汉模式、是否线程安全中运⽤各项技巧。当然也 有⼀些场景不需要考虑懒加载也就是懒汉模式的情况，会直接使⽤ static 静态类或属性和⽅法的⽅式 进⾏处理，供外部调⽤。</p><p>概括起来，要实现一个单例，我们需要关注的点无外乎下面几个：</p><ul><li>构造函数需要是 private 访问权限的，这样才能避免外部通过 new 创建实例；</li><li>考虑对象创建时的线程安全问题；</li><li>考虑是否支持延迟加载；</li><li>考虑 getInstance() 性能是否高（是否加锁）</li></ul><h4 id="_0-静态类使用" tabindex="-1"><a class="header-anchor" href="#_0-静态类使用"><span>0. 静态类使用</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class Singleton_00 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static Map&lt;String,String&gt; cache = new ConcurrentHashMap&lt;String, String&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>以上这种⽅式在我们平常的业务开发中⾮常场常⻅，这样静态类的⽅式可以在第⼀次运⾏的时候直 接初始化Map类，同时这⾥我们也不需要到延迟加载在使⽤。</li><li>在不需要维持任何状态下，仅仅⽤于全局访问，这个使⽤使⽤静态类的⽅式更加⽅便。</li><li>但如果需要被继承以及需要维持⼀些特定状态的情况下，就适合使⽤单例模式。</li></ul><h4 id="_1-懒汉模式-线程不安全" tabindex="-1"><a class="header-anchor" href="#_1-懒汉模式-线程不安全"><span>1. 懒汉模式(线程不安全)</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class Singleton_01 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static Singleton_01 instance;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Singleton_01() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static Singleton_01 getInstance(){</span></span>
<span class="line"><span>        if (null != instance) return instance;</span></span>
<span class="line"><span>          instance =  new Singleton_01();</span></span>
<span class="line"><span>        return new Singleton_01();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>单例模式有⼀个特点就是不允许外部直接创建，也就是 new Singleton_01() ，因此这⾥在默认 的构造函数上添加了私有属性 private</li><li>⽬前此种⽅式的单例确实满足了懒加载，但是如果有多个访问者同时去获取对象实例你可以想象成 ⼀堆⼈在抢厕所，就会造成多个同样的实例并存，从⽽没有达到单例的要求</li></ul><h4 id="_2-懒汉模式-线程安全" tabindex="-1"><a class="header-anchor" href="#_2-懒汉模式-线程安全"><span>2. 懒汉模式(线程安全)</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class Singleton_02 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static Singleton_02 instance;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Singleton_02() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static synchronized Singleton_02 getInstance(){</span></span>
<span class="line"><span>        if (null != instance) return instance;</span></span>
<span class="line"><span>        return new Singleton_02();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>此种模式虽然是安全的，但由于把锁加到⽅法上后，所有的访问都因需要锁占⽤导致资源的浪费。 如果不是特殊情况下，不建议此种⽅式实现单例模式</li></ul><h4 id="_3-饿汉模式-线程安全" tabindex="-1"><a class="header-anchor" href="#_3-饿汉模式-线程安全"><span>3. 饿汉模式(线程安全)</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class Singleton_03 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static Singleton_03 instance = new Singleton_03();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Singleton_03() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static Singleton_03 getInstance() {</span></span>
<span class="line"><span>        return instance;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>此种⽅式与我们开头的第⼀个实例化 Map 基本⼀致，在程序启动的时候直接运⾏加载，后续有外 部需要使⽤的时候获取即可。</li><li>但此种⽅式并不是懒加载，也就是说⽆论你程序中是否⽤到这样的类都会在程序启动之初进⾏创 建。</li><li>那么这种⽅式导致的问题就像你下载个游戏软件，可能你游戏地图还没有打开呢，但是程序已经将 这些地图全部实例化。到你⼿机上最明显体验就⼀开游戏内存满了，⼿机卡了，需要换了。</li></ul><h4 id="_4-使用类的内部类-线程安全" tabindex="-1"><a class="header-anchor" href="#_4-使用类的内部类-线程安全"><span>4. 使⽤类的内部类(线程安全)</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class Singleton_04 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static class SingletonHolder {</span></span>
<span class="line"><span>        private static Singleton_04 instance = new Singleton_04();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Singleton_04() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static Singleton_04 getInstance() {</span></span>
<span class="line"><span>        return SingletonHolder.instance;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使⽤类的静态内部类实现的单例模式，既保证了线程安全有保证了懒加载，同时不会因为加锁的方式耗费性能。 这主要是因为JVM虚拟机可以保证多线程并发访问的正确性，也就是⼀个类的构造⽅法在多线程环境下可以被正确的加载。</li><li>此种方式也是非常推荐使⽤的⼀种单例模式</li></ul><h4 id="_5-双重锁校验-线程安全" tabindex="-1"><a class="header-anchor" href="#_5-双重锁校验-线程安全"><span>5. 双重锁校验(线程安全)</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class Singleton_05 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static Singleton_05 instance;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Singleton_05() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static Singleton_05 getInstance(){</span></span>
<span class="line"><span>       if(null != instance) return instance;</span></span>
<span class="line"><span>       synchronized (Singleton_05.class){</span></span>
<span class="line"><span>           if (null == instance){</span></span>
<span class="line"><span>               instance = new Singleton_05();</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>       return instance;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>双重锁的⽅式是⽅法级锁的优化，减少了部分获取实例的耗时，同时这种⽅式也满⾜了懒加载。</li></ul><h4 id="_6-cas「atomicreference」-线程安全" tabindex="-1"><a class="header-anchor" href="#_6-cas「atomicreference」-线程安全"><span>6.CAS「AtomicReference」(线程安全)</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class Singleton_06 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static final AtomicReference&lt;Singleton_06&gt; INSTANCE = new AtomicReference&lt;Singleton_06&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static Singleton_06 instance;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Singleton_06() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static final Singleton_06 getInstance() {</span></span>
<span class="line"><span>        for (; ; ) {</span></span>
<span class="line"><span>            Singleton_06 instance = INSTANCE.get();</span></span>
<span class="line"><span>            if (null != instance) return instance;</span></span>
<span class="line"><span>            INSTANCE.compareAndSet(null, new Singleton_06());</span></span>
<span class="line"><span>            return INSTANCE.get();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        System.out.println(Singleton_06.getInstance());</span></span>
<span class="line"><span>        System.out.println(Singleton_06.getInstance()); </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>java并发库提供了很多原⼦类来⽀持并发访问的数据安全 性； AtomicInteger 、 AtomicBoolean 、 AtomicLong 、 AtomicReference 。</li><li>AtomicReference 可以封装引⽤⼀个V实例，⽀持并发访问如上的单例⽅式就是使⽤了这样的⼀个 特点。</li><li>使⽤CAS的好处就是不需要使⽤传统的加锁⽅式保证线程安全，⽽是依赖于CAS的忙等算法，依赖 于底层硬件的实现，来保证线程安全。相对于其他锁的实现没有线程的切换和阻塞也就没有了额外 的开销，并且可以⽀持较⼤的并发性。</li><li>当然CAS也有⼀个缺点就是忙等，如果⼀直没有获取到将会处于死循环中。</li></ul><h4 id="_7-effective-java作者推荐的枚举单例-线程安全" tabindex="-1"><a class="header-anchor" href="#_7-effective-java作者推荐的枚举单例-线程安全"><span>7. Effective Java作者推荐的枚举单例(线程安全）</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public enum Singleton_07 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    INSTANCE;</span></span>
<span class="line"><span>    public void test(){</span></span>
<span class="line"><span>        System.out.println(&quot;hi~&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>约书亚·布洛克（英语：Joshua J. Bloch，1961年8⽉28⽇－），美国著名程序员。他为Java平台 设计并实作了许多的功能，曾担任Google的⾸席Java架构师（Chief Java Architect）。</p><ul><li>Effective Java 作者推荐使⽤枚举的⽅式解决单例模式，此种⽅式可能是平时最少⽤到的。</li><li>这种⽅式解决了最主要的；线程安全、⾃由串⾏化、单⼀实例</li></ul><p><strong>调用方式：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test() {</span></span>
<span class="line"><span>        Singleton_07.INSTANCE.test();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种写法虽然在功能上与共有域的方法接近，但是它更简洁。即使在面对复杂的串行化或反射攻击时，也无偿地提供了串行化机制，绝对防止对此实例化。虽然这种方式还没有被广泛采用，但是单元素的枚举类型已经成为实现Singleton的最佳方法。</p><p>同时，我们也要知道在存在继承的场景下，此种方式是不可用的</p><h4 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2"><span>总结</span></a></h4><p>单例模式只是一个很平常的模式，但在各种的实现上却需要用到Java的基本功，包括懒汉模式、饿汉模式、线程是否安全、静态类、内部类、加锁和串行化等。在日常开发中，如果可以确保此类是全局可用的，则不需要懒汉模式，那么直接创建并给外部调用即可。但如果有很多的类，有些需要在用户触发一定的条件后才显示，那么一定要用懒汉模式。对于线程的安全，可以按需选择。</p><h3 id="_3-3-建造者模式" tabindex="-1"><a class="header-anchor" href="#_3-3-建造者模式"><span>3.3 建造者模式</span></a></h3><h4 id="概述-2" tabindex="-1"><a class="header-anchor" href="#概述-2"><span>概述：</span></a></h4><p>建造者模式核心目的：就是通过将多个简单对象通过⼀步步的组装构建出⼀个复杂对象的过程。</p><p><img src="`+P+'" alt="image-20220531112535405"></p><p>那么，哪里有这样的场景呢？</p><p>例如，《王者荣耀》游戏的初始化界面有道路、树木、野怪和守卫塔等。换一个场景选择其他模式时，同样会建设道路、树木、野怪和守卫塔等，但是它们的摆放位置和大小各有不同。这种初始化游戏元素的场景就可以使用建造者模式。</p><p><img src="'+z+'" alt="image-20220610114526159"></p><p>这种根据相同的物料、不同的组装方式产生出具体内容，就是建造者模式的最终意图：即<strong>将一个复杂的构建与其表示分离，用同样的构建过程可以创建不同的表示。</strong></p><h4 id="装修套餐选配场景" tabindex="-1"><a class="header-anchor" href="#装修套餐选配场景"><span>装修套餐选配场景</span></a></h4><p>这里模拟房屋装修公司设计出一些不同风格样式的装修套餐场景，来体现建造者模式的使用方法</p><p><img src="'+O+`" alt="image-20220531113117582"></p><p>很多装修公司都会给出⾃家的套餐服务，⼀般有；欧式豪华、轻奢⽥园、现代简约等等，⽽这些套餐的 后⾯是不同的商品的组合。</p><p>例如；⼀级&amp;⼆级吊顶、多乐⼠涂料、圣象地板、⻢可波罗地砖等等，按照 不同的套餐的价格选取不同的品牌组合，最终再按照装修⾯积给出⼀个整体的报价</p><p>这⾥我们就模拟装修公司想推出⼀些套餐装修服务，按照不同的价格设定品牌选择组合，以达到使⽤建 造者模式的过程</p><h4 id="场景模拟工程" tabindex="-1"><a class="header-anchor" href="#场景模拟工程"><span>场景模拟工程</span></a></h4><h5 id="装修材料接口" tabindex="-1"><a class="header-anchor" href="#装修材料接口"><span>装修材料接口</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 装修物料</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public interface Matter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 场景；地板、地砖、涂料、吊顶</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    String scene();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 品牌</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    String brand();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 型号</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    String model();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 平米报价</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    BigDecimal price();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 描述</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    String desc();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="吊顶材料-ceiling" tabindex="-1"><a class="header-anchor" href="#吊顶材料-ceiling"><span>吊顶材料（ceiling）</span></a></h5><h6 id="_1-一级顶" tabindex="-1"><a class="header-anchor" href="#_1-一级顶"><span>1.一级顶</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class LevelOneCeiling implements Matter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String scene() {</span></span>
<span class="line"><span>        return &quot;吊顶&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String brand() {</span></span>
<span class="line"><span>        return &quot;装修公司自带&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String model() {</span></span>
<span class="line"><span>        return &quot;一级顶&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public BigDecimal price() {</span></span>
<span class="line"><span>        return new BigDecimal(260);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String desc() {</span></span>
<span class="line"><span>        return &quot;造型只做低一级，只有一个层次的吊顶，一般离顶120-150mm&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-二级顶" tabindex="-1"><a class="header-anchor" href="#_2-二级顶"><span>2.二级顶</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class LevelTwoCeiling  implements Matter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String scene() {</span></span>
<span class="line"><span>        return &quot;吊顶&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String brand() {</span></span>
<span class="line"><span>        return &quot;装修公司自带&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String model() {</span></span>
<span class="line"><span>        return &quot;二级顶&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public BigDecimal price() {</span></span>
<span class="line"><span>        return new BigDecimal(850);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String desc() {</span></span>
<span class="line"><span>        return &quot;两个层次的吊顶，二级吊顶高度一般就往下吊20cm，要是层高很高，也可增加每级的厚度&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="涂料-coat" tabindex="-1"><a class="header-anchor" href="#涂料-coat"><span>涂料(coat)</span></a></h5><h6 id="多乐士" tabindex="-1"><a class="header-anchor" href="#多乐士"><span>多乐士</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 涂料</span></span>
<span class="line"><span> * 品牌；多乐士(Dulux)</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class DuluxCoat  implements Matter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String scene() {</span></span>
<span class="line"><span>        return &quot;涂料&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String brand() {</span></span>
<span class="line"><span>        return &quot;多乐士(Dulux)&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String model() {</span></span>
<span class="line"><span>        return &quot;第二代&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public BigDecimal price() {</span></span>
<span class="line"><span>        return new BigDecimal(719);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String desc() {</span></span>
<span class="line"><span>        return &quot;多乐士是阿克苏诺贝尔旗下的著名建筑装饰油漆品牌，产品畅销于全球100个国家，每年全球有5000万户家庭使用多乐士油漆。&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="立邦" tabindex="-1"><a class="header-anchor" href="#立邦"><span>立邦</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 涂料</span></span>
<span class="line"><span> * 品牌；立邦</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class LiBangCoat implements Matter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String scene() {</span></span>
<span class="line"><span>        return &quot;涂料&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String brand() {</span></span>
<span class="line"><span>        return &quot;立邦&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String model() {</span></span>
<span class="line"><span>        return &quot;默认级别&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public BigDecimal price() {</span></span>
<span class="line"><span>        return new BigDecimal(650);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String desc() {</span></span>
<span class="line"><span>        return &quot;立邦始终以开发绿色产品、注重高科技、高品质为目标，以技术力量不断推进科研和开发，满足消费者需求。&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="地板-floor" tabindex="-1"><a class="header-anchor" href="#地板-floor"><span>地板(floor)</span></a></h5><h6 id="德尔-der" tabindex="-1"><a class="header-anchor" href="#德尔-der"><span>德尔(Der)</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 地板</span></span>
<span class="line"><span> * 品牌；德尔(Der)</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class DerFloor implements Matter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String scene() {</span></span>
<span class="line"><span>        return &quot;地板&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String brand() {</span></span>
<span class="line"><span>        return &quot;德尔(Der)&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String model() {</span></span>
<span class="line"><span>        return &quot;A+&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public BigDecimal price() {</span></span>
<span class="line"><span>        return new BigDecimal(119);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String desc() {</span></span>
<span class="line"><span>        return &quot;DER德尔集团是全球领先的专业木地板制造商，北京2008年奥运会家装和公装地板供应商&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="圣象" tabindex="-1"><a class="header-anchor" href="#圣象"><span>圣象</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 地板</span></span>
<span class="line"><span> * 品牌：圣象</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class ShengXiangFloor implements Matter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String scene() {</span></span>
<span class="line"><span>        return &quot;地板&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String brand() {</span></span>
<span class="line"><span>        return &quot;圣象&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String model() {</span></span>
<span class="line"><span>        return &quot;一级&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public BigDecimal price() {</span></span>
<span class="line"><span>        return new BigDecimal(318);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String desc() {</span></span>
<span class="line"><span>        return &quot;圣象地板是中国地板行业著名品牌。圣象地板拥有中国驰名商标、中国名牌、国家免检、中国环境标志认证等多项荣誉。&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>地砖材料（tile）</p><h6 id="_1-东鹏" tabindex="-1"><a class="header-anchor" href="#_1-东鹏"><span>1.东鹏</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 地砖</span></span>
<span class="line"><span> * 品牌：东鹏瓷砖</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class DongPengTile implements Matter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String scene() {</span></span>
<span class="line"><span>        return &quot;地砖&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String brand() {</span></span>
<span class="line"><span>        return &quot;东鹏瓷砖&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String model() {</span></span>
<span class="line"><span>        return &quot;10001&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public BigDecimal price() {</span></span>
<span class="line"><span>        return new BigDecimal(102);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String desc() {</span></span>
<span class="line"><span>        return &quot;东鹏瓷砖以品质铸就品牌，科技推动品牌，口碑传播品牌为宗旨，2014年品牌价值132.35亿元，位列建陶行业榜首。&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-马可波罗-marco-polo" tabindex="-1"><a class="header-anchor" href="#_2-马可波罗-marco-polo"><span>2.马可波罗(MARCO POLO)</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 地砖</span></span>
<span class="line"><span> * 品牌；马可波罗(MARCO POLO)</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class MarcoPoloTile implements Matter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String scene() {</span></span>
<span class="line"><span>        return &quot;地砖&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String brand() {</span></span>
<span class="line"><span>        return &quot;马可波罗(MARCO POLO)&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String model() {</span></span>
<span class="line"><span>        return &quot;缺省&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public BigDecimal price() {</span></span>
<span class="line"><span>        return new BigDecimal(140);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String desc() {</span></span>
<span class="line"><span>        return &quot;“马可波罗”品牌诞生于1996年，作为国内最早品牌化的建陶品牌，以“文化陶瓷”占领市场，享有“仿古砖至尊”的美誉。&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是本次装修公司所提供的装修配置单，接下来会通过不同的物料组合出不同的服务套餐。</p><h4 id="违背设计模式实现-1" tabindex="-1"><a class="header-anchor" href="#违背设计模式实现-1"><span>违背设计模式实现</span></a></h4><p>没有if…else解决不了的逻辑，不行就再加一行！ 这里先使用不加设计的方式实现功能，之后再通过设计模式优化完善。一般使用这种实现方式的代码都会集中在一个类中，里面包含大量的if…else逻辑。既不具有复杂的代码结构，也不具有良好的扩展性。如果应对非常简单的业务，还是可以使用的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class DecorationPackageController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getMatterList(BigDecimal area, Integer level) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;Matter&gt; list = new ArrayList&lt;Matter&gt;(); // 装修清单</span></span>
<span class="line"><span>        BigDecimal price = BigDecimal.ZERO;          // 装修价格</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 豪华欧式</span></span>
<span class="line"><span>        if (1 == level) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            LevelTwoCeiling levelTwoCeiling = new LevelTwoCeiling(); // 吊顶，二级顶</span></span>
<span class="line"><span>            DuluxCoat duluxCoat = new DuluxCoat();                   // 涂料，多乐士</span></span>
<span class="line"><span>            ShengXiangFloor shengXiangFloor = new ShengXiangFloor(); // 地板，圣象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            list.add(levelTwoCeiling);</span></span>
<span class="line"><span>            list.add(duluxCoat);</span></span>
<span class="line"><span>            list.add(shengXiangFloor);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            price = price.add(area.multiply(new BigDecimal(&quot;0.2&quot;)).multiply(levelTwoCeiling.price()));</span></span>
<span class="line"><span>            price = price.add(area.multiply(new BigDecimal(&quot;1.4&quot;)).multiply(duluxCoat.price()));</span></span>
<span class="line"><span>            price = price.add(area.multiply(shengXiangFloor.price()));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 轻奢田园</span></span>
<span class="line"><span>        if (2 == level) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            LevelTwoCeiling levelTwoCeiling = new LevelTwoCeiling(); // 吊顶，二级顶</span></span>
<span class="line"><span>            LiBangCoat liBangCoat = new LiBangCoat();                // 涂料，立邦</span></span>
<span class="line"><span>            MarcoPoloTile marcoPoloTile = new MarcoPoloTile();       // 地砖，马可波罗</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            list.add(levelTwoCeiling);</span></span>
<span class="line"><span>            list.add(liBangCoat);</span></span>
<span class="line"><span>            list.add(marcoPoloTile);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            price = price.add(area.multiply(new BigDecimal(&quot;0.2&quot;)).multiply(levelTwoCeiling.price()));</span></span>
<span class="line"><span>            price = price.add(area.multiply(new BigDecimal(&quot;1.4&quot;)).multiply(liBangCoat.price()));</span></span>
<span class="line"><span>            price = price.add(area.multiply(marcoPoloTile.price()));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 现代简约</span></span>
<span class="line"><span>        if (3 == level) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            LevelOneCeiling levelOneCeiling = new LevelOneCeiling();  // 吊顶，二级顶</span></span>
<span class="line"><span>            LiBangCoat liBangCoat = new LiBangCoat();                 // 涂料，立邦</span></span>
<span class="line"><span>            DongPengTile dongPengTile = new DongPengTile();           // 地砖，东鹏</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            list.add(levelOneCeiling);</span></span>
<span class="line"><span>            list.add(liBangCoat);</span></span>
<span class="line"><span>            list.add(dongPengTile);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            price = price.add(area.multiply(new BigDecimal(&quot;0.2&quot;)).multiply(levelOneCeiling.price()));</span></span>
<span class="line"><span>            price = price.add(area.multiply(new BigDecimal(&quot;1.4&quot;)).multiply(liBangCoat.price()));</span></span>
<span class="line"><span>            price = price.add(area.multiply(dongPengTile.price()));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        StringBuilder detail = new StringBuilder(&quot;\\r\\n-------------------------------------------------------\\r\\n&quot; +</span></span>
<span class="line"><span>                &quot;装修清单&quot; + &quot;\\r\\n&quot; +</span></span>
<span class="line"><span>                &quot;套餐等级：&quot; + level + &quot;\\r\\n&quot; +</span></span>
<span class="line"><span>                &quot;套餐价格：&quot; + price.setScale(2, BigDecimal.ROUND_HALF_UP) + &quot; 元\\r\\n&quot; +</span></span>
<span class="line"><span>                &quot;房屋面积：&quot; + area.doubleValue() + &quot; 平米\\r\\n&quot; +</span></span>
<span class="line"><span>                &quot;材料清单：\\r\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (Matter matter: list) {</span></span>
<span class="line"><span>            detail.append(matter.scene()).append(&quot;：&quot;).append(matter.brand()).append(&quot;、&quot;).append(matter.model()).append(&quot;、平米价格：&quot;).append(matter.price()).append(&quot; 元。\\n&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return detail.toString();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>首先，这段代码要解决的问题是接收入参：房屋面积（area）、装修等级（level），根据不同类型的装修等级选择不同的材料。</li><li>其次，在实现过程中可以看到每一段if代码块中包含着不同的材料（吊顶为二级顶；涂料为立邦；地砖为马可波罗），最终生成装修清单和装修价格。</li><li>最后，提供获取装修详细信息的方法，返回给调用方，便于客户了解装修清单</li></ul><h5 id="编写测试类" tabindex="-1"><a class="header-anchor" href="#编写测试类"><span>编写测试类：</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_DecorationPackageController(){</span></span>
<span class="line"><span>        DecorationPackageController decoration = new DecorationPackageController();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 豪华欧式</span></span>
<span class="line"><span>        System.out.println(decoration.getMatterList(new BigDecimal(&quot;132.52&quot;),1));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 轻奢田园</span></span>
<span class="line"><span>        System.out.println(decoration.getMatterList(new BigDecimal(&quot;98.25&quot;),2));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 现代简约</span></span>
<span class="line"><span>        System.out.println(decoration.getMatterList(new BigDecimal(&quot;85.43&quot;),3));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>-------------------------------------------------------</span></span>
<span class="line"><span>装修清单</span></span>
<span class="line"><span>套餐等级：1</span></span>
<span class="line"><span>套餐价格：198064.39 元</span></span>
<span class="line"><span>房屋面积：132.52 平米</span></span>
<span class="line"><span>材料清单：</span></span>
<span class="line"><span>吊顶：装修公司自带、二级顶、平米价格：850 元。</span></span>
<span class="line"><span>涂料：多乐士(Dulux)、第二代、平米价格：719 元。</span></span>
<span class="line"><span>地板：圣象、一级、平米价格：318 元。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>-------------------------------------------------------</span></span>
<span class="line"><span>装修清单</span></span>
<span class="line"><span>套餐等级：2</span></span>
<span class="line"><span>套餐价格：119865.00 元</span></span>
<span class="line"><span>房屋面积：98.25 平米</span></span>
<span class="line"><span>材料清单：</span></span>
<span class="line"><span>吊顶：装修公司自带、二级顶、平米价格：850 元。</span></span>
<span class="line"><span>涂料：立邦、默认级别、平米价格：650 元。</span></span>
<span class="line"><span>地砖：马可波罗(MARCO POLO)、缺省、平米价格：140 元。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>-------------------------------------------------------</span></span>
<span class="line"><span>装修清单</span></span>
<span class="line"><span>套餐等级：3</span></span>
<span class="line"><span>套餐价格：90897.52 元</span></span>
<span class="line"><span>房屋面积：85.43 平米</span></span>
<span class="line"><span>材料清单：</span></span>
<span class="line"><span>吊顶：装修公司自带、一级顶、平米价格：260 元。</span></span>
<span class="line"><span>涂料：立邦、默认级别、平米价格：650 元。</span></span>
<span class="line"><span>地砖：东鹏瓷砖、10001、平米价格：102 元。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到输出的结果，已经有装修公司提供的报价单的感觉了。虽然以上这段使用if…else方式实现的代码可以满足些许功能，但随着公司业务的快速发展，会针对不同的户型提供更多的套餐。这段实现代码将迅速扩增到几千行，甚至不断地修改，最终难以维护</p><h4 id="建造者模式重构代码" tabindex="-1"><a class="header-anchor" href="#建造者模式重构代码"><span>建造者模式重构代码</span></a></h4><p>接下来使⽤建造者模式来进⾏代码优化，也算是⼀次很⼩的重构。</p><p>在软件系统开发中，有时会面临一个<strong>复杂对象</strong>的创建工作，其通常由各个部分的子对象用一定过程构建出来，随着需求的迭代，这个复杂对象的各个部分经常面临重大的变化，但是将它们组合在一起的过程却相对稳定，这种场景就适合用建造者模式。</p><p>这里会把构建的过程交给<strong>创建者类</strong>，而创建者通过使用构建工具包构建出不同的装修套餐。</p><h5 id="建造者模式结构" tabindex="-1"><a class="header-anchor" href="#建造者模式结构"><span>建造者模式结构</span></a></h5><p><img src="`+R+`" alt="image-20220531115942432"></p><p>建造者模式代码工程有三个核心类，这三个核心类是建造者模式的具体实现。与使用if…else判断方式实现逻辑相比，它额外新增了两个类，具体功能如下：</p><ul><li>Builder：建造者类具体的各种组装，都由此类实现。</li><li>DecorationPackageMenu：是IMenu接口的实现类，主要承载建造过程中的填充器，相当于一套承载物料和创建者中间衔接的内容。</li></ul><h5 id="定义装修包接口" tabindex="-1"><a class="header-anchor" href="#定义装修包接口"><span>定义装修包接⼝</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface IMenu {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 吊顶</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    IMenu appendCeiling(Matter matter);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 涂料</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    IMenu appendCoat(Matter matter);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 地板</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    IMenu appendFloor(Matter matter);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 地砖</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    IMenu appendTile(Matter matter);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 明细</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    String getDetail();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接⼝类中定义了填充各项物料的方法； 吊顶 、 涂料 、 地板 、 地砖 ，以及最终提供获取全部明细 的方法。</p><h5 id="实现装修包接口" tabindex="-1"><a class="header-anchor" href="#实现装修包接口"><span>实现装修包接口</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 装修包</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class DecorationPackageMenu implements IMenu {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private List&lt;Matter&gt; list = new ArrayList&lt;Matter&gt;();  // 装修清单</span></span>
<span class="line"><span>    private BigDecimal price = BigDecimal.ZERO;      // 装修价格</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private BigDecimal area;  // 面积</span></span>
<span class="line"><span>    private String grade;     // 装修等级；豪华欧式、轻奢田园、现代简约</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private DecorationPackageMenu() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public DecorationPackageMenu(Double area, String grade) {</span></span>
<span class="line"><span>        this.area = new BigDecimal(area);</span></span>
<span class="line"><span>        this.grade = grade;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public IMenu appendCeiling(Matter matter) {</span></span>
<span class="line"><span>        list.add(matter);</span></span>
<span class="line"><span>        price = price.add(area.multiply(new BigDecimal(&quot;0.2&quot;)).multiply(matter.price()));</span></span>
<span class="line"><span>        return this;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public IMenu appendCoat(Matter matter) {</span></span>
<span class="line"><span>        list.add(matter);</span></span>
<span class="line"><span>        price = price.add(area.multiply(new BigDecimal(&quot;1.4&quot;)).multiply(matter.price()));</span></span>
<span class="line"><span>        return this;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public IMenu appendFloor(Matter matter) {</span></span>
<span class="line"><span>        list.add(matter);</span></span>
<span class="line"><span>        price = price.add(area.multiply(matter.price()));</span></span>
<span class="line"><span>        return this;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public IMenu appendTile(Matter matter) {</span></span>
<span class="line"><span>        list.add(matter);</span></span>
<span class="line"><span>        price = price.add(area.multiply(matter.price()));</span></span>
<span class="line"><span>        return this;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getDetail() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        StringBuilder detail = new StringBuilder(&quot;\\r\\n-------------------------------------------------------\\r\\n&quot; +</span></span>
<span class="line"><span>                &quot;装修清单&quot; + &quot;\\r\\n&quot; +</span></span>
<span class="line"><span>                &quot;套餐等级：&quot; + grade + &quot;\\r\\n&quot; +</span></span>
<span class="line"><span>                &quot;套餐价格：&quot; + price.setScale(2, BigDecimal.ROUND_HALF_UP) + &quot; 元\\r\\n&quot; +</span></span>
<span class="line"><span>                &quot;房屋面积：&quot; + area.doubleValue() + &quot; 平米\\r\\n&quot; +</span></span>
<span class="line"><span>                &quot;材料清单：\\r\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (Matter matter: list) {</span></span>
<span class="line"><span>            detail.append(matter.scene()).append(&quot;：&quot;).append(matter.brand()).append(&quot;、&quot;).append(matter.model()).append(&quot;、平米价格：&quot;).append(matter.price()).append(&quot; 元。\\n&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return detail.toString();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在装修包的实现中，每一种方法都返回了this对象本身，可以非常方便地用于连续填充各种物料。同时，在填充时也会根据物料计算相应面积的报价，吊顶和涂料按照面积乘以单价计算。最后，同样提供了统一的获取装修清单的明细方法</p><h5 id="建造者类创建" tabindex="-1"><a class="header-anchor" href="#建造者类创建"><span>建造者类创建</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class Builder {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public IMenu levelOne(Double area) {</span></span>
<span class="line"><span>        return new DecorationPackageMenu(area, &quot;豪华欧式&quot;)</span></span>
<span class="line"><span>                .appendCeiling(new LevelTwoCeiling())    // 吊顶，二级顶</span></span>
<span class="line"><span>                .appendCoat(new DuluxCoat())             // 涂料，多乐士</span></span>
<span class="line"><span>                .appendFloor(new ShengXiangFloor());     // 地板，圣象</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public IMenu levelTwo(Double area){</span></span>
<span class="line"><span>        return new DecorationPackageMenu(area, &quot;轻奢田园&quot;)</span></span>
<span class="line"><span>                .appendCeiling(new LevelTwoCeiling())   // 吊顶，二级顶</span></span>
<span class="line"><span>                .appendCoat(new LiBangCoat())           // 涂料，立邦</span></span>
<span class="line"><span>                .appendTile(new MarcoPoloTile());       // 地砖，马可波罗</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public IMenu levelThree(Double area){</span></span>
<span class="line"><span>        return new DecorationPackageMenu(area, &quot;现代简约&quot;)</span></span>
<span class="line"><span>                .appendCeiling(new LevelOneCeiling())   // 吊顶，二级顶</span></span>
<span class="line"><span>                .appendCoat(new LiBangCoat())           // 涂料，立邦</span></span>
<span class="line"><span>                .appendTile(new DongPengTile());        // 地砖，东鹏</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，在建造者的使用中就已经非常容易了。统一的建造方式通过不同物料填充出不同的装修风格：豪华欧式、轻奢田园和现代简约。如果公司扩展业务，也可以将这部分内容配置到数据库中自动生成，但整体过程仍然可以使用建造者模式的思想进行搭建。</p><h5 id="测试验证" tabindex="-1"><a class="header-anchor" href="#测试验证"><span>测试验证</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_Builder(){</span></span>
<span class="line"><span>        Builder builder = new Builder();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 豪华欧式</span></span>
<span class="line"><span>        System.out.println(builder.levelOne(132.52D).getDetail());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 轻奢田园</span></span>
<span class="line"><span>        System.out.println(builder.levelTwo(98.25D).getDetail());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 现代简约</span></span>
<span class="line"><span>        System.out.println(builder.levelThree(85.43D).getDetail());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>-------------------------------------------------------</span></span>
<span class="line"><span>装修清单</span></span>
<span class="line"><span>套餐等级：豪华欧式</span></span>
<span class="line"><span>套餐价格：198064.39 元</span></span>
<span class="line"><span>房屋面积：132.52 平米</span></span>
<span class="line"><span>材料清单：</span></span>
<span class="line"><span>吊顶：装修公司自带、二级顶、平米价格：850 元。</span></span>
<span class="line"><span>涂料：多乐士(Dulux)、第二代、平米价格：719 元。</span></span>
<span class="line"><span>地板：圣象、一级、平米价格：318 元。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>-------------------------------------------------------</span></span>
<span class="line"><span>装修清单</span></span>
<span class="line"><span>套餐等级：轻奢田园</span></span>
<span class="line"><span>套餐价格：119865.00 元</span></span>
<span class="line"><span>房屋面积：98.25 平米</span></span>
<span class="line"><span>材料清单：</span></span>
<span class="line"><span>吊顶：装修公司自带、二级顶、平米价格：850 元。</span></span>
<span class="line"><span>涂料：立邦、默认级别、平米价格：650 元。</span></span>
<span class="line"><span>地砖：马可波罗(MARCO POLO)、缺省、平米价格：140 元。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>-------------------------------------------------------</span></span>
<span class="line"><span>装修清单</span></span>
<span class="line"><span>套餐等级：现代简约</span></span>
<span class="line"><span>套餐价格：90897.52 元</span></span>
<span class="line"><span>房屋面积：85.43 平米</span></span>
<span class="line"><span>材料清单：</span></span>
<span class="line"><span>吊顶：装修公司自带、一级顶、平米价格：260 元。</span></span>
<span class="line"><span>涂料：立邦、默认级别、平米价格：650 元。</span></span>
<span class="line"><span>地砖：东鹏瓷砖、10001、平米价格：102 元。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果是⼀样的，调⽤⽅式也基本类似。但是⽬前的代码结构却可以让你很⽅便的很有调理的进 ⾏扩展业务开发。</p><p>⽽不是以往⼀样把所有代码都写到 ifelse ⾥⾯。</p><h4 id="总结-3" tabindex="-1"><a class="header-anchor" href="#总结-3"><span>总结</span></a></h4><ul><li>通过上面对建造者模式的使用，可以总结出选择该设计模式的条件：当一些基本材料不变，而其组合经常变化时。</li><li>此设计模式满足了单一职责原则及可复用的技术，建造者独立、易扩展、便于控制细节风险。出现特别多的物料及组合时，类的不断扩展也会造成难以维护的问题。但这种设计模式可以把重复的内容抽象到数据库中，按照需要配置，减少大量的重复代码</li></ul><h2 id="_4-结构型模式" tabindex="-1"><a class="header-anchor" href="#_4-结构型模式"><span>4. 结构型模式</span></a></h2><h3 id="_4-1-适配器模式" tabindex="-1"><a class="header-anchor" href="#_4-1-适配器模式"><span>4.1 适配器模式</span></a></h3><h4 id="概述-3" tabindex="-1"><a class="header-anchor" href="#概述-3"><span>概述：</span></a></h4><p>适配器模式的主要作用是把原本不兼容的接口通过适配修改做到统一，方便调用方使用</p><p><img src="`+U+'" alt="image-20220531123424307"></p><p>就像日常生活中用到的万能充电器、数据线和笔记本的转换接头，它们都为适配各种不同的接口进行了兼容</p><p><img src="'+N+'" alt="image-20220531123523553"></p><p>在业务开发中，经常需要做不同接口的兼容，尤其是中台服务。中台需要把各个业务线的类型服务统一包装，再对外提供接口</p><h4 id="mq消息体兼容场景" tabindex="-1"><a class="header-anchor" href="#mq消息体兼容场景"><span>MQ消息体兼容场景</span></a></h4><p>随着公司业务的不断扩展，基础架构系统逐步成型，业务运营就需要开始做新用户的拉新和老用户的促活，从而保障DAU的增速，以及最终实现ROI转换</p><p><img src="'+j+`" alt="image-20220531123647106"></p><p>这时就需要做一些营销系统，常见的有裂变、拉客，如邀请一位用户开户，或者邀请一位用户下单，平台就会返利，并且多邀多得。同时，随着拉新量的增多，平台开始设置每月首单返现等奖励。</p><p>开发这样一个营销系统就会遇到各种各样的MQ消息或接口，如果逐个开发，会耗费很高的成本，同时后期的扩展也有一定的难度。此时会希望有一个系统，配置后就能把外部的MQ接入，这些MQ就像上面提到的注册开户消息、商品下单消息等。而适配器的思想也恰恰可以运用在这里。需要强调的是，适配器不只可以适配接口，还可以适配一些属性信息</p><h4 id="场景模拟工程-1" tabindex="-1"><a class="header-anchor" href="#场景模拟工程-1"><span>场景模拟工程</span></a></h4><h5 id="注册开户mq" tabindex="-1"><a class="header-anchor" href="#注册开户mq"><span>注册开户MQ</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class create_account {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String number;      // 开户编号</span></span>
<span class="line"><span>    private String address;     // 开户地</span></span>
<span class="line"><span>    private Date accountDate;   // 开户时间</span></span>
<span class="line"><span>    private String desc;        // 开户描述</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在注册开户MQ消息体中，提供了四个核心属性：开户编号、开户地、开户时间和开户描述。</p><h5 id="内部订单mq" tabindex="-1"><a class="header-anchor" href="#内部订单mq"><span>内部订单MQ</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class OrderMq {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String uid;           // 用户ID</span></span>
<span class="line"><span>    private String sku;           // 商品</span></span>
<span class="line"><span>    private String orderId;       // 订单ID</span></span>
<span class="line"><span>    private Date createOrderTime; // 下单时间</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在内部订单MQ的消息体中，提供了四个核心属性：用户ID、商品编号、订单ID和下单时间。</p><h5 id="第三方订单mq" tabindex="-1"><a class="header-anchor" href="#第三方订单mq"><span>第三方订单MQ</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class POPOrderDelivered {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String uId;     // 用户ID</span></span>
<span class="line"><span>    private String orderId; // 订单号</span></span>
<span class="line"><span>    private Date orderTime; // 下单时间</span></span>
<span class="line"><span>    private Date sku;       // 商品</span></span>
<span class="line"><span>    private Date skuName;   // 商品名称</span></span>
<span class="line"><span>    private BigDecimal decimal; // 金额</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在第三方订单MQ的消息体中，提供了六个核心属性：用户ID、订单号、下单时间、商品编号、商品名称和商品金额</p><h5 id="查询用户内部下单数量接口" tabindex="-1"><a class="header-anchor" href="#查询用户内部下单数量接口"><span>查询用户内部下单数量接口</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class OrderService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(POPOrderService.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public long queryUserOrderCount(String userId){</span></span>
<span class="line"><span>        logger.info(&quot;自营商家，查询用户的订单是否为首单：{}&quot;, userId);</span></span>
<span class="line"><span>        return 10L;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个接口主要用于查询用户在内部商家的下单数量。</p><h5 id="查询用户第三方下单首单接口" tabindex="-1"><a class="header-anchor" href="#查询用户第三方下单首单接口"><span>查询用户第三方下单首单接口</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class POPOrderService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(POPOrderService.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public boolean isFirstOrder(String uId) {</span></span>
<span class="line"><span>        logger.info(&quot;POP商家，查询用户的订单是否为首单：{}&quot;, uId);</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个接口主要用于查询第三方订单是否为首单。</p><p>以上几项是不同的MQ及其接口的实现，后面将给这些MQ消息和接口做相应的适配，使程序的调用逻辑达到统一。</p><h4 id="违背设计模式实现-2" tabindex="-1"><a class="header-anchor" href="#违背设计模式实现-2"><span>违背设计模式实现</span></a></h4><p>其实在大部分时候，各种MQ消息都在创建一个类用于消费，将它的MQ消息属性转换给自己的方法。</p><p>接下来同样先给出这种方式的实现过程，但是这里存在一个很大的问题：当MQ消息越来越多时，甚至达到几十个、几百个MQ消息后，中台服务应如何优化呢？</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class create_accountMqService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void onMessage(String message) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        create_account mq = JSON.parseObject(message, create_account.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        mq.getNumber();</span></span>
<span class="line"><span>        mq.getAccountDate();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // ... 处理自己的业务</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class OrderMqService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void onMessage(String message) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        OrderMq mq = JSON.parseObject(message, OrderMq.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        mq.getUid();</span></span>
<span class="line"><span>        mq.getOrderId();</span></span>
<span class="line"><span>        mq.getCreateOrderTime();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // ... 处理自己的业务</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class POPOrderDeliveredService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void onMessage(String message) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        POPOrderDelivered mq = JSON.parseObject(message, POPOrderDelivered.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        mq.getuId();</span></span>
<span class="line"><span>        mq.getOrderId();</span></span>
<span class="line"><span>        mq.getOrderTime();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // ... 处理自己的业务</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这三组MQ的消费类都是一样的，从这里也能看到它们的字段在使用上有一些相似。研发人员能够针对不规则的需求，按照统一的标准处理，降低开发成本，提高研发效率。</p><h4 id="使用适配器模式重构代码" tabindex="-1"><a class="header-anchor" href="#使用适配器模式重构代码"><span>使用适配器模式重构代码</span></a></h4><p>适配器模式要解决的主要问题就是多种差异化类型的接⼝做统⼀输出，这在我们学习⼯⼚⽅法模式中也 有所提到不同种类的奖品处理，其实那也是适配器的应⽤。</p><p>在本⽂中我们还会再另外体现出⼀个多种MQ接收，使⽤MQ的场景。来把不同类型的消息做统⼀的处 理，便于减少后续对MQ接收</p><p><img src="`+Q+`" alt="image-20220531142806602"></p><ul><li>这⾥包括了两个类型的适配；接⼝适配、MQ适配。之所以不只是模拟接⼝适配，因为很多时候⼤ 家都很常⻅了，所以把适配的思想换⼀下到MQ消息体上，增加⼤家多设计模式的认知。</li><li>先是做MQ适配，接收各种各样的MQ消息。当业务发展的很快，需要对下单⽤户⾸单才给奖励， 在这样的场景下再增加对接⼝的适配操作</li></ul><h5 id="统一的mq消息体" tabindex="-1"><a class="header-anchor" href="#统一的mq消息体"><span>统⼀的MQ消息体</span></a></h5><p>为了满足产品功能的需求，提取此项功能中必须的字段信息，单独创建一个类RebateInfo。后续所有的MQ信息都需要提供这些属性。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class RebateInfo {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String userId;  // 用户ID</span></span>
<span class="line"><span>    private String bizId;   // 业务ID</span></span>
<span class="line"><span>    private Date bizTime;   // 业务时间</span></span>
<span class="line"><span>    private String desc;    // 业务描述</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MQ消息中会有多种多样的类型属性，虽然它们都同样提供给使用方，但是如果都这样接入，那么当 MQ 消息特别多时就会很耗时。所以，在这个案例中定义了通用的 MQ消息体，后续把所有接入进来的消息进行统一的处理。</p><h5 id="mq消息统一适配类" tabindex="-1"><a class="header-anchor" href="#mq消息统一适配类"><span>MQ消息统一适配类</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class MQAdapter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static RebateInfo filter(String strJson, Map&lt;String, String&gt; link) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {</span></span>
<span class="line"><span>        return filter(JSON.parseObject(strJson, Map.class), link);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static RebateInfo filter(Map obj, Map&lt;String, String&gt; link) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {</span></span>
<span class="line"><span>        RebateInfo rebateInfo = new RebateInfo();</span></span>
<span class="line"><span>        for (String key : link.keySet()) {</span></span>
<span class="line"><span>            Object val = obj.get(link.get(key));</span></span>
<span class="line"><span>            RebateInfo.class.getMethod(&quot;set&quot; + key.substring(0, 1).toUpperCase() + key.substring(1), String.class).invoke(rebateInfo, val.toString());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return rebateInfo;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这个类里的方法非常重要，主要用于把不同类型的MQ中的各种属性映射成需要的属性并返回。就像一个属性中有用户ID uId，将其映射到需要的userId，做统一处理。</li><li>而这个处理过程需要把映射管理传递给Map&lt;String，String&gt;link，也就是准确地描述了当前MQ中某个属性名称，映射为指定的某个属性名称。</li><li>最终接收到的MQ消息基本是JSON格式，可以转换为MAP结构。最后，使用反射调用的方式对类型赋值。</li></ul><h5 id="测试适配类" tabindex="-1"><a class="header-anchor" href="#测试适配类"><span>测试适配类</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_MQAdapter() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, ParseException {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        SimpleDateFormat s = new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);</span></span>
<span class="line"><span>        Date parse = s.parse(&quot;2020-06-01 23:20:16&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        create_account create_account = new create_account();</span></span>
<span class="line"><span>        create_account.setNumber(&quot;100001&quot;);</span></span>
<span class="line"><span>        create_account.setAddress(&quot;河北省.廊坊市.广阳区.大学里职业技术学院&quot;);</span></span>
<span class="line"><span>        create_account.setAccountDate(parse);</span></span>
<span class="line"><span>        create_account.setDesc(&quot;在校开户&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        HashMap&lt;String, String&gt; link01 = new HashMap&lt;String, String&gt;();</span></span>
<span class="line"><span>        link01.put(&quot;userId&quot;, &quot;number&quot;);</span></span>
<span class="line"><span>        link01.put(&quot;bizId&quot;, &quot;number&quot;);</span></span>
<span class="line"><span>        link01.put(&quot;bizTime&quot;, &quot;accountDate&quot;);</span></span>
<span class="line"><span>        link01.put(&quot;desc&quot;, &quot;desc&quot;);</span></span>
<span class="line"><span>        RebateInfo rebateInfo01 = MQAdapter.filter(create_account.toString(), link01);</span></span>
<span class="line"><span>        System.out.println(&quot;mq.create_account(适配前)&quot; + create_account.toString());</span></span>
<span class="line"><span>        System.out.println(&quot;mq.create_account(适配后)&quot; + JSON.toJSONString(rebateInfo01));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(&quot;&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        OrderMq orderMq = new OrderMq();</span></span>
<span class="line"><span>        orderMq.setUid(&quot;100001&quot;);</span></span>
<span class="line"><span>        orderMq.setSku(&quot;10928092093111123&quot;);</span></span>
<span class="line"><span>        orderMq.setOrderId(&quot;100000890193847111&quot;);</span></span>
<span class="line"><span>        orderMq.setCreateOrderTime(parse);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        HashMap&lt;String, String&gt; link02 = new HashMap&lt;String, String&gt;();</span></span>
<span class="line"><span>        link02.put(&quot;userId&quot;, &quot;uid&quot;);</span></span>
<span class="line"><span>        link02.put(&quot;bizId&quot;, &quot;orderId&quot;);</span></span>
<span class="line"><span>        link02.put(&quot;bizTime&quot;, &quot;createOrderTime&quot;);</span></span>
<span class="line"><span>        RebateInfo rebateInfo02 = MQAdapter.filter(orderMq.toString(), link02);</span></span>
<span class="line"><span>        System.out.println(&quot;mq.orderMq(适配前)&quot; + orderMq.toString());</span></span>
<span class="line"><span>        System.out.println(&quot;mq.orderMq(适配后)&quot; + JSON.toJSONString(rebateInfo02));</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里分别模拟传入了两个不同的MQ消息，并设置字段的映射关系。在实际业务开发场景中，可以把这种映射配置关系交给配置文件或数据库后台，以减少编码。</p><p><strong>测试结果</strong></p><p><img src="`+J+'" alt="image-20220531144232978"></p><p>可以看到，同样的字段值在实现适配前后，分别有统一的字段属性，开发时也就非常的简单了。另外，有一个非常重要的地方，除了反射的使用，还可以加入代理类，把映射的配置交给代理类，不需要手动创建类的每一个MQ。</p><h4 id="总结-4" tabindex="-1"><a class="header-anchor" href="#总结-4"><span>总结</span></a></h4><p>可以看出，即使不使用适配器模式，也可以实现这些功能。但是使用了适配器模式可以让代码更干净、整洁，减少大量重复的判断和使用，同时也让代码更易于维护和扩展。尤其对于MQ等多种消息体中有不同属性的同类值（abc=&quot;123&quot;、def=&quot;123&quot;），进行适配再加上代理类，就可以使用简单的配置方式接入对方提供的MQ消息，而不需要重复地开发，非常利于扩展。</p><h3 id="_4-2-装饰器模式" tabindex="-1"><a class="header-anchor" href="#_4-2-装饰器模式"><span>4.2 装饰器模式</span></a></h3><h4 id="概述-4" tabindex="-1"><a class="header-anchor" href="#概述-4"><span>概述：</span></a></h4><p><strong>装饰器模式</strong>是一种结构型设计模式， 允许你通过将对象放入包含行为的特殊封装对象中来为原对象绑定新的行为。</p><p><img src="'+H+'" alt="image-20220531145132383"></p><p>装饰器模式就像俄罗斯套娃，它的核心是在<strong>不改变原有类的基础上给类新增功能</strong>。对于不改变原有类，可能有的人会想到继承、AOP 切面，虽然这些方式都可以实现，但是使用装饰器模式是另外一种更灵活的思路，能够避免继承导致的子类过多问题，也可以避免AOP带来的复杂性问题</p><p>很多熟悉的场景都用到了装饰器模式，例如是否熟悉 new BufferedReader（new FileReader（&quot;&quot;））；这段代码？大家在学习Java开发的字节流、字符流和文件流的内容时都见到过，一层嵌套一层，字节流转字符流等。这就是使用装饰器模式的一种体现</p><h4 id="单点登录场景模拟" tabindex="-1"><a class="header-anchor" href="#单点登录场景模拟"><span>单点登录场景模拟</span></a></h4><p>本案例模拟一个单点登录权限功能扩充的场景</p><p><img src="'+G+`" alt="image-20220531145329859"></p><p>在业务开发的初期，往往运营人员使用的是 ERP 系统，只需要登录账户验证即可，验证通过后即可访问 ERP 的所有资源。但随着业务的不断发展，团队里开始出现专门的运营人员、营销人员和数据人员，每类人员对ERP的使用需求不同，有些需要创建活动，有些只是查看数据。同时，为了保证数据的安全，不会让每位运营人员都有最高的权限。</p><p>那么，以往使用的 SSO 是一个组件化通用的服务，不能在里面添加需要的用户访问验证功能。这时就可以使用装饰器模式扩充原有的单点登录服务，同时也保证原有功能不受破坏，可以继续使用。</p><h4 id="场景模拟工程-2" tabindex="-1"><a class="header-anchor" href="#场景模拟工程-2"><span>场景模拟工程</span></a></h4><h5 id="模拟spring的handlerinterceptor" tabindex="-1"><a class="header-anchor" href="#模拟spring的handlerinterceptor"><span>模拟Spring的HandlerInterceptor</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface HandlerInterceptor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    boolean preHandle(String request, String response, Object handler);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际的单点登录开发会基于 org.springframework.web.servlet.HandlerInterceptor 实现。这里为了减少对Spring包的引入，自己实现一个这样的功能类。</p><h5 id="模拟单点登录功能" tabindex="-1"><a class="header-anchor" href="#模拟单点登录功能"><span>模拟单点登录功能</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class SsoInterceptor implements HandlerInterceptor{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public boolean preHandle(String request, String response, Object handler) {</span></span>
<span class="line"><span>        // 模拟获取cookie</span></span>
<span class="line"><span>        String ticket = request.substring(1, 8);</span></span>
<span class="line"><span>        // 模拟校验</span></span>
<span class="line"><span>        return ticket.equals(&quot;success&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这里的模拟实现非常简单，只是截取字符串，在实际使用时，需要从HttpServletRequest request对象中获取cookie信息，解析ticket值并校验。在返回的里面也非常简单，只要获取到了 success，就认为是允许登录。实际的业务代码会更加复杂，这里只是简单模拟了整个过程，方便学习</li></ul><h4 id="违背设计模式实现-3" tabindex="-1"><a class="header-anchor" href="#违背设计模式实现-3"><span>违背设计模式实现</span></a></h4><p>继承类的实现方式是一种比较通用的方式，通过继承后重写方法，并将逻辑覆盖进去。对于一些简单的且不需要持续维护和扩展的场景，此种方式的实现并不会有什么问题，也不会导致子类过多</p><h5 id="loginssodecorator" tabindex="-1"><a class="header-anchor" href="#loginssodecorator"><span>LoginSsoDecorator</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class LoginSsoDecorator extends SsoInterceptor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static Map&lt;String, String&gt; authMap = new ConcurrentHashMap&lt;String, String&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        authMap.put(&quot;huahua&quot;, &quot;queryUserInfo&quot;);</span></span>
<span class="line"><span>        authMap.put(&quot;doudou&quot;, &quot;queryUserInfo&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public boolean preHandle(String request, String response, Object handler) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 模拟获取cookie</span></span>
<span class="line"><span>        String ticket = request.substring(1, 8);</span></span>
<span class="line"><span>        // 模拟校验</span></span>
<span class="line"><span>        boolean success = ticket.equals(&quot;success&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (!success) return false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String userId = request.substring(8);</span></span>
<span class="line"><span>        String method = authMap.get(userId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 模拟方法校验</span></span>
<span class="line"><span>        return &quot;queryUserInfo&quot;.equals(method);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这部分代码的实现方式是通过继承类后重写方法，将个人可访问方法的功能添加到方法中。这段代码比较清晰，如果面对比较复杂的业务流程，代码就会很变得混乱。注意，这里已经设定好两个可以访问的用户ID：huahua、doudou，会在测试中使用。</p><h5 id="测试验证-1" tabindex="-1"><a class="header-anchor" href="#测试验证-1"><span>测试验证</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_LoginSsoDecorator() {</span></span>
<span class="line"><span>        LoginSsoDecorator ssoDecorator = new LoginSsoDecorator();</span></span>
<span class="line"><span>        String request = &quot;1successhuahua&quot;;</span></span>
<span class="line"><span>        boolean success = ssoDecorator.preHandle(request, &quot;ewcdqwt40liuiu&quot;, &quot;t&quot;);</span></span>
<span class="line"><span>        System.out.println(&quot;登录校验：&quot; + request + (success ? &quot; 放行&quot; : &quot; 拦截&quot;));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里模拟的内容相当于登录过程中的校验操作，判断用户是否可登录以及是否可访问方法。</p><p><strong>测试结果：</strong></p><p><img src="`+V+'" alt="image-20220531150626670"></p><h4 id="装饰器模式重构代码" tabindex="-1"><a class="header-anchor" href="#装饰器模式重构代码"><span>装饰器模式重构代码</span></a></h4><p>装饰器主要解决的是直接继承时因功能的不断横向扩展导致子类膨胀的问题，而使用装饰器模式比直接继承更加灵活，同时也不再需要维护子类。 在装饰器模式中，有四点比较重要：</p><ul><li>抽象构件角色（Component）：定义抽象接口；</li><li>具体构件角色（ConcreteComponent）：实现抽象接口，可以是一组；</li><li>具体装饰角色（ConcreteDecorator）：扩展装饰具体的实现逻辑。</li></ul><p>通过以上四种实现装饰器模式，主要核心内容会体现在抽象类的定义和实现方面。</p><h5 id="装饰器模式模型结构" tabindex="-1"><a class="header-anchor" href="#装饰器模式模型结构"><span>装饰器模式模型结构</span></a></h5><p><img src="'+Y+`" alt="image-20220531151900807"></p><ul><li>以上是⼀个装饰器实现的类图结构，重点的类是 SsoDecorator ，这个类是⼀个抽象类主要完成 了对接⼝ HandlerInterceptor 继承。</li><li>当装饰⻆⾊继承接⼝后会提供构造函数，⼊参就是继承的接⼝实现类即可，这样就可以很⽅便的扩 展出不同功能组件</li></ul><h5 id="抽象类装饰角色" tabindex="-1"><a class="header-anchor" href="#抽象类装饰角色"><span>抽象类装饰角色</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public abstract class SsoDecorator implements HandlerInterceptor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private HandlerInterceptor handlerInterceptor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private SsoDecorator(){}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public SsoDecorator(HandlerInterceptor handlerInterceptor) {</span></span>
<span class="line"><span>        this.handlerInterceptor = handlerInterceptor;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public boolean preHandle(String request, String response, Object handler) {</span></span>
<span class="line"><span>        return handlerInterceptor.preHandle(request, response, handler);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在装饰类中，有三点需要注意：继承了处理接口，提供了构造函数，覆盖了方法preHandle。以上三点是装饰器模式的核心处理部分，可以替换对子类继承的方式，实现逻辑功能的扩展。</p><h5 id="装饰角色逻辑实现" tabindex="-1"><a class="header-anchor" href="#装饰角色逻辑实现"><span>装饰角色逻辑实现</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class LoginSsoDecorator extends SsoDecorator {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(LoginSsoDecorator.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static Map&lt;String, String&gt; authMap = new ConcurrentHashMap&lt;String, String&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        authMap.put(&quot;huahua&quot;, &quot;queryUserInfo&quot;);</span></span>
<span class="line"><span>        authMap.put(&quot;doudou&quot;, &quot;queryUserInfo&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public LoginSsoDecorator(HandlerInterceptor handlerInterceptor) {</span></span>
<span class="line"><span>        super(handlerInterceptor);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public boolean preHandle(String request, String response, Object handler) {</span></span>
<span class="line"><span>        boolean success = super.preHandle(request, response, handler);</span></span>
<span class="line"><span>        if (!success) return false;</span></span>
<span class="line"><span>        String userId = request.substring(8);</span></span>
<span class="line"><span>        String method = authMap.get(userId);</span></span>
<span class="line"><span>        logger.info(&quot;模拟单点登录方法访问拦截校验：{} {}&quot;, userId, method);</span></span>
<span class="line"><span>        // 模拟方法校验</span></span>
<span class="line"><span>        return &quot;queryUserInfo&quot;.equals(method);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在具体的装饰类实现中，继承了装饰类 SsoDecorator，现在可以扩展方法 preHandle的功能。在具体的实现代码中可以看到，这里只关心扩展部分的功能，同时不会影响原有类的核心服务，也不会因为使用继承方式而导致出现多余子类，增加了整体的灵活性。</p><h5 id="测试验证-2" tabindex="-1"><a class="header-anchor" href="#测试验证-2"><span>测试验证</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_LoginSsoDecorator() {</span></span>
<span class="line"><span>        LoginSsoDecorator ssoDecorator = new LoginSsoDecorator(new SsoInterceptor());</span></span>
<span class="line"><span>        String request = &quot;1successhuahua&quot;;</span></span>
<span class="line"><span>        boolean success = ssoDecorator.preHandle(request, &quot;ewcdqwt40liuiu&quot;, &quot;t&quot;);</span></span>
<span class="line"><span>        System.out.println(&quot;登录校验：&quot; + request + (success ? &quot; 放行&quot; : &quot; 拦截&quot;));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里测试了装饰器模式的使用，通过将原有单点登录类new SsoInterceptor（）传递给装饰器，让装饰器可以执行扩充的功能。同时，传递者和装饰器都可以是多组的。</p><p>在实际的业务开发中，往往由于有太多类型的子类要实现，导致不易于维护，可以使用装饰器模式替代</p><p><strong>测试结果</strong></p><p><img src="`+W+'" alt="image-20220531153450542"></p><ul><li>测试结果符合预期，扩展了对方法拦截的校验性。</li></ul><h4 id="总结-5" tabindex="-1"><a class="header-anchor" href="#总结-5"><span>总结</span></a></h4><ul><li>使⽤装饰器模式满⾜单⼀职责原则，你可以在⾃⼰的装饰类中完成功能逻辑的扩展，⽽不影响主类，同时可以按需在运行时添加和删除这部分逻辑。另外，装饰器模式和继承父类重写方法在某些时候要按需选择，并非某个方式就是最好的</li><li>装饰器模式实现的重点是对抽象类继承接口方式的使用，同时设定被继承的接口可以通过构造函数传递其实现类，由此增加扩展性，并重写方法中可以通过父类实现的功能。</li><li>装饰器模式就像夏天热时穿短裤，冬天冷时穿棉裤，下雨时穿雨衣一样，我们本身并没有被改变，而外形却用不同的服饰表现</li></ul><h3 id="_4-3-代理模式" tabindex="-1"><a class="header-anchor" href="#_4-3-代理模式"><span>4.3 代理模式</span></a></h3><h4 id="概述-5" tabindex="-1"><a class="header-anchor" href="#概述-5"><span>概述：</span></a></h4><p><strong>代理模式</strong>是一种结构型设计模式， 让你能够提供对象的替代品或其占位符。 代理控制着对于原对象的访问， 并允许在将请求提交给对象前后进行一些处理。</p><p><img src="'+Z+'" alt="image-20220531154203800"></p><p>经纪人负责演员的日常对接事务，就像代理一样。代理模式就是为了方便访问某些资源，使对象类更加易用，从而在操作上使用的代理服务。</p><p><img src="'+X+'" alt="image-20220531154351928"></p><p>代理模式经常会出现在系统或组件中，它们提供一种非常简单易用的方式，控制原本需要编写很多代码才能实现的服务类。</p><p>类似以下场景：</p><ul><li>在数据库访问层面会提供一个比较基础的应用，避免在对应用服务扩容时造成数据库连接数暴增。</li><li>使用过的一些中间件，例如RPC框架，在拿到jar包对接口的描述后，中间件会在服务启动时生成对应的代理类。当调用接口时，实际是通过代理类发出的 Socket信息。</li><li>常用的MyBatis基本功能是定义接口，不需要写实现类就可以对XML或自定义注解里的SQL语句增删改查</li></ul><h4 id="mybatis-spring中代理类场景" tabindex="-1"><a class="header-anchor" href="#mybatis-spring中代理类场景"><span>MyBatis-Spring中代理类场景</span></a></h4><p>当使用MyBatis时，只需要定义接口，而不需要写实现类就可以完成增删改查操作。</p><p>接下来会通过代理类交给Spring管理的过程介绍代理类模式。</p><p><img src="'+K+'" alt="image-20220531154642231"></p><h4 id="代理类模式实现过程" tabindex="-1"><a class="header-anchor" href="#代理类模式实现过程"><span>代理类模式实现过程</span></a></h4><p>接下来介绍如何用代理类模式实现在 MyBatis 中对类的代理，也就是只需定义接口，就可以关联到方法注解中的SQL语句，完成对数据库的操作。这里需要先掌握一些知识点：</p><ul><li>BeanDefinitionRegistryPostProcessor：Spring的接口类用于处理对Bean的定义注册。</li><li>GenericBeanDefinition：用于定义 Bean 的信息，与在 MyBatis-Spring 中使用的ScannedGenericBeanDefinition 略有不同。</li><li>FactoryBean：用于处理Bean工厂的类，该类很常见。</li></ul><p><strong>代理模式中间件模型结构</strong></p><p><img src="'+$+`" alt="image-20220531155341579"></p><p>左侧对应的是功能的使用，右侧对应的是中间件的实现部分。此模型虽然涉及的类并不多，但都是抽离出来的核心处理类，以上代码主要做的事情是将类的代理注册到Spring中，把对象Bean交给 Spring 管理，也就起到了“代理”的作用</p><h5 id="自定义注解" tabindex="-1"><a class="header-anchor" href="#自定义注解"><span>自定义注解</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>@Documented</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>@Target({ElementType.METHOD})</span></span>
<span class="line"><span>public @interface Select {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    String value() default &quot;&quot;; // sql语句</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里定义了一个模拟 MyBatis-Spring 中的自定义注解，用在方法层面</p><h5 id="dao层接口" tabindex="-1"><a class="header-anchor" href="#dao层接口"><span>Dao层接口</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface IUserDao {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Select(&quot;select userName from user where id = #{uId}&quot;)</span></span>
<span class="line"><span>    String queryUserInfo(String uId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义一个Dao层接口，并添加自定义注解，与MyBatis组件是一样的。现在是准备工作部分，后面开始实现中间件功能。</p><h5 id="代理类定义" tabindex="-1"><a class="header-anchor" href="#代理类定义"><span>代理类定义</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class MapperFactoryBean&lt;T&gt; implements FactoryBean&lt;T&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(MapperFactoryBean.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Class&lt;T&gt; mapperInterface;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public MapperFactoryBean(Class&lt;T&gt; mapperInterface) {</span></span>
<span class="line"><span>        this.mapperInterface = mapperInterface;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public T getObject() throws Exception {</span></span>
<span class="line"><span>        InvocationHandler handler = (proxy, method, args) -&gt; {</span></span>
<span class="line"><span>            Select select = method.getAnnotation(Select.class);</span></span>
<span class="line"><span>            logger.info(&quot;SQL：{}&quot;, select.value().replace(&quot;#{uId}&quot;, args[0].toString()));</span></span>
<span class="line"><span>            return args[0] + &quot; 设计模式！&quot;;</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        return (T) Proxy.newProxyInstance(this.getClass().getClassLoader(), new Class[]{mapperInterface}, handler);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Class&lt;?&gt; getObjectType() {</span></span>
<span class="line"><span>        return mapperInterface;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public boolean isSingleton() {</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在MyBatis源码，可以看到MapperFactoryBean类。我们也模拟一个这种类，在里面实现对代理类的定义。</li><li>通过继承 FactoryBean，提供对象 Bean，也就是方法TgetObject（）。</li><li>在方法 getObject（） 中提供类的代理，并模拟对 SQL 语句的处理，这里包含了当用户调用 Dao 层方法时的处理逻辑。</li><li>还有最上面提供构造函数透传需要被代理的类ClassmapperInterface，在MyBatis中也使用这种方式透传。</li><li>另外，getObjectType（） 提供对象类型反馈，且 isSingleton（） 返回类是单例的。</li></ul><h5 id="将bean定义注册到spring容器" tabindex="-1"><a class="header-anchor" href="#将bean定义注册到spring容器"><span>将Bean定义注册到Spring容器</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class RegisterBeanFactory implements BeanDefinitionRegistryPostProcessor {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void postProcessBeanDefinitionRegistry(BeanDefinitionRegistry registry) throws BeansException {</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        GenericBeanDefinition beanDefinition = new GenericBeanDefinition();</span></span>
<span class="line"><span>        beanDefinition.setBeanClass(MapperFactoryBean.class);</span></span>
<span class="line"><span>        beanDefinition.setScope(&quot;singleton&quot;);</span></span>
<span class="line"><span>        beanDefinition.getConstructorArgumentValues().addGenericArgumentValue(IUserDao.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        BeanDefinitionHolder definitionHolder = new BeanDefinitionHolder(beanDefinition, &quot;userDao&quot;);</span></span>
<span class="line"><span>        BeanDefinitionReaderUtils.registerBeanDefinition(definitionHolder, registry);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void postProcessBeanFactory(ConfigurableListableBeanFactory configurableListableBeanFactory) throws BeansException {</span></span>
<span class="line"><span>        // left intentionally blank</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将代理的Bean交给Spring容器管理，可以非常方便地获取代理的对象Bean。这部分是Spring中关于一个对象Bean 注册过程的源码</p><h5 id="配置文件spring-config" tabindex="-1"><a class="header-anchor" href="#配置文件spring-config"><span>配置文件spring-config</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;</span></span>
<span class="line"><span>       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.0.xsd&quot;</span></span>
<span class="line"><span>       default-autowire=&quot;byName&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;bean id=&quot;userDao&quot; class=&quot;com.itheima.design.agent.RegisterBeanFactory&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/beans&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来在配置文件中添加Bean配置，在MyBatis中一般会配置扫描的Dao层包，这样就可以减少这部分的配置</p><h5 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试"><span>单元测试</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(ApiTest.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_IUserDao() {</span></span>
<span class="line"><span>        BeanFactory beanFactory = new ClassPathXmlApplicationContext(&quot;spring-config.xml&quot;);</span></span>
<span class="line"><span>        IUserDao userDao = beanFactory.getBean(&quot;userDao&quot;, IUserDao.class);</span></span>
<span class="line"><span>        String res = userDao.queryUserInfo(&quot;100001&quot;);</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, res);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试的过程比较简单，通过加载Bean工厂，获取代理类的实例对象，之后调用方法并返回结果。可以看到，接口 IUserDao 没有一个硬编码的实现类，而是使用代理的方式给接口生成一个实现类，并交给Spring管理。</p><p><strong>测试结果</strong></p><p><img src="`+ss+'" alt="image-20220531160711146"></p><p>从测试结果可以看到打印了 SQL 语句，这部分语句是从自定义注解中获取的 select userName from user where id=100001，并做了简单的适配。在 MyBatis 框架中会交给SqlSession 的实现类进行逻辑处理，并将最终执行的 SQL 结果数据返回到数据库</p><h4 id="总结-6" tabindex="-1"><a class="header-anchor" href="#总结-6"><span>总结</span></a></h4><p>代理模式适合场景：</p><p>延迟初始化 （虚拟代理）。 如果你有一个偶尔使用的重量级服务对象， 一直保持该对象运行会消耗系统资源时， 可使用代理模式。</p><p>本地执行远程服务 （远程代理）。 适用于服务对象位于远程服务器上的情形。</p><p>记录日志请求 （日志记录代理）。 适用于当你需要保存对于服务对象的请求历史记录时。</p><p>代理模式的设计方式可以让代码更加整洁、干净，易于维护，虽然在这部分开发过程中额外增加了很多类，但是这种中间件的复用性极高，也更加智能，也可以非常方便地扩展到各种服务应用中</p><h2 id="_5-行为模式" tabindex="-1"><a class="header-anchor" href="#_5-行为模式"><span>5. 行为模式</span></a></h2><h3 id="_5-1-责任链模式" tabindex="-1"><a class="header-anchor" href="#_5-1-责任链模式"><span>5.1 责任链模式</span></a></h3><h4 id="概述-6" tabindex="-1"><a class="header-anchor" href="#概述-6"><span>概述：</span></a></h4><p><strong>责任链模式</strong>是一种行为设计模式， 允许你将请求沿着处理者链进行发送。 收到请求后， 每个处理者均可对请求进行处理， 或将其传递给链上的下个处理者。</p><p><img src="'+ns+'" alt="image-20220531163411507"></p><p>责任链模式的核心是解决一组服务中的先后执行关系，就像出差借款需要审批，5000元以下直接找部门领导、分管领导、财务部门审批，5000 元以上需要找更高一级的领导审批。</p><h4 id="系统上线审批场景" tabindex="-1"><a class="header-anchor" href="#系统上线审批场景"><span>系统上线审批场景</span></a></h4><p>模拟在“618”大促期间，各大电商平台的业务系统上线审批流程的场景，如图所示</p><p><img src="'+is+`" alt="image-20220531163527689"></p><p>电商平台在“618”大促期间都会做一些运营活动，所有开发的这些系统都需要陆续上线。当临近大促时，会有一些紧急的需求需要上线，为了保障线上系统的稳定性，会相应地增强审批力度，就像一级响应、二级响应一样。</p><p>在审批的过程中，在特定时间点会加入不同级别的负责人，每位负责人就像责任链模式中的一个核心点。研发人员并不需要关心具体的审批流程处理细节，只需要知道审批上线更严格、级别也更高。</p><p>接下来模拟一个业务场景，使用责任链的设计模式实现此功能。</p><h4 id="场景模拟工程-3" tabindex="-1"><a class="header-anchor" href="#场景模拟工程-3"><span>场景模拟工程</span></a></h4><h5 id="模拟审批服务" tabindex="-1"><a class="header-anchor" href="#模拟审批服务"><span>模拟审批服务</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 模拟审核服务</span></span>
<span class="line"><span> * 1. auth          审核流程</span></span>
<span class="line"><span> * 2. queryAuthInfo 查询审核信息(时间)</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class AuthService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static Map&lt;String, Date&gt; authMap = new ConcurrentHashMap&lt;String, Date&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static Date queryAuthInfo(String uId, String orderId) {</span></span>
<span class="line"><span>        return authMap.get(uId.concat(orderId));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void auth(String uId, String orderId) {</span></span>
<span class="line"><span>        authMap.put(uId.concat(orderId), new Date());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 这里提供了两个接口，一个是查询审批结果 queryAuthInfo，另一个是处理审批auth。这部分是把由谁审批和审批的单子ID作为唯一的Key值，记录在内存Map结构中。</p><h4 id="违背设计模式实现-4" tabindex="-1"><a class="header-anchor" href="#违背设计模式实现-4"><span>违背设计模式实现</span></a></h4><p>按照场景需求审批流程，平常系统上线时只需要三级负责人审批就可以，但是到了“618”大促期间，就需要二级负责人及一级负责人一起加入审批系统。这里使用非常直接的if判断方式实现这种需求</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class AuthController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private SimpleDateFormat f = new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);// 时间格式化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public AuthInfo doAuth(String uId, String orderId, Date authDate) throws ParseException {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 三级审批</span></span>
<span class="line"><span>        Date date = AuthService.queryAuthInfo(&quot;1000013&quot;, orderId);</span></span>
<span class="line"><span>        if (null == date) return new AuthInfo(&quot;0001&quot;, &quot;单号：&quot;, orderId, &quot; 状态：待三级审批负责人 &quot;, &quot;王工&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 二级审批</span></span>
<span class="line"><span>        if (authDate.after(f.parse(&quot;2020-06-01 00:00:00&quot;)) &amp;&amp; authDate.before(f.parse(&quot;2020-06-25 23:59:59&quot;))) {</span></span>
<span class="line"><span>            date = AuthService.queryAuthInfo(&quot;1000012&quot;, orderId);</span></span>
<span class="line"><span>            if (null == date) return new AuthInfo(&quot;0001&quot;, &quot;单号：&quot;, orderId, &quot; 状态：待二级审批负责人 &quot;, &quot;张经理&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 一级审批</span></span>
<span class="line"><span>        if (authDate.after(f.parse(&quot;2020-06-11 00:00:00&quot;)) &amp;&amp; authDate.before(f.parse(&quot;2020-06-20 23:59:59&quot;))) {</span></span>
<span class="line"><span>            date = AuthService.queryAuthInfo(&quot;1000011&quot;, orderId);</span></span>
<span class="line"><span>            if (null == date) return new AuthInfo(&quot;0001&quot;, &quot;单号：&quot;, orderId, &quot; 状态：待一级审批负责人 &quot;, &quot;段总&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return new AuthInfo(&quot;0001&quot;, &quot;单号：&quot;, orderId, &quot; 状态：审批完成&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码从上到下分别对在指定时间范围内由不同的人员审批进行了判断，就像大促期间上线时需要三位负责人都审批才允许系统上线一样。这种功能看起来很简单，但在实际的业务中会有很多部门逻辑。如果按这样实现就很难进行扩展，并且改动扩展时也非常麻烦</p><h5 id="测试验证-3" tabindex="-1"><a class="header-anchor" href="#测试验证-3"><span>测试验证</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(ApiTest.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_AuthController() throws ParseException {</span></span>
<span class="line"><span>        AuthController authController = new AuthController();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 模拟三级负责人审批</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, JSON.toJSONString(authController.doAuth(&quot;zimu&quot;, &quot;1000998004813441&quot;, new Date())));</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, &quot;模拟三级负责人审批，王工&quot;);</span></span>
<span class="line"><span>        AuthService.auth(&quot;1000013&quot;, &quot;1000998004813441&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 模拟二级负责人审批</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, JSON.toJSONString(authController.doAuth(&quot;zimu&quot;, &quot;1000998004813441&quot;, new Date())));</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, &quot;模拟二级负责人审批，张经理&quot;);</span></span>
<span class="line"><span>        AuthService.auth(&quot;1000012&quot;, &quot;1000998004813441&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 模拟一级负责人审批</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, JSON.toJSONString(authController.doAuth(&quot;zimu&quot;, &quot;1000998004813441&quot;, new Date())));</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, &quot;模拟一级负责人审批，段总&quot;);</span></span>
<span class="line"><span>        AuthService.auth(&quot;1000011&quot;, &quot;1000998004813441&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, &quot;审批完成&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里模拟每次查询是否审批已完成，随着审批的节点不同，之后由不同的负责人操作。authController.doAuth是查看审批的流程节点，AuthService.auth是审批方法用于操作节点流程状态。</p><p>测试结果：</p><p><img src="`+as+'" alt="image-20220531165449126"></p><p>从测试结果可以看到，不同人员进行审批，审批完成后交给下一个人处理。单看结果是满足需求的，只不过很难扩展和调整流程，相当于把代码写“死”了。</p><h4 id="责任链模式重构代码" tabindex="-1"><a class="header-anchor" href="#责任链模式重构代码"><span>责任链模式重构代码</span></a></h4><p>责任链模式可以让各个服务模块更加清晰，而每一个模块间通过 next 的方式获取。而每一个next是由继承的统一抽象类实现的。最终，所有类的职责可以动态地编排使用，编排的过程可以做成可配置化的。</p><p><img src="'+es+`" alt="image-20220531165606647"></p><ul><li>上图是这个业务模型中责任链结构的核⼼部分，通过三个实现了统⼀抽象类 AuthLink 的不同规 则，再进⾏责任编排模拟出⼀条链路。这个链路就是业务中的责任链。</li><li>⼀般在使⽤责任链时候如果是场景⽐较固定，可以通过写死到代码中进⾏初始化。但如果业务场景 经常变化可以做成xml配置的⽅式进⾏处理，也可以落到库⾥进⾏初始化操作。</li></ul><h5 id="责任链中返回对象定义" tabindex="-1"><a class="header-anchor" href="#责任链中返回对象定义"><span>责任链中返回对象定义</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class AuthInfo {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String code;</span></span>
<span class="line"><span>    private String info = &quot;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public AuthInfo(String code, String ...infos) {</span></span>
<span class="line"><span>        this.code = code;</span></span>
<span class="line"><span>        for (String str:infos){</span></span>
<span class="line"><span>            this.info = this.info.concat(str);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个类的作用是包装责任链处理过程中返回结果的类，方便处理每个责任链的返回信息。</p><h5 id="链路抽象类定义" tabindex="-1"><a class="header-anchor" href="#链路抽象类定义"><span>链路抽象类定义</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 审核规定；</span></span>
<span class="line"><span> * 1. 601-610 三级审批 + 二级审批</span></span>
<span class="line"><span> * 2. 611-620 三级审批 + 二级审批 + 一级审批</span></span>
<span class="line"><span> * 3. 其他时间 三级审批</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public abstract class AuthLink {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    protected Logger logger = LoggerFactory.getLogger(AuthLink.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    protected SimpleDateFormat f = new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);// 时间格式化</span></span>
<span class="line"><span>    protected String levelUserId;                           // 级别人员ID</span></span>
<span class="line"><span>    protected String levelUserName;                         // 级别人员姓名</span></span>
<span class="line"><span>    private AuthLink next;                                  // 责任链</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public AuthLink(String levelUserId, String levelUserName) {</span></span>
<span class="line"><span>        this.levelUserId = levelUserId;</span></span>
<span class="line"><span>        this.levelUserName = levelUserName;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public AuthLink next() {</span></span>
<span class="line"><span>        return next;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public AuthLink appendNext(AuthLink next) {</span></span>
<span class="line"><span>        this.next = next;</span></span>
<span class="line"><span>        return this;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public abstract AuthInfo doAuth(String uId, String orderId, Date authDate);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这部分是责任链链接起来的核心部分。AuthLink next的重点在于可以通过next方式获取下一个链路需要处理的节点。</li><li>levelUserId、levelUserName 是责任链中的公用信息，标记每一个审批节点的人员信息。</li><li>抽象类中定义了一个抽象方法abstract AuthInfo doAuth，是每一个实现者必须实现的类，不同的审批级别人员处理不同的业务</li></ul><h5 id="三个审核实现类" tabindex="-1"><a class="header-anchor" href="#三个审核实现类"><span>三个审核实现类</span></a></h5><h6 id="_1-level1authlink" tabindex="-1"><a class="header-anchor" href="#_1-level1authlink"><span>1.Level1AuthLink</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 一级负责人</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class Level1AuthLink extends AuthLink {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Date beginDate = f.parse(&quot;2020-06-11 00:00:00&quot;);</span></span>
<span class="line"><span>    private Date endDate = f.parse(&quot;2020-06-20 23:59:59&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Level1AuthLink(String levelUserId, String levelUserName) throws ParseException {</span></span>
<span class="line"><span>        super(levelUserId, levelUserName);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public AuthInfo doAuth(String uId, String orderId, Date authDate) {</span></span>
<span class="line"><span>        Date date = AuthService.queryAuthInfo(levelUserId, orderId);</span></span>
<span class="line"><span>        if (null == date) {</span></span>
<span class="line"><span>            return new AuthInfo(&quot;0001&quot;, &quot;单号：&quot;, orderId, &quot; 状态：待一级审批负责人 &quot;, levelUserName);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        AuthLink next = super.next();</span></span>
<span class="line"><span>        if (null == next) {</span></span>
<span class="line"><span>            return new AuthInfo(&quot;0000&quot;, &quot;单号：&quot;, orderId, &quot; 状态：三级审批负责人完成&quot;, &quot; 时间：&quot;, f.format(date), &quot; 审批人：&quot;, levelUserName);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (authDate.before(beginDate) || authDate.after(endDate)) {</span></span>
<span class="line"><span>            return new AuthInfo(&quot;0000&quot;, &quot;单号：&quot;, orderId, &quot; 状态：三级审批负责人完成&quot;, &quot; 时间：&quot;, f.format(date), &quot; 审批人：&quot;, levelUserName);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return next.doAuth(uId, orderId, authDate);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-level2authlink" tabindex="-1"><a class="header-anchor" href="#_2-level2authlink"><span>2.Level2AuthLink</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 二级负责人</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class Level2AuthLink extends AuthLink {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Date beginDate = f.parse(&quot;2020-06-01 00:00:00&quot;);</span></span>
<span class="line"><span>    private Date endDate = f.parse(&quot;2020-06-25 23:59:59&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Level2AuthLink(String levelUserId, String levelUserName) throws ParseException {</span></span>
<span class="line"><span>        super(levelUserId, levelUserName);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public AuthInfo doAuth(String uId, String orderId, Date authDate) {</span></span>
<span class="line"><span>        Date date = AuthService.queryAuthInfo(levelUserId, orderId);</span></span>
<span class="line"><span>        if (null == date) {</span></span>
<span class="line"><span>            return new AuthInfo(&quot;0001&quot;, &quot;单号：&quot;, orderId, &quot; 状态：待二级审批负责人 &quot;, levelUserName);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        AuthLink next = super.next();</span></span>
<span class="line"><span>        if (null == next) {</span></span>
<span class="line"><span>            return new AuthInfo(&quot;0000&quot;, &quot;单号：&quot;, orderId, &quot; 状态：二级审批完成负责人&quot;, &quot; 时间：&quot;, f.format(date), &quot; 审批人：&quot;, levelUserName);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (authDate.before(beginDate) || authDate.after(endDate)) {</span></span>
<span class="line"><span>            return new AuthInfo(&quot;0000&quot;, &quot;单号：&quot;, orderId, &quot; 状态：二级审批完成负责人&quot;, &quot; 时间：&quot;, f.format(date), &quot; 审批人：&quot;, levelUserName);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return next.doAuth(uId, orderId, authDate);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3-level3authlink" tabindex="-1"><a class="header-anchor" href="#_3-level3authlink"><span>3.Level3AuthLink</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 三级负责人</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class Level3AuthLink extends AuthLink {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Level3AuthLink(String levelUserId, String levelUserName) {</span></span>
<span class="line"><span>        super(levelUserId, levelUserName);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public AuthInfo doAuth(String uId, String orderId, Date authDate) {</span></span>
<span class="line"><span>        Date date = AuthService.queryAuthInfo(levelUserId, orderId);</span></span>
<span class="line"><span>        if (null == date) {</span></span>
<span class="line"><span>            return new AuthInfo(&quot;0001&quot;, &quot;单号：&quot;, orderId, &quot; 状态：待三级审批负责人 &quot;, levelUserName);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        AuthLink next = super.next();</span></span>
<span class="line"><span>        if (null == next) {</span></span>
<span class="line"><span>            return new AuthInfo(&quot;0000&quot;, &quot;单号：&quot;, orderId, &quot; 状态：一级审批完成负责人&quot;, &quot; 时间：&quot;, f.format(date), &quot; 审批人：&quot;, levelUserName);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return next.doAuth(uId, orderId, authDate);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>上面三个类Level1AuthLink、Level2AuthLink、Level3AuthLink实现了不同的审批级别处理的简单逻辑。</li><li>例如，第一个审批类会先判断是否审批已通过，如果没有通过，则将结果返回给调用方，引导去审批（这里简单模拟审批后有时间信息不为空，作为判断条件）。</li><li>判断完成后获取下一个审批节点super.next（）；，如果不存在下一个节点，则直接返回结果。</li><li>之后根据不同的业务时间段判断是否需要二级负责人审批和一级负责人审批。</li><li>最后返回下一个审批结果next.doAuth（uId，orderId，authDate）；，就像递归调用。</li></ul><h5 id="测试验证-4" tabindex="-1"><a class="header-anchor" href="#测试验证-4"><span>测试验证</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(ApiTest.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_AuthLink() throws ParseException {</span></span>
<span class="line"><span>        AuthLink authLink = new Level3AuthLink(&quot;1000013&quot;, &quot;王工&quot;)</span></span>
<span class="line"><span>                .appendNext(new Level2AuthLink(&quot;1000012&quot;, &quot;张经理&quot;)</span></span>
<span class="line"><span>                        .appendNext(new Level1AuthLink(&quot;1000011&quot;, &quot;段总&quot;)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        SimpleDateFormat f = new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);</span></span>
<span class="line"><span>        Date currentDate = f.parse(&quot;2020-06-18 23:49:46&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, JSON.toJSONString(authLink.doAuth(&quot;zimu&quot;, &quot;1000998004813441&quot;, currentDate)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 模拟三级负责人审批</span></span>
<span class="line"><span>        AuthService.auth(&quot;1000013&quot;, &quot;1000998004813441&quot;);</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, &quot;模拟三级负责人审批，王工&quot;);</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, JSON.toJSONString(authLink.doAuth(&quot;zimu&quot;, &quot;1000998004813441&quot;, currentDate)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 模拟二级负责人审批</span></span>
<span class="line"><span>        AuthService.auth(&quot;1000012&quot;, &quot;1000998004813441&quot;);</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, &quot;模拟二级负责人审批，张经理&quot;);</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, JSON.toJSONString(authLink.doAuth(&quot;zimu&quot;, &quot;1000998004813441&quot;, currentDate)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 模拟一级负责人审批</span></span>
<span class="line"><span>        AuthService.auth(&quot;1000011&quot;, &quot;1000998004813441&quot;);</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, &quot;模拟一级负责人审批，段总&quot;);</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, JSON.toJSONString(authLink.doAuth(&quot;zimu&quot;, &quot;1000998004813441&quot;, currentDate)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这里包括最核心的责任链创建，实际的业务中会包装到控制层 AuthLink authLink=new Level3AuthLink（&quot;1000013&quot;，&quot;王工&quot;）.appendNext（new Level2AuthLink（&quot;1000012&quot;，&quot;张经理&quot;）.appendNext（new Level1AuthLink（&quot;1000011&quot;，&quot;段总&quot;）））；，通过把不同的责任节点进行组装，构成一条完整业务的责任链。</li><li>接下来不断地执行查看审批链路authLink.doAuth（...），通过返回结果对数据进行三级负责人、二级负责人和一级负责人审批，直至最后审批全部完成。</li></ul><p><strong>测试结果：</strong></p><p><img src="`+ls+'" alt="image-20220531172024778"></p><p>从上述结果可以看到，责任链已经生效，按照责任链的结构一层层审批，直至最后审批结束，输出一级负责人审批的结果。使用责任链的设计方式可以很方便地扩展和维护，也可以把if语句替换掉</p><h4 id="总结-7" tabindex="-1"><a class="header-anchor" href="#总结-7"><span>总结</span></a></h4><ul><li>通过使用 if 语句到使用责任链模式，代码结构变得更加清晰明了，也解决了大量 if语句的调用问题。当然，并不是 if语句不好，只不过 if语句并不适合做系统流程设计，在处理判断和行为逻辑中还是可以使用的。</li><li>前面介绍过组合模式像一棵组合树，而这里搭建出一棵流程决策树。这种模式也可以和责任链模式组合扩展使用，这部分的重点在于如何关联链路，最终都是在执行中间的关系链。</li><li>责任链模式可以很好地运用单一职责和开闭原则，既降低了耦合，也使对象关系更加清晰，并且外部的调用方并不需要关心责任链是如何处理的。以上程序可以包装责任链的组合，再提供给外部。除了这些优点，也需要找到适当的场景才可以使用，避免造成性能降低、编排混乱和测试疏漏等问题</li></ul><h3 id="_5-2-观察者模式" tabindex="-1"><a class="header-anchor" href="#_5-2-观察者模式"><span>5.2 观察者模式</span></a></h3><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念：</span></a></h4><p><strong>观察者模式</strong>是一种行为设计模式， 允许你定义一种订阅机制， 可在对象事件发生时通知多个 “观察” 该对象的其他对象。</p><p><img src="'+ps+'" alt="image-20220531175212219"></p><p>简单来讲，观察者模式是指当一个行为发生时，一个用户传递信息，另一个用户接收信息并做出相应的处理，行为和接收者之间没有直接的耦合关联</p><p>例如，狙击手和观察员之间的关系，观察员协助狙击手在第一时间找到目标，并将射击参数告诉狙击手，狙击手根据这些信息进行射击</p><p><img src="'+ds+'" alt="image-20220531175326723"></p><p>在编程开发中，也会常用到一些观察者模式或组件，例如经常使用的MQ服务。虽然MQ服务有一个通知中心，但服务并不会通知每一个类。再比如事件监听总线，主线服务与其他辅线业务服务分离，为了降低系统耦合和增强扩展性，也会使用观察者模式。</p><h4 id="小客车摇号通知场景" tabindex="-1"><a class="header-anchor" href="#小客车摇号通知场景"><span>小客车摇号通知场景</span></a></h4><p>本案例模拟每次小客车摇号通知场景，如图所示。</p><p><img src="'+ts+`" alt="image-20220531175531398"></p><p>可能大部分人看到这个案例一定会想到自己每次摇号都不中签的场景，收到一个遗憾的短信通知。当然，目前的摇号系统并不会给未中签者发送短信。假如这个类似的摇号功能由你来开发，并且需要给外部的用户发送一些事件通知，以及需要在主流程外再添加一些额外的辅助流程时，该如何处理呢？</p><p>有些人实现这类通知事件类的方式往往比较粗犷，直接在类里添加实现逻辑。一方面是考虑后期可能不会扩展，另一方面是压根没有考虑过要扩展。但如果仔细思考核心类功能，会发现这里有一些核心主链路，还有一部分是辅助功能。例如完成了某个行为后，需要触发MQ并传递给外部，以及将一些消息推送给用户等，这些都不是核心流程链路，可以通过事件通知的方式实现。</p><h4 id="场景模拟工程-4" tabindex="-1"><a class="header-anchor" href="#场景模拟工程-4"><span>场景模拟工程</span></a></h4><h5 id="摇号服务窗口" tabindex="-1"><a class="header-anchor" href="#摇号服务窗口"><span>摇号服务窗口</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 小客车指标调控服务</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class MinibusTargetService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 模拟摇号，但不是摇号算法</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param uId 用户编号</span></span>
<span class="line"><span>     * @return 结果</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public String lottery(String uId) {</span></span>
<span class="line"><span>        return Math.abs(uId.hashCode()) % 2 == 0 ? &quot;恭喜你，编码&quot;.concat(uId).concat(&quot;在本次摇号中签&quot;) : &quot;很遗憾，编码&quot;.concat(uId).concat(&quot;在本次摇号未中签或摇号资格已过期&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里模拟一个非常简单的摇号接口，并非真实的摇号接口，因为这里只是随机数的实现。</p><h4 id="违背设计模式实现-5" tabindex="-1"><a class="header-anchor" href="#违背设计模式实现-5"><span>违背设计模式实现</span></a></h4><p>按照需求，需要在原有的摇号接口中添加MQ消息，并提供发送功能及短消息通知功能，最直接的方式是直接在方法中补充。</p><h5 id="lotteryservice接口" tabindex="-1"><a class="header-anchor" href="#lotteryservice接口"><span>LotteryService接口</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface LotteryService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    LotteryResult doDraw(String uId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class LotteryServiceImpl implements LotteryService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(LotteryServiceImpl.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private MinibusTargetService minibusTargetService = new MinibusTargetService();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public LotteryResult doDraw(String uId) {</span></span>
<span class="line"><span>        // 摇号</span></span>
<span class="line"><span>        String lottery = minibusTargetService.lottery(uId);</span></span>
<span class="line"><span>        // 发短信</span></span>
<span class="line"><span>        logger.info(&quot;给用户 {} 发送短信通知(短信)：{}&quot;, uId, lottery);</span></span>
<span class="line"><span>        // 发MQ消息</span></span>
<span class="line"><span>        logger.info(&quot;记录用户 {} 摇号结果(MQ)：{}&quot;, uId, lottery);</span></span>
<span class="line"><span>        // 结果</span></span>
<span class="line"><span>        return new LotteryResult(uId, lottery, new Date());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从以上的方法实现中可以看到，整体过程包括三部分：摇号、发送通知短信和发送 MQ消息，三者都是顺序调用的。除了调用摇号接口，后面的两部分都是非核心主链路功能，而且会随着后续的业务需求发展不断地调整和扩充，在这种开发方式下将非常不利于后期维护。</p><h5 id="测试验证-5" tabindex="-1"><a class="header-anchor" href="#测试验证-5"><span>测试验证</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(ApiTest.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test() {</span></span>
<span class="line"><span>        LotteryService lotteryService = new LotteryServiceImpl();</span></span>
<span class="line"><span>        LotteryResult result = lotteryService.doDraw(&quot;2765789109876&quot;);</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, JSON.toJSONString(result));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果符合预期，也是常见的开发代码方式。</p><h4 id="观察者模式重构代码" tabindex="-1"><a class="header-anchor" href="#观察者模式重构代码"><span>观察者模式重构代码</span></a></h4><p>下面使用观察者模式，将代码按照职责流程拆分，把混合到一起的摇号和发送通知分别放到业务核心流程和监听事件中实现。通过这种实现方式，可以让核心流程的代码简单、干净且易扩展，而监听事件可以做相应的业务扩展，不影响主流程。</p><p><img src="`+rs+`" alt="image-20220531180533510"></p><ul><li>从上图可以分为三⼤块看； 事件监听 、 事件处理 、 具体的业务流程 ，另外在业务流程中 LotteryService 定义的是抽象类，因为这样可以通过抽象类将事件功能屏蔽，外部业务流程开 发者不需要知道具体的通知操作。</li><li>右下⻆圆圈图表示的是核心流程与⾮核⼼流程的结构，⼀般在开发中会把主线流程开发完成后，再 使⽤通知的方式处理辅助流程。他们可以是异步的，在MQ以及定时任务的处理下，保证最终一致性</li></ul><h5 id="监听事件接口定义" tabindex="-1"><a class="header-anchor" href="#监听事件接口定义"><span>监听事件接口定义</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface EventListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void doEvent(LotteryResult result);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口中定义了基本的事件类，如果方法的入参信息类型是变化的，则可以使用泛型。</p><h5 id="两个监听事件的实现" tabindex="-1"><a class="header-anchor" href="#两个监听事件的实现"><span>两个监听事件的实现</span></a></h5><h6 id="_1-短消息事件" tabindex="-1"><a class="header-anchor" href="#_1-短消息事件"><span>1.短消息事件</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class MessageEventListener implements EventListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(MessageEventListener.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doEvent(LotteryResult result) {</span></span>
<span class="line"><span>        logger.info(&quot;给用户 {} 发送短信通知(短信)：{}&quot;, result.getuId(), result.getMsg());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-mq发送事件" tabindex="-1"><a class="header-anchor" href="#_2-mq发送事件"><span>2.MQ发送事件</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class MQEventListener implements EventListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(MQEventListener.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doEvent(LotteryResult result) {</span></span>
<span class="line"><span>        logger.info(&quot;记录用户 {} 摇号结果(MQ)：{}&quot;, result.getuId(), result.getMsg());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是两个事件的具体实现，相对来说都比较简单。如果是实际的业务开发，则会需要调用外部接口以及控制异常的处理。同时，上面提到事件接口添加泛型，如果有添加的需要，那么在事件的实现中可以按照不同的类型包装事件内容。</p><h5 id="事件处理类" tabindex="-1"><a class="header-anchor" href="#事件处理类"><span>事件处理类</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class EventManager {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Map&lt;Enum&lt;EventType&gt;, List&lt;EventListener&gt;&gt; listeners = new HashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public EventManager(Enum&lt;EventType&gt;... operations) {</span></span>
<span class="line"><span>        for (Enum&lt;EventType&gt; operation : operations) {</span></span>
<span class="line"><span>            this.listeners.put(operation, new ArrayList&lt;&gt;());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public enum EventType {</span></span>
<span class="line"><span>        MQ, Message</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 订阅</span></span>
<span class="line"><span>     * @param eventType 事件类型</span></span>
<span class="line"><span>     * @param listener  监听</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void subscribe(Enum&lt;EventType&gt; eventType, EventListener listener) {</span></span>
<span class="line"><span>        List&lt;EventListener&gt; users = listeners.get(eventType);</span></span>
<span class="line"><span>        users.add(listener);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 取消订阅</span></span>
<span class="line"><span>     * @param eventType 事件类型</span></span>
<span class="line"><span>     * @param listener  监听</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void unsubscribe(Enum&lt;EventType&gt; eventType, EventListener listener) {</span></span>
<span class="line"><span>        List&lt;EventListener&gt; users = listeners.get(eventType);</span></span>
<span class="line"><span>        users.remove(listener);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 通知</span></span>
<span class="line"><span>     * @param eventType 事件类型</span></span>
<span class="line"><span>     * @param result    结果</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void notify(Enum&lt;EventType&gt; eventType, LotteryResult result) {</span></span>
<span class="line"><span>        List&lt;EventListener&gt; users = listeners.get(eventType);</span></span>
<span class="line"><span>        for (EventListener listener : users) {</span></span>
<span class="line"><span>            listener.doEvent(result);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在处理的实现方面提供了三种主要方法：订阅（subscribe）、取消订阅（unsubscribe）和通知（notify），分别用于对监听事件的添加和使用。</li><li>因为事件有不同的类型，这里使用了枚举的方式处理，也方便外部在枚举类型（EventType.MQ、EventType.Message）的规定下使用事件服务，而不至于错误传递调用信息。</li></ul><h5 id="业务抽象类接口" tabindex="-1"><a class="header-anchor" href="#业务抽象类接口"><span>业务抽象类接口</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public abstract class LotteryService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private EventManager eventManager;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public LotteryService() {</span></span>
<span class="line"><span>        eventManager = new EventManager(EventManager.EventType.MQ, EventManager.EventType.Message);</span></span>
<span class="line"><span>        eventManager.subscribe(EventManager.EventType.MQ, new MQEventListener());</span></span>
<span class="line"><span>        eventManager.subscribe(EventManager.EventType.Message, new MessageEventListener());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public LotteryResult draw(String uId) {</span></span>
<span class="line"><span>        LotteryResult lotteryResult = doDraw(uId);</span></span>
<span class="line"><span>        // 需要什么通知就给调用什么方法</span></span>
<span class="line"><span>        eventManager.notify(EventManager.EventType.MQ, lotteryResult);</span></span>
<span class="line"><span>        eventManager.notify(EventManager.EventType.Message, lotteryResult);</span></span>
<span class="line"><span>        return lotteryResult;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    protected abstract LotteryResult doDraw(String uId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用抽象类的方式定义实现方法，可以在方法中扩展需要的额外调用，并提供抽象类abstract LotteryResult doDraw（String uId），让类的继承者实现。</li><li>同时，方法的定义使用的是protected，也就是保证将来外部的调用方不会调用到此方法，只有调用到draw（String uId）才能完成事件通知。</li><li>此种方式的实现是在抽象类中写好一个基本的方法，在方法中完成新增逻辑的同时，再增加抽象类的使用，而这个抽象类的定义会由继承者实现。</li><li>另外，在构造函数中提供了对事件的定义：eventManager.subscribe（EventManager.EventType.MQ，new MQEventListener（））。</li><li>在使用时也采用枚举的方式通知使用者，传了哪些类型EventManager.EventType.MQ，就执行哪些事件通知，按需添加。</li></ul><h5 id="业务接口实现类" tabindex="-1"><a class="header-anchor" href="#业务接口实现类"><span>业务接口实现类</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>ublic class LotteryServiceImpl extends LotteryService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private MinibusTargetService minibusTargetService = new MinibusTargetService();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected LotteryResult doDraw(String uId) {</span></span>
<span class="line"><span>        // 摇号</span></span>
<span class="line"><span>        String lottery = minibusTargetService.lottery(uId);</span></span>
<span class="line"><span>        // 结果</span></span>
<span class="line"><span>        return new LotteryResult(uId, lottery, new Date());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于业务流程的实现，可以看到已经非常的简单了，没有额外的辅助流程，只有核心流程的处理。</p><h5 id="测试验证-6" tabindex="-1"><a class="header-anchor" href="#测试验证-6"><span>测试验证</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(ApiTest.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_draw() {</span></span>
<span class="line"><span>        LotteryService lotteryService = new LotteryServiceImpl();</span></span>
<span class="line"><span>        LotteryResult result = lotteryService.draw(&quot;2765789109876&quot;);</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：{}&quot;, JSON.toJSONString(result));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+hs+'" alt="image-20220531181648675"></p><p>从调用来看几乎没有区别，但是这种实现方式便于维护，便于扩展新的需求。</p><h4 id="总结-8" tabindex="-1"><a class="header-anchor" href="#总结-8"><span>总结</span></a></h4><ul><li>从基本的过程式开发，到使用观察者模式面向对象开发，可以看到使用设计模式改造后，拆分出了核心流程与辅助流程的代码。代码中的核心流程一般不会经常变化，辅助流程会随着业务的变化而变化，包括营销、裂变和促活等，因此使用设计模式编码就显得非常有必要。</li><li>此种设计模式从结构上满足开闭原则，当需要新增其他的监听事件或修改监听逻辑时，不需要改动事件处理类。但可能不能控制调用顺序以及需要做一些事件结果的返回操作，所以在使用的过程时需要考虑场景的适用性。</li><li>任何一种设计模式有时都不是单独使用的，需要结合其他模式共同使用。</li></ul><h3 id="_5-3-策略模式" tabindex="-1"><a class="header-anchor" href="#_5-3-策略模式"><span>5.3 策略模式</span></a></h3><h4 id="概述-7" tabindex="-1"><a class="header-anchor" href="#概述-7"><span>概述：</span></a></h4><p><strong>策略模式</strong>是一种行为设计模式， 它能让你定义一系列算法， 并将每种算法分别放入独立的类中， 以使算法的对象能够相互替换。</p><p><img src="'+cs+'" alt="image-20220531182121801"></p><p>策略模式是一种行为模式，也是替代if…else的利器。它能解决的场景一般包括具有同类可替代的行为逻辑算法，例如：不同类型的交易方式（信用卡、支付宝、微信）、生成唯一 ID策略（UUID、DB自增、DB+Redis、雪花算法和Leaf算法）等。</p><h4 id="各类营销优惠券场景" tabindex="-1"><a class="header-anchor" href="#各类营销优惠券场景"><span>各类营销优惠券场景</span></a></h4><p>本案例模拟在购买商品时使用的各种类型的优惠券，包括满减、直减、折扣和 N 元购等，如图所示。</p><p><img src="'+ks+`" alt="image-20220531182355574"></p><p>这个场景模拟日常购物省钱渠道，在购买商品时使用优惠券。在大促时，会有更多的优惠券，需要计算哪些商品一起购买更加优惠。实现此功能并不容易，因为里面包括了很多的规则和优惠逻辑，可以模拟其中一种计算优惠的方式，使用策略模式实现。</p><h4 id="违背设计模式实现-6" tabindex="-1"><a class="header-anchor" href="#违背设计模式实现-6"><span>违背设计模式实现</span></a></h4><p>对于优惠券的设计，最初可能非常简单，只是一个金额的抵扣，也没有现在这么多种类型。所以，虽然设计起来非常简单，但随着产品功能的不断迭代，一旦程序不具备很好的扩展性，就会越来越混乱</p><h5 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 优惠券折扣计算接口</span></span>
<span class="line"><span> * &lt;p&gt;</span></span>
<span class="line"><span> * 优惠券类型；</span></span>
<span class="line"><span> * 1. 直减券</span></span>
<span class="line"><span> * 2. 满减券</span></span>
<span class="line"><span> * 3. 折扣券</span></span>
<span class="line"><span> * 4. n元购</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class CouponDiscountService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public double discountAmount(int type, double typeContent, double skuPrice, double typeExt) {</span></span>
<span class="line"><span>        // 1. 直减券</span></span>
<span class="line"><span>        if (1 == type) {</span></span>
<span class="line"><span>            return skuPrice - typeContent;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 2. 满减券</span></span>
<span class="line"><span>        if (2 == type) {</span></span>
<span class="line"><span>            if (skuPrice &lt; typeExt) return skuPrice;</span></span>
<span class="line"><span>            return skuPrice - typeContent;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 3. 折扣券</span></span>
<span class="line"><span>        if (3 == type) {</span></span>
<span class="line"><span>            return skuPrice * typeContent;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 4. n元购</span></span>
<span class="line"><span>        if (4 == type) {</span></span>
<span class="line"><span>            return typeContent;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return 0D;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>以上是不同类型的优惠券计算折扣后的实际金额。入参包括：优惠券类型、优惠券金额和商品金额。因为有些优惠券是满多少减多少，所以增加了typeExt类型，这也是方法不好扩展的原因之一。</li><li>最后是整个方法体对优惠券抵扣金额的实现，最开始可能是一个简单的优惠券，后面随着产品功能的增加，不断地扩展if语句，实际的代码可能更多。</li></ul><h4 id="策略模式重构代码" tabindex="-1"><a class="header-anchor" href="#策略模式重构代码"><span>策略模式重构代码</span></a></h4><p><img src="`+vs+`" alt="image-20220531182736591"></p><ul><li>整体的结构模式并不复杂，主要体现的不同类型的优惠券在计算优惠券⽅式的不同计算策略。</li><li>这⾥包括⼀个借⼝类( ICouponDiscount )以及四种优惠券类型的实现⽅式。</li><li>最后提供了策略模式的上下控制类处理，整体的策略服务。</li></ul><h5 id="优惠券接口" tabindex="-1"><a class="header-anchor" href="#优惠券接口"><span>优惠券接口</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public interface ICouponDiscount&lt;T&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 优惠券金额计算</span></span>
<span class="line"><span>     * @param couponInfo 券折扣信息；直减、满减、折扣、N元购</span></span>
<span class="line"><span>     * @param skuPrice   sku金额</span></span>
<span class="line"><span>     * @return           优惠后金额</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    BigDecimal discountAmount(T couponInfo, BigDecimal skuPrice);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了优惠券折扣接口，也增加了泛型，不同类型的接口可以传递不同的类型参数。接口包括商品金额及出参返回优惠后金额。在实际开发中，会比现在的接口参数多一些，但核心逻辑类似。</p><h5 id="优惠券接口实现" tabindex="-1"><a class="header-anchor" href="#优惠券接口实现"><span>优惠券接口实现</span></a></h5><h6 id="_1-满减" tabindex="-1"><a class="header-anchor" href="#_1-满减"><span>1.满减</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class MJCouponDiscount implements ICouponDiscount&lt;Map&lt;String,String&gt;&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 满减计算</span></span>
<span class="line"><span>     * 1. 判断满足x元后-n元，否则不减</span></span>
<span class="line"><span>     * 2. 最低支付金额1元</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public BigDecimal discountAmount(Map&lt;String,String&gt; couponInfo, BigDecimal skuPrice) {</span></span>
<span class="line"><span>        String x = couponInfo.get(&quot;x&quot;);</span></span>
<span class="line"><span>        String o = couponInfo.get(&quot;n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 小于商品金额条件的，直接返回商品原价</span></span>
<span class="line"><span>        if (skuPrice.compareTo(new BigDecimal(x)) &lt; 0) return skuPrice;</span></span>
<span class="line"><span>        // 减去优惠金额判断</span></span>
<span class="line"><span>        BigDecimal discountAmount = skuPrice.subtract(new BigDecimal(o));</span></span>
<span class="line"><span>        if (discountAmount.compareTo(BigDecimal.ZERO) &lt; 1) return BigDecimal.ONE;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return discountAmount;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-直减" tabindex="-1"><a class="header-anchor" href="#_2-直减"><span>2.直减</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ZJCouponDiscount implements ICouponDiscount&lt;Double&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 直减计算</span></span>
<span class="line"><span>     * 1. 使用商品价格减去优惠价格</span></span>
<span class="line"><span>     * 2. 最低支付金额1元</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public BigDecimal discountAmount(Double couponInfo, BigDecimal skuPrice) {</span></span>
<span class="line"><span>        BigDecimal discountAmount = skuPrice.subtract(new BigDecimal(couponInfo));</span></span>
<span class="line"><span>        if (discountAmount.compareTo(BigDecimal.ZERO) &lt; 1) return BigDecimal.ONE;</span></span>
<span class="line"><span>        return discountAmount;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3-折扣" tabindex="-1"><a class="header-anchor" href="#_3-折扣"><span>3.折扣</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ZKCouponDiscount implements ICouponDiscount&lt;Double&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 折扣计算</span></span>
<span class="line"><span>     * 1. 使用商品价格乘以折扣比例，为最后支付金额</span></span>
<span class="line"><span>     * 2. 保留两位小数</span></span>
<span class="line"><span>     * 3. 最低支付金额1元</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public BigDecimal discountAmount(Double couponInfo, BigDecimal skuPrice) {</span></span>
<span class="line"><span>        BigDecimal discountAmount = skuPrice.multiply(new BigDecimal(couponInfo)).setScale(2, BigDecimal.ROUND_HALF_UP);</span></span>
<span class="line"><span>        if (discountAmount.compareTo(BigDecimal.ZERO) &lt; 1) return BigDecimal.ONE;</span></span>
<span class="line"><span>        return discountAmount;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4-n元购" tabindex="-1"><a class="header-anchor" href="#_4-n元购"><span>4.N元购</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class NYGCouponDiscount implements ICouponDiscount&lt;Double&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * n元购购买</span></span>
<span class="line"><span>     * 1. 无论原价多少钱都固定金额购买</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public BigDecimal discountAmount(Double couponInfo, BigDecimal skuPrice) {</span></span>
<span class="line"><span>        return new BigDecimal(couponInfo);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是四种不同类型的优惠券计算折扣金额的方式，可以从代码中看到每一种优惠方式优惠后的金额。</p><h5 id="编写测试类-直减优惠、满减优惠、折扣优惠、n元购优惠" tabindex="-1"><a class="header-anchor" href="#编写测试类-直减优惠、满减优惠、折扣优惠、n元购优惠"><span>编写测试类（直减优惠、满减优惠、折扣优惠、N元购优惠）</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>public class ApiTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Logger logger = LoggerFactory.getLogger(ApiTest.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_zj() {</span></span>
<span class="line"><span>        // 直减；100-10，商品100元</span></span>
<span class="line"><span>        Context&lt;Double&gt; context = new Context&lt;Double&gt;(new ZJCouponDiscount());</span></span>
<span class="line"><span>        BigDecimal discountAmount = context.discountAmount(10D, new BigDecimal(100));</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：直减优惠后金额 {}&quot;, discountAmount);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_mj() {</span></span>
<span class="line"><span>        // 满100减10，商品100元</span></span>
<span class="line"><span>        Context&lt;Map&lt;String,String&gt;&gt; context = new Context&lt;Map&lt;String,String&gt;&gt;(new MJCouponDiscount());</span></span>
<span class="line"><span>        Map&lt;String,String&gt; mapReq = new HashMap&lt;String, String&gt;();</span></span>
<span class="line"><span>        mapReq.put(&quot;x&quot;,&quot;100&quot;);</span></span>
<span class="line"><span>        mapReq.put(&quot;n&quot;,&quot;10&quot;);</span></span>
<span class="line"><span>        BigDecimal discountAmount = context.discountAmount(mapReq, new BigDecimal(100));</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：满减优惠后金额 {}&quot;, discountAmount);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_zk() {</span></span>
<span class="line"><span>        // 折扣9折，商品100元</span></span>
<span class="line"><span>        Context&lt;Double&gt; context = new Context&lt;Double&gt;(new ZKCouponDiscount());</span></span>
<span class="line"><span>        BigDecimal discountAmount = context.discountAmount(0.9D, new BigDecimal(100));</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：折扣9折后金额 {}&quot;, discountAmount);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test_nyg() {</span></span>
<span class="line"><span>        // n元购；100-10，商品100元</span></span>
<span class="line"><span>        Context&lt;Double&gt; context = new Context&lt;Double&gt;(new NYGCouponDiscount());</span></span>
<span class="line"><span>        BigDecimal discountAmount = context.discountAmount(90D, new BigDecimal(100));</span></span>
<span class="line"><span>        logger.info(&quot;测试结果：n元购优惠后金额 {}&quot;, discountAmount);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上四组测试分别验证了不同类型优惠券的优惠策略，测试结果满足预期。四种优惠券最终都是在原价100元的基础上减免10元，最终支付90元。</p><h4 id="总结-9" tabindex="-1"><a class="header-anchor" href="#总结-9"><span>总结</span></a></h4><ul><li>策略模式案例并不复杂，主要的逻辑体现在不同种类优惠券的计算折扣策略上。在实际的开发中，这种设计模式很常用。另外，这种设计模式与命令模式、适配器模式的结构相似，但是思路有些差异。</li><li>通过使用策略模式，可以优化方法中的 if 语句。在使用这种设计模式后，可以很好地满足隔离性和扩展性要求，也方便承接不断新增的需求</li></ul><h1 id="设计模式-gof23" tabindex="-1"><a class="header-anchor" href="#设计模式-gof23"><span>设计模式 | GOF23</span></a></h1><p>将设计者的思维融入学习工作中,更高层次的思考</p><p>重在<strong>思维方法</strong></p><ul><li>创建型模式 <ul><li>单例模式</li><li>工厂模式</li><li>抽象工厂模式</li><li>建造者模式</li><li>原型模式</li></ul></li><li>结构型模式 <ul><li>适配器模式</li><li>桥接模式</li><li>装饰模式</li><li>组合模式</li><li>外观模式</li><li>享元模式</li><li>代理模式</li></ul></li><li>行为型模式 <ul><li>模板方法模式</li><li>命令模式</li><li>迭代器模式</li><li>观察者模式</li><li>中介者模式</li><li>备忘录模式</li><li>解释器模式</li><li>状态模式</li><li>策略模式</li><li>职责链模式</li><li>访问者模式</li></ul></li></ul><p>group  of  four  四位大牛归纳的套路</p>`,890)]))}const bs=n(us,[["render",gs]]),ys=JSON.parse('{"path":"/chuxin/07_%E6%96%B9%E5%90%91/03_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/01_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/","title":"【深入代码系列】手牵手一起过设计模式","lang":"zh-CN","frontmatter":{"typora-root-url":"../../../.vuepress/public","title":"【深入代码系列】手牵手一起过设计模式","id":"code-deep-design.html","tags":["方向","设计模式"],"categories":["编程"],"keywords":"语法,基础,Java,微服务,编程,数据存储","description":"在软件工程中，设计模式（design pattern）是对软件设计中普遍存在（反复出现）的各种问题，所提出的解决方案","date":"2024-11-13T11:45:48.000Z","createTime":"2025/08/23 15:49:32","permalink":"/chuxin/07_方向/03_设计模式/01_设计模式/","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"【深入代码系列】手牵手一起过设计模式\\",\\"image\\":[\\"https://zuoer96.github.io/docs/docs/images/image-20220604130102991.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220604130332920.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220604130915476.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220604132300355.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220604132424778.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20200517120844827.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20230928161317601.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20200516232059055.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20200516232559924.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20200516232640969.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20200516232706997.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20200516232729955.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20200516232800944.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220113152017462.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220113150108444.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220530160637842.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220530160917816.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220530161010217.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220609152207574.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220609213147075.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220609215144445.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220609225330420.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220609231259823.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220609234231046.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220427143155787.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531101815549.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531102217260.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531102303900.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531105144003.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531105258026.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220530174159175.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531112535405.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220610114526159.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531113117582.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531115942432.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531123424307.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531123523553.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531123647106.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531142806602.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531144232978.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531145132383.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531145329859.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531150626670.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531151900807.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531153450542.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531154203800.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531154351928.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531154642231.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531155341579.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531160711146.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531163411507.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531163527689.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531165449126.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531165606647.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531172024778.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531175212219.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531175326723.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531175531398.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531180533510.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531181648675.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531182121801.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531182355574.png\\",\\"https://zuoer96.github.io/docs/docs/images/image-20220531182736591.png\\"],\\"datePublished\\":\\"2024-11-13T11:45:48.000Z\\",\\"dateModified\\":\\"2025-09-03T02:00:28.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://zuoer96.github.io/docs/docs/chuxin/07_%E6%96%B9%E5%90%91/03_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/01_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/"}],["meta",{"property":"og:site_name","content":"编程备忘录"}],["meta",{"property":"og:title","content":"【深入代码系列】手牵手一起过设计模式"}],["meta",{"property":"og:description","content":"在软件工程中，设计模式（design pattern）是对软件设计中普遍存在（反复出现）的各种问题，所提出的解决方案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zuoer96.github.io/docs/docs/images/image-20220604130102991.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-03T02:00:28.000Z"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"方向"}],["meta",{"property":"article:published_time","content":"2024-11-13T11:45:48.000Z"}],["meta",{"property":"article:modified_time","content":"2025-09-03T02:00:28.000Z"}]]},"readingTime":{"minutes":130.14,"words":39043},"git":{"createdTime":1755938647000,"updatedTime":1756864828000,"contributors":[{"name":"zuoer96","username":"zuoer96","email":"31268184+zuoer96@users.noreply.github.com","commits":3,"avatar":"https://avatars.githubusercontent.com/zuoer96?v=4","url":"https://github.com/zuoer96"}]},"filePathRelative":"notes/00-方向/03_设计模式/01_设计模式.md","headers":[],"bulletin":true}');export{bs as comp,ys as data};
