/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['src/overview.js']) {
  _$jscoverage['src/overview.js'] = [];
  _$jscoverage['src/overview.js'][1] = 0;
  _$jscoverage['src/overview.js'][2] = 0;
  _$jscoverage['src/overview.js'][3] = 0;
  _$jscoverage['src/overview.js'][4] = 0;
  _$jscoverage['src/overview.js'][5] = 0;
  _$jscoverage['src/overview.js'][7] = 0;
  _$jscoverage['src/overview.js'][8] = 0;
  _$jscoverage['src/overview.js'][9] = 0;
  _$jscoverage['src/overview.js'][11] = 0;
  _$jscoverage['src/overview.js'][12] = 0;
  _$jscoverage['src/overview.js'][13] = 0;
  _$jscoverage['src/overview.js'][14] = 0;
  _$jscoverage['src/overview.js'][19] = 0;
  _$jscoverage['src/overview.js'][20] = 0;
  _$jscoverage['src/overview.js'][22] = 0;
  _$jscoverage['src/overview.js'][23] = 0;
  _$jscoverage['src/overview.js'][24] = 0;
  _$jscoverage['src/overview.js'][25] = 0;
  _$jscoverage['src/overview.js'][37] = 0;
  _$jscoverage['src/overview.js'][52] = 0;
  _$jscoverage['src/overview.js'][53] = 0;
  _$jscoverage['src/overview.js'][54] = 0;
  _$jscoverage['src/overview.js'][55] = 0;
  _$jscoverage['src/overview.js'][56] = 0;
  _$jscoverage['src/overview.js'][57] = 0;
  _$jscoverage['src/overview.js'][58] = 0;
  _$jscoverage['src/overview.js'][59] = 0;
  _$jscoverage['src/overview.js'][61] = 0;
  _$jscoverage['src/overview.js'][62] = 0;
  _$jscoverage['src/overview.js'][63] = 0;
  _$jscoverage['src/overview.js'][64] = 0;
  _$jscoverage['src/overview.js'][65] = 0;
  _$jscoverage['src/overview.js'][66] = 0;
  _$jscoverage['src/overview.js'][67] = 0;
  _$jscoverage['src/overview.js'][70] = 0;
  _$jscoverage['src/overview.js'][71] = 0;
  _$jscoverage['src/overview.js'][72] = 0;
  _$jscoverage['src/overview.js'][73] = 0;
  _$jscoverage['src/overview.js'][74] = 0;
  _$jscoverage['src/overview.js'][75] = 0;
  _$jscoverage['src/overview.js'][78] = 0;
  _$jscoverage['src/overview.js'][80] = 0;
  _$jscoverage['src/overview.js'][81] = 0;
  _$jscoverage['src/overview.js'][82] = 0;
  _$jscoverage['src/overview.js'][85] = 0;
  _$jscoverage['src/overview.js'][92] = 0;
  _$jscoverage['src/overview.js'][104] = 0;
  _$jscoverage['src/overview.js'][106] = 0;
  _$jscoverage['src/overview.js'][107] = 0;
  _$jscoverage['src/overview.js'][109] = 0;
  _$jscoverage['src/overview.js'][110] = 0;
}
_$jscoverage['src/overview.js'].source = ["$<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","    <span class=\"k\">var</span> POLL_URL <span class=\"k\">=</span> <span class=\"s\">\"UpdateController?type=Instance\"</span><span class=\"k\">;</span>","\t<span class=\"k\">var</span> SINGLE_INSTANCE_LINK <span class=\"k\">=</span> <span class=\"s\">\"SingleInstanceController?instance=\"</span><span class=\"k\">;</span>","    <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">typeof</span> Array<span class=\"k\">.</span>prototype<span class=\"k\">.</span>forEach <span class=\"k\">!==</span> <span class=\"s\">'function'</span><span class=\"k\">)</span> <span class=\"k\">{</span>","        Array<span class=\"k\">.</span>prototype<span class=\"k\">.</span>forEach <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">(</span>callback<span class=\"k\">)</span><span class=\"c\">//[, thisObject])</span>","        <span class=\"k\">{</span>","            <span class=\"k\">var</span> len <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>length<span class=\"k\">;</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">typeof</span> callback <span class=\"k\">!=</span> <span class=\"s\">\"function\"</span><span class=\"k\">)</span> ","                <span class=\"k\">throw</span> <span class=\"k\">new</span> TypeError<span class=\"k\">();</span>","            ","            <span class=\"k\">var</span> thisObject <span class=\"k\">=</span> arguments<span class=\"k\">[</span><span class=\"s\">1</span><span class=\"k\">];</span>","            <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span> i <span class=\"k\">&lt;</span> len<span class=\"k\">;</span> i<span class=\"k\">++)</span> <span class=\"k\">{</span>","                <span class=\"k\">if</span> <span class=\"k\">(</span>i <span class=\"k\">in</span> <span class=\"k\">this</span><span class=\"k\">)</span> ","                    callback<span class=\"k\">.</span>call<span class=\"k\">(</span>thisObject<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">[</span>i<span class=\"k\">],</span> i<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">);</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">;</span>","    <span class=\"k\">}</span>","\t","\t<span class=\"k\">function</span> prettyDateDiff<span class=\"k\">(</span>since<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> diff <span class=\"k\">=</span> <span class=\"k\">(((</span><span class=\"k\">new</span> Date<span class=\"k\">()).</span>getTime<span class=\"k\">()</span> <span class=\"k\">-</span> since <span class=\"k\">*</span> <span class=\"s\">1000</span><span class=\"k\">)</span> <span class=\"k\">/</span> <span class=\"s\">1000</span><span class=\"k\">)</span>","        <span class=\"k\">,</span>   day_diff <span class=\"k\">=</span> Math<span class=\"k\">.</span>floor<span class=\"k\">(</span>diff <span class=\"k\">/</span> <span class=\"s\">86400</span><span class=\"k\">);</span>","        <span class=\"k\">if</span> <span class=\"k\">(</span> isNaN<span class=\"k\">(</span>day_diff<span class=\"k\">)</span> <span class=\"k\">||</span> day_diff <span class=\"k\">&lt;</span><span class=\"s\">0</span><span class=\"k\">)</span>","                <span class=\"k\">return</span><span class=\"k\">;</span>","\t\t<span class=\"k\">var</span> date <span class=\"k\">=</span> <span class=\"k\">new</span> Date<span class=\"k\">(</span>since <span class=\"k\">*</span> <span class=\"s\">1000</span><span class=\"k\">);</span>","        <span class=\"k\">return</span> <span class=\"s\">'&lt;span title=\"'</span> <span class=\"k\">+</span> date<span class=\"k\">.</span>getDay<span class=\"k\">()</span> <span class=\"k\">+</span> <span class=\"s\">'.'</span> <span class=\"k\">+</span> <span class=\"k\">(</span>date<span class=\"k\">.</span>getMonth<span class=\"k\">()</span> <span class=\"k\">+</span> <span class=\"s\">1</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">'.'</span> <span class=\"k\">+</span> date<span class=\"k\">.</span>getFullYear<span class=\"k\">()</span> <span class=\"k\">+</span> <span class=\"s\">' '</span> <span class=\"k\">+</span> date<span class=\"k\">.</span>getHours<span class=\"k\">()</span> <span class=\"k\">+</span> <span class=\"s\">':'</span> <span class=\"k\">+</span> date<span class=\"k\">.</span>getMinutes<span class=\"k\">()</span> <span class=\"k\">+</span> <span class=\"s\">'\"&gt;'</span> <span class=\"k\">+</span> <span class=\"k\">(</span>day_diff <span class=\"k\">==</span> <span class=\"s\">0</span> <span class=\"k\">&amp;&amp;</span> <span class=\"k\">(</span>","                        diff <span class=\"k\">&lt;</span><span class=\"s\">60</span> <span class=\"k\">&amp;&amp;</span> <span class=\"s\">\"gerade eben\"</span> <span class=\"k\">||</span>","                        diff <span class=\"k\">&lt;</span><span class=\"s\">120</span> <span class=\"k\">&amp;&amp;</span> <span class=\"s\">\"vor einer Minute\"</span> <span class=\"k\">||</span>","                        diff <span class=\"k\">&lt;</span><span class=\"s\">3600</span> <span class=\"k\">&amp;&amp;</span> <span class=\"s\">\"vor \"</span> <span class=\"k\">+</span> Math<span class=\"k\">.</span>floor<span class=\"k\">(</span> diff <span class=\"k\">/</span> <span class=\"s\">60</span> <span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">\" Minuten\"</span> <span class=\"k\">||</span>","                        diff <span class=\"k\">&lt;</span><span class=\"s\">7200</span> <span class=\"k\">&amp;&amp;</span> <span class=\"s\">\"vor einer Stunde\"</span> <span class=\"k\">||</span>","                        diff <span class=\"k\">&lt;</span><span class=\"s\">86400</span> <span class=\"k\">&amp;&amp;</span> <span class=\"s\">\"vor \"</span> <span class=\"k\">+</span> Math<span class=\"k\">.</span>floor<span class=\"k\">(</span> diff <span class=\"k\">/</span> <span class=\"s\">3600</span> <span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">\" Stunden\"</span><span class=\"k\">)</span> <span class=\"k\">||</span>","                day_diff <span class=\"k\">==</span> <span class=\"s\">1</span> <span class=\"k\">&amp;&amp;</span> <span class=\"s\">\"Gestern\"</span> <span class=\"k\">||</span>","                day_diff <span class=\"k\">&lt;</span><span class=\"s\">7</span> <span class=\"k\">&amp;&amp;</span> <span class=\"s\">\"vor \"</span> <span class=\"k\">+</span> day_diff <span class=\"k\">+</span> <span class=\"s\">\" Tagen\"</span> <span class=\"k\">||</span>","                day_diff <span class=\"k\">&lt;</span><span class=\"s\">31</span> <span class=\"k\">&amp;&amp;</span> <span class=\"s\">\"vor \"</span> <span class=\"k\">+</span> Math<span class=\"k\">.</span>ceil<span class=\"k\">(</span> day_diff <span class=\"k\">/</span> <span class=\"s\">7</span> <span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">\" Wochen\"</span> <span class=\"k\">||</span>","\t\t\t\t<span class=\"s\">\"vor \"</span> <span class=\"k\">+</span> Math<span class=\"k\">.</span>ceil<span class=\"k\">(</span> day_diff <span class=\"k\">/</span> <span class=\"s\">365</span> <span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">\" Jahren\"</span><span class=\"k\">)</span>  <span class=\"k\">+</span> <span class=\"s\">'&lt;/span&gt;'</span><span class=\"k\">;</span>","\t<span class=\"k\">}</span>","\t","\t<span class=\"k\">var</span> prettyEvent <span class=\"k\">=</span> <span class=\"k\">{</span>","\t\t<span class=\"s\">\"terminateInstance\"</span><span class=\"k\">:</span> <span class=\"s\">\"Instanz beendet\"</span><span class=\"k\">,</span>","\t\t<span class=\"s\">\"createInstance\"</span><span class=\"k\">:</span> <span class=\"s\">\"Instanz gestartet\"</span><span class=\"k\">,</span>","\t\t<span class=\"s\">\"humanActivityExecuted\"</span><span class=\"k\">:</span> <span class=\"s\">\"Aktivit&#195;&#164;t (Human-Task) wurde ausgef&#195;&#188;hrt\"</span><span class=\"k\">,</span>","\t\t<span class=\"s\">\"eventActivityExecuted\"</span><span class=\"k\">:</span> <span class=\"s\">\"Aktivit&#195;&#164;t (Event) wurde ausgef&#195;&#188;hrt\"</span><span class=\"k\">,</span>","        <span class=\"s\">\"WSActivityExecuted\"</span><span class=\"k\">:</span> <span class=\"s\">\"Aktivit&#195;&#164;t (Webservice-Aufruf) wurde ausgef&#195;&#188;hrt\"</span><span class=\"k\">,</span>","\t\t<span class=\"s\">\"WSProviderSelected\"</span><span class=\"k\">:</span> <span class=\"s\">\"Anbieter ausgew&#195;&#164;hlt\"</span><span class=\"k\">,</span>","\t\t<span class=\"s\">\"startActivityExecution\"</span><span class=\"k\">:</span> <span class=\"s\">\"Aktivit&#195;&#164;t unmittelbar vor Ausf&#195;&#188;hrung\"</span><span class=\"k\">,</span>","\t\t<span class=\"s\">\"DataTransferredToWS\"</span><span class=\"k\">:</span> <span class=\"s\">\"&#195;&#156;bertragung von Daten an Webservice\"</span><span class=\"k\">,</span>","\t\t<span class=\"s\">\"DataTransferredFromWS\"</span><span class=\"k\">:</span> <span class=\"s\">\"R&#195;&#188;ckgabe von Daten von einem Webservice\"</span><span class=\"k\">,</span>","\t\t<span class=\"s\">\"HumanTaskExecutorSelected\"</span><span class=\"k\">:</span> <span class=\"s\">\"Benutzer f&#195;&#188;r Aktivit&#195;&#164;t ausgew&#195;&#164;hlt\"</span><span class=\"k\">,</span>","        <span class=\"s\">\"DataTransferredToHuman\"</span><span class=\"k\">:</span> <span class=\"s\">\"&#195;&#156;bertragung von Daten an Menschen\"</span><span class=\"k\">,</span>","        <span class=\"s\">\"DataTransferredFromHuman\"</span><span class=\"k\">:</span> <span class=\"s\">\"Eingabe von Daten durch Menschen\"</span>","\t<span class=\"k\">}</span><span class=\"k\">;</span>","    ","    <span class=\"k\">var</span> overview <span class=\"k\">=</span> <span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","        <span class=\"k\">var</span> instances <span class=\"k\">=</span> <span class=\"k\">{}</span><span class=\"k\">;</span>","        <span class=\"k\">var</span> instancestable <span class=\"k\">=</span> $<span class=\"k\">(</span><span class=\"s\">\"#instancestable\"</span><span class=\"k\">);</span>","        <span class=\"k\">var</span> entryPrototype <span class=\"k\">=</span> $<span class=\"k\">(</span><span class=\"s\">\"&lt;tr&gt;&lt;td&gt;&lt;a/&gt;&lt;/td&gt;&lt;td/&gt;&lt;td/&gt;&lt;td/&gt;&lt;/tr&gt;\"</span><span class=\"k\">);</span>","        <span class=\"k\">function</span> newInstance<span class=\"k\">(</span>data<span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">var</span> that <span class=\"k\">=</span> <span class=\"k\">{}</span><span class=\"k\">;</span>","            <span class=\"k\">var</span> entry <span class=\"k\">=</span> entryPrototype<span class=\"k\">.</span>clone<span class=\"k\">();</span>","            <span class=\"k\">var</span> tds <span class=\"k\">=</span> entry<span class=\"k\">.</span>find<span class=\"k\">(</span><span class=\"s\">\"td\"</span><span class=\"k\">);</span>","            ","            that<span class=\"k\">.</span>update <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">(</span>data<span class=\"k\">)</span><span class=\"k\">{</span>","                $<span class=\"k\">(</span>tds<span class=\"k\">[</span><span class=\"s\">0</span><span class=\"k\">]).</span>find<span class=\"k\">(</span><span class=\"s\">\"a\"</span><span class=\"k\">).</span>attr<span class=\"k\">(</span><span class=\"s\">\"href\"</span><span class=\"k\">,</span> SINGLE_INSTANCE_LINK <span class=\"k\">+</span> data<span class=\"k\">.</span>id<span class=\"k\">).</span>text<span class=\"k\">(</span>data<span class=\"k\">.</span>id<span class=\"k\">);</span>","                $<span class=\"k\">(</span>tds<span class=\"k\">[</span><span class=\"s\">1</span><span class=\"k\">]).</span>text<span class=\"k\">(</span>data<span class=\"k\">.</span>workflowName<span class=\"k\">);</span>","                $<span class=\"k\">(</span>tds<span class=\"k\">[</span><span class=\"s\">2</span><span class=\"k\">]).</span>html<span class=\"k\">(</span>prettyDateDiff<span class=\"k\">(</span>data<span class=\"k\">.</span>create<span class=\"k\">));</span>","                $<span class=\"k\">(</span>tds<span class=\"k\">[</span><span class=\"s\">3</span><span class=\"k\">]).</span>html<span class=\"k\">(</span>prettyEvent<span class=\"k\">[</span>data<span class=\"k\">.</span>lastEvent<span class=\"k\">]</span> <span class=\"k\">+</span> <span class=\"s\">\" \"</span> <span class=\"k\">+</span> prettyDateDiff<span class=\"k\">(</span>data<span class=\"k\">.</span>finished<span class=\"k\">));</span>","\t\t\t\t<span class=\"k\">if</span> <span class=\"k\">(</span>data<span class=\"k\">.</span>lastEvent <span class=\"k\">==</span> <span class=\"s\">\"terminateInstance\"</span><span class=\"k\">)</span> <span class=\"k\">{</span>","\t\t\t\t\tentry<span class=\"k\">.</span>addClass<span class=\"k\">(</span><span class=\"s\">\"finished-instance\"</span><span class=\"k\">);</span>","\t\t\t\t<span class=\"k\">}</span>","            <span class=\"k\">}</span>","            entry<span class=\"k\">.</span>hide<span class=\"k\">();</span>","            instancestable<span class=\"k\">.</span>append<span class=\"k\">(</span>entry<span class=\"k\">);</span>","\t\t\tthat<span class=\"k\">.</span>update<span class=\"k\">(</span>data<span class=\"k\">);</span>","\t\t\tentry<span class=\"k\">.</span>fadeIn<span class=\"k\">();</span>","\t\t\tentry<span class=\"k\">.</span>css<span class=\"k\">(</span><span class=\"s\">\"display\"</span><span class=\"k\">,</span> <span class=\"s\">\"table-row\"</span><span class=\"k\">);</span>","            <span class=\"k\">return</span> that<span class=\"k\">;</span>","        <span class=\"k\">}</span>","        ","        <span class=\"k\">return</span> <span class=\"k\">{</span>","            update<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>data<span class=\"k\">)</span><span class=\"k\">{</span>","                data<span class=\"k\">.</span>forEach<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">(</span>instancedata<span class=\"k\">)</span><span class=\"k\">{</span>","                    <span class=\"k\">if</span> <span class=\"k\">(!</span>instances<span class=\"k\">[</span>instancedata<span class=\"k\">.</span>id<span class=\"k\">])</span> <span class=\"k\">{</span>","                        instances<span class=\"k\">[</span>instancedata<span class=\"k\">.</span>id<span class=\"k\">]</span> <span class=\"k\">=</span> newInstance<span class=\"k\">(</span>instancedata<span class=\"k\">);</span>","                    <span class=\"k\">}</span>","                    <span class=\"k\">else</span> <span class=\"k\">{</span>","                        instances<span class=\"k\">[</span>instancedata<span class=\"k\">.</span>id<span class=\"k\">].</span>update<span class=\"k\">(</span>instancedata<span class=\"k\">);</span>","                    <span class=\"k\">}</span>","                <span class=\"k\">}</span><span class=\"k\">);</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">;</span>","    <span class=\"k\">}</span><span class=\"k\">());</span>","    ","    <span class=\"k\">var</span> ajaxUpdater <span class=\"k\">=</span> <span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","        <span class=\"c\">/*var $ = {</span>","<span class=\"c\">            getJSON: function(mock, it, callback){</span>","<span class=\"c\">                callback([{</span>","<span class=\"c\">                    id: \"123\",</span>","<span class=\"c\">                    workflowName: \"Praktikumsvermittlung\",</span>","<span class=\"c\">                    create: 1200004338,</span>","<span class=\"c\">                    finished: 1296154338,</span>","<span class=\"c\">                    lastEvent: \"terminateInstance\"</span>","<span class=\"c\">                }]);</span>","<span class=\"c\">            }</span>","<span class=\"c\">        }; //*/</span>","        <span class=\"k\">return</span> <span class=\"k\">{</span>","            init<span class=\"k\">:</span> <span class=\"k\">function</span> loop<span class=\"k\">()</span><span class=\"k\">{</span>","                $<span class=\"k\">.</span>getJSON<span class=\"k\">(</span>POLL_URL<span class=\"k\">,</span> <span class=\"k\">{}</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span>data<span class=\"k\">)</span><span class=\"k\">{</span>","                    overview<span class=\"k\">.</span>update<span class=\"k\">(</span>data<span class=\"k\">);</span>","                <span class=\"k\">}</span><span class=\"k\">);</span>","                setTimeout<span class=\"k\">(</span>loop<span class=\"k\">,</span> <span class=\"s\">5000</span><span class=\"k\">);</span>","                <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">;</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">;</span>","    <span class=\"k\">}</span><span class=\"k\">()).</span>init<span class=\"k\">();</span>","<span class=\"k\">}</span><span class=\"k\">);</span>"];
_$jscoverage['src/overview.js'][1]++;
$((function () {
  _$jscoverage['src/overview.js'][2]++;
  var POLL_URL = "UpdateController?type=Instance";
  _$jscoverage['src/overview.js'][3]++;
  var SINGLE_INSTANCE_LINK = "SingleInstanceController?instance=";
  _$jscoverage['src/overview.js'][4]++;
  if (((typeof Array.prototype.forEach) !== "function")) {
    _$jscoverage['src/overview.js'][5]++;
    Array.prototype.forEach = (function (callback) {
  _$jscoverage['src/overview.js'][7]++;
  var len = this.length;
  _$jscoverage['src/overview.js'][8]++;
  if (((typeof callback) != "function")) {
    _$jscoverage['src/overview.js'][9]++;
    throw new TypeError();
  }
  _$jscoverage['src/overview.js'][11]++;
  var thisObject = arguments[1];
  _$jscoverage['src/overview.js'][12]++;
  for (var i = 0; (i < len); (i++)) {
    _$jscoverage['src/overview.js'][13]++;
    if ((i in this)) {
      _$jscoverage['src/overview.js'][14]++;
      callback.call(thisObject, this[i], i, this);
    }
}
});
  }
  _$jscoverage['src/overview.js'][19]++;
  function prettyDateDiff(since) {
    _$jscoverage['src/overview.js'][20]++;
    var diff = ((new Date().getTime() - (since * 1000)) / 1000), day_diff = Math.floor((diff / 86400));
    _$jscoverage['src/overview.js'][22]++;
    if ((isNaN(day_diff) || (day_diff < 0))) {
      _$jscoverage['src/overview.js'][23]++;
      return;
    }
    _$jscoverage['src/overview.js'][24]++;
    var date = new Date((since * 1000));
    _$jscoverage['src/overview.js'][25]++;
    return ("<span title=\"" + date.getDay() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + "\">" + (((day_diff == 0) && (((diff < 60) && "gerade eben") || ((diff < 120) && "vor einer Minute") || ((diff < 3600) && ("vor " + Math.floor((diff / 60)) + " Minuten")) || ((diff < 7200) && "vor einer Stunde") || ((diff < 86400) && ("vor " + Math.floor((diff / 3600)) + " Stunden")))) || ((day_diff == 1) && "Gestern") || ((day_diff < 7) && ("vor " + day_diff + " Tagen")) || ((day_diff < 31) && ("vor " + Math.ceil((day_diff / 7)) + " Wochen")) || ("vor " + Math.ceil((day_diff / 365)) + " Jahren")) + "</span>");
}
  _$jscoverage['src/overview.js'][37]++;
  var prettyEvent = {"terminateInstance": "Instanz beendet", "createInstance": "Instanz gestartet", "humanActivityExecuted": "Aktivit\u00c3\u00a4t (Human-Task) wurde ausgef\u00c3\u00bchrt", "eventActivityExecuted": "Aktivit\u00c3\u00a4t (Event) wurde ausgef\u00c3\u00bchrt", "WSActivityExecuted": "Aktivit\u00c3\u00a4t (Webservice-Aufruf) wurde ausgef\u00c3\u00bchrt", "WSProviderSelected": "Anbieter ausgew\u00c3\u00a4hlt", "startActivityExecution": "Aktivit\u00c3\u00a4t unmittelbar vor Ausf\u00c3\u00bchrung", "DataTransferredToWS": "\u00c3\u009cbertragung von Daten an Webservice", "DataTransferredFromWS": "R\u00c3\u00bcckgabe von Daten von einem Webservice", "HumanTaskExecutorSelected": "Benutzer f\u00c3\u00bcr Aktivit\u00c3\u00a4t ausgew\u00c3\u00a4hlt", "DataTransferredToHuman": "\u00c3\u009cbertragung von Daten an Menschen", "DataTransferredFromHuman": "Eingabe von Daten durch Menschen"};
  _$jscoverage['src/overview.js'][52]++;
  var overview = (function () {
  _$jscoverage['src/overview.js'][53]++;
  var instances = {};
  _$jscoverage['src/overview.js'][54]++;
  var instancestable = $("#instancestable");
  _$jscoverage['src/overview.js'][55]++;
  var entryPrototype = $("<tr><td><a/></td><td/><td/><td/></tr>");
  _$jscoverage['src/overview.js'][56]++;
  function newInstance(data) {
    _$jscoverage['src/overview.js'][57]++;
    var that = {};
    _$jscoverage['src/overview.js'][58]++;
    var entry = entryPrototype.clone();
    _$jscoverage['src/overview.js'][59]++;
    var tds = entry.find("td");
    _$jscoverage['src/overview.js'][61]++;
    that.update = (function (data) {
  _$jscoverage['src/overview.js'][62]++;
  $(tds[0]).find("a").attr("href", (SINGLE_INSTANCE_LINK + data.id)).text(data.id);
  _$jscoverage['src/overview.js'][63]++;
  $(tds[1]).text(data.workflowName);
  _$jscoverage['src/overview.js'][64]++;
  $(tds[2]).html(prettyDateDiff(data.create));
  _$jscoverage['src/overview.js'][65]++;
  $(tds[3]).html((prettyEvent[data.lastEvent] + " " + prettyDateDiff(data.finished)));
  _$jscoverage['src/overview.js'][66]++;
  if ((data.lastEvent == "terminateInstance")) {
    _$jscoverage['src/overview.js'][67]++;
    entry.addClass("finished-instance");
  }
});
    _$jscoverage['src/overview.js'][70]++;
    entry.hide();
    _$jscoverage['src/overview.js'][71]++;
    instancestable.append(entry);
    _$jscoverage['src/overview.js'][72]++;
    that.update(data);
    _$jscoverage['src/overview.js'][73]++;
    entry.fadeIn();
    _$jscoverage['src/overview.js'][74]++;
    entry.css("display", "table-row");
    _$jscoverage['src/overview.js'][75]++;
    return that;
}
  _$jscoverage['src/overview.js'][78]++;
  return ({update: (function (data) {
  _$jscoverage['src/overview.js'][80]++;
  data.forEach((function (instancedata) {
  _$jscoverage['src/overview.js'][81]++;
  if ((! instances[instancedata.id])) {
    _$jscoverage['src/overview.js'][82]++;
    instances[instancedata.id] = newInstance(instancedata);
  }
  else {
    _$jscoverage['src/overview.js'][85]++;
    instances[instancedata.id].update(instancedata);
  }
}));
})});
})();
  _$jscoverage['src/overview.js'][92]++;
  var ajaxUpdater = (function () {
  _$jscoverage['src/overview.js'][104]++;
  return ({init: (function loop() {
  _$jscoverage['src/overview.js'][106]++;
  $.getJSON(POLL_URL, {}, (function (data) {
  _$jscoverage['src/overview.js'][107]++;
  overview.update(data);
}));
  _$jscoverage['src/overview.js'][109]++;
  setTimeout(loop, 5000);
  _$jscoverage['src/overview.js'][110]++;
  return this;
})});
})().init();
}));
