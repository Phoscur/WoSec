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
if (! _$jscoverage['src/Task.js']) {
  _$jscoverage['src/Task.js'] = [];
  _$jscoverage['src/Task.js'][2] = 0;
  _$jscoverage['src/Task.js'][15] = 0;
  _$jscoverage['src/Task.js'][16] = 0;
  _$jscoverage['src/Task.js'][17] = 0;
  _$jscoverage['src/Task.js'][23] = 0;
  _$jscoverage['src/Task.js'][28] = 0;
  _$jscoverage['src/Task.js'][33] = 0;
  _$jscoverage['src/Task.js'][34] = 0;
  _$jscoverage['src/Task.js'][40] = 0;
  _$jscoverage['src/Task.js'][45] = 0;
  _$jscoverage['src/Task.js'][50] = 0;
  _$jscoverage['src/Task.js'][56] = 0;
  _$jscoverage['src/Task.js'][57] = 0;
  _$jscoverage['src/Task.js'][58] = 0;
  _$jscoverage['src/Task.js'][64] = 0;
  _$jscoverage['src/Task.js'][69] = 0;
  _$jscoverage['src/Task.js'][75] = 0;
  _$jscoverage['src/Task.js'][77] = 0;
  _$jscoverage['src/Task.js'][80] = 0;
}
_$jscoverage['src/Task.js'].source = ["","<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","    ","<span class=\"c\">// var workflow = WoSec.workflow; need late initializiation because of cross dependency</span>","","<span class=\"c\">/**</span>","<span class=\"c\"> * Ein Task-Objekt ist assoziiert mit einer Aktivit&#195;&#164;t des BPMN SVG Diagramms.</span>","<span class=\"c\"> * Es verwaltet die zugeh&#195;&#182;rige Infobox und das SVGRectangle,</span>","<span class=\"c\"> * an die Anweisungen zur Darstellung delegiert werden.</span>","<span class=\"c\"> * @param {Infobox} infobox</span>","<span class=\"c\"> * @param {SVGRectangle} rectangle</span>","<span class=\"c\"> * @param {String} correspondingActivityID</span>","<span class=\"c\"> * @return {Task} neues Task-Objekt</span>","<span class=\"c\"> */</span>","<span class=\"k\">function</span> newTask<span class=\"k\">(</span>infobox<span class=\"k\">,</span> rectangle<span class=\"k\">,</span> correspondingActivityID<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">var</span> that <span class=\"k\">=</span> Object<span class=\"k\">.</span>create<span class=\"k\">(</span>WoSec<span class=\"k\">.</span>baseObject<span class=\"k\">);</span>","\tinfobox<span class=\"k\">.</span>bindToSVGRectangle<span class=\"k\">(</span>rectangle<span class=\"k\">);</span>","\t","\t<span class=\"c\">/**</span>","<span class=\"c\">\t * @see Infobox.show</span>","<span class=\"c\">\t * @return {Task} self</span>","<span class=\"c\">\t */</span>","    that<span class=\"k\">.</span>showInfobox <span class=\"k\">=</span> infobox<span class=\"k\">.</span>show<span class=\"k\">;</span>","\t<span class=\"c\">/**</span>","<span class=\"c\">\t * @see Infobox.hide</span>","<span class=\"c\">\t * @return {Task} self</span>","<span class=\"c\">\t */</span>","    that<span class=\"k\">.</span>hideInfobox <span class=\"k\">=</span> infobox<span class=\"k\">.</span>hide<span class=\"k\">;</span>","\t<span class=\"c\">/**</span>","<span class=\"c\">\t * Gibt den korrespondierenden Task zur&#195;&#188;ck</span>","<span class=\"c\">\t * @return {Task} korrespondierender Task</span>","<span class=\"c\">\t */</span>","\tthat<span class=\"k\">.</span>getCorrespondingTask <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","        <span class=\"k\">return</span> <span class=\"k\">typeof</span><span class=\"k\">(</span>correspondingActivityID<span class=\"k\">)</span> <span class=\"k\">==</span> <span class=\"s\">\"string\"</span> <span class=\"k\">&amp;&amp;</span> correspondingActivityID <span class=\"k\">!=</span> <span class=\"s\">\"\"</span> <span class=\"k\">&amp;&amp;</span> WoSec<span class=\"k\">.</span>workflow<span class=\"k\">.</span>getTaskByID<span class=\"k\">(</span>correspondingActivityID<span class=\"k\">);</span> <span class=\"c\">// lazy load</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","\t<span class=\"c\">/**</span>","<span class=\"c\">\t * @see SVGRectangle.highlight</span>","<span class=\"c\">\t * @return {Task} self</span>","<span class=\"c\">\t */</span>","    that<span class=\"k\">.</span>highlight <span class=\"k\">=</span> rectangle<span class=\"k\">.</span>highlight<span class=\"k\">;</span>","\t<span class=\"c\">/**</span>","<span class=\"c\">\t * @see Infobox.setContent</span>","<span class=\"c\">\t * @return {Task} self</span>","<span class=\"c\">\t */</span>","    that<span class=\"k\">.</span>setInformation <span class=\"k\">=</span> infobox<span class=\"k\">.</span>setContent<span class=\"k\">;</span>","\t","\t<span class=\"c\">/**</span>","<span class=\"c\">\t * @see SVGRectangle.getPosition</span>","<span class=\"c\">\t */</span>","\tthat<span class=\"k\">.</span>getPosition <span class=\"k\">=</span> rectangle<span class=\"k\">.</span>getPosition<span class=\"k\">;</span>","\t","\t<span class=\"c\">/**</span>","<span class=\"c\">\t * @see SVGRectangle.showAnimation</span>","<span class=\"c\">\t * @return {Task} self</span>","<span class=\"c\">\t */</span>","\tthat<span class=\"k\">.</span>animateData <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","\t\trectangle<span class=\"k\">.</span>showAnimation<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>getCorrespondingTask<span class=\"k\">());</span>","\t\t<span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">;</span>","\t<span class=\"k\">}</span>","\t<span class=\"c\">/**</span>","<span class=\"c\">\t * @see SVGRectangle.markObtrusive</span>","<span class=\"c\">\t * @return {Task} self</span>","<span class=\"c\">\t */</span>","    that<span class=\"k\">.</span>markActive <span class=\"k\">=</span> rectangle<span class=\"k\">.</span>markObtrusive<span class=\"k\">;</span>","\t<span class=\"c\">/**</span>","<span class=\"c\">\t * @see SVGRectangle.markUnobtrusive</span>","<span class=\"c\">\t * @return {Task} self</span>","<span class=\"c\">\t */</span>","    that<span class=\"k\">.</span>markFinished <span class=\"k\">=</span> rectangle<span class=\"k\">.</span>markUnobtrusive<span class=\"k\">;</span>","\t","\t<span class=\"c\">/**</span>","<span class=\"c\">\t * @see SVGRectangle.reset</span>","<span class=\"c\">\t * @return {Task} self</span>","<span class=\"c\">\t */</span>","\tthat<span class=\"k\">.</span>reset <span class=\"k\">=</span> rectangle<span class=\"k\">.</span>reset<span class=\"k\">;</span>","\t","\t<span class=\"k\">return</span> that<span class=\"k\">;</span>","<span class=\"k\">}</span>","","WoSec<span class=\"k\">.</span>newTask <span class=\"k\">=</span> newTask<span class=\"k\">;</span>","","<span class=\"k\">}</span><span class=\"k\">());</span>","","","<span class=\"c\">/*</span>","<span class=\"c\"> * Another version of Task without powerConstructor</span>","<span class=\"c\"> */</span>","<span class=\"c\">/*(function() {</span>","","<span class=\"c\">// import</span>","<span class=\"c\">var workflow = WoSec.workflow;</span>","","<span class=\"c\">function Task(htmlInfobox, svgRectangle, correspondingActivityID) {</span>","<span class=\"c\">    this.infobox = htmlInfobox;</span>","<span class=\"c\">    this.rectangle = svgRectangle;</span>","<span class=\"c\">    this.correspondingActivityID = correspondingActivityID;</span>","<span class=\"c\">}</span>","<span class=\"c\">Task.prototype.highlight = function() {</span>","<span class=\"c\">    this.rectangle.highlight();</span>","<span class=\"c\">};</span>","<span class=\"c\">Task.prototype.getInfobox = function() {</span>","<span class=\"c\">    return this.infobox;</span>","<span class=\"c\">};</span>","<span class=\"c\">Task.prototype.setParticipant = function(participant) {</span>","<span class=\"c\">    this.infobox.setParticipant(participant);</span>","<span class=\"c\">};</span>","<span class=\"c\">Task.prototype.getCorrespondingTask = function() {</span>","<span class=\"c\">    return workflow.getTaskByID(this.correspondingActivityID); // lazy load</span>","<span class=\"c\">};</span>","<span class=\"c\">Task.prototype.markActive = function() {</span>","<span class=\"c\">    this.rectangle.markObtrusive();</span>","<span class=\"c\">};</span>","","<span class=\"c\">Task.prototype.markFinished = function() {</span>","<span class=\"c\">    this.rectangle.markUnobtrusive();</span>","<span class=\"c\">};</span>","","","","<span class=\"c\">// export</span>","<span class=\"c\">WoSec.Task = Task;</span>","","<span class=\"c\">}());*/</span>"];
_$jscoverage['src/Task.js'][2]++;
(function () {
  _$jscoverage['src/Task.js'][15]++;
  function newTask(infobox, rectangle, correspondingActivityID) {
    _$jscoverage['src/Task.js'][16]++;
    var that = Object.create(WoSec.baseObject);
    _$jscoverage['src/Task.js'][17]++;
    infobox.bindToSVGRectangle(rectangle);
    _$jscoverage['src/Task.js'][23]++;
    that.showInfobox = infobox.show;
    _$jscoverage['src/Task.js'][28]++;
    that.hideInfobox = infobox.hide;
    _$jscoverage['src/Task.js'][33]++;
    that.getCorrespondingTask = (function () {
  _$jscoverage['src/Task.js'][34]++;
  return (((typeof correspondingActivityID) == "string") && (correspondingActivityID != "") && WoSec.workflow.getTaskByID(correspondingActivityID));
});
    _$jscoverage['src/Task.js'][40]++;
    that.highlight = rectangle.highlight;
    _$jscoverage['src/Task.js'][45]++;
    that.setInformation = infobox.setContent;
    _$jscoverage['src/Task.js'][50]++;
    that.getPosition = rectangle.getPosition;
    _$jscoverage['src/Task.js'][56]++;
    that.animateData = (function () {
  _$jscoverage['src/Task.js'][57]++;
  rectangle.showAnimation(this.getCorrespondingTask());
  _$jscoverage['src/Task.js'][58]++;
  return this;
});
    _$jscoverage['src/Task.js'][64]++;
    that.markActive = rectangle.markObtrusive;
    _$jscoverage['src/Task.js'][69]++;
    that.markFinished = rectangle.markUnobtrusive;
    _$jscoverage['src/Task.js'][75]++;
    that.reset = rectangle.reset;
    _$jscoverage['src/Task.js'][77]++;
    return that;
}
  _$jscoverage['src/Task.js'][80]++;
  WoSec.newTask = newTask;
})();
