(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.starg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAhIhfByIBVh+IhigEIBdgdIh1hhIB7BTIgGi4IAsCyIBehyIhUB+IBiACIhdAfIB1BhIh6hTIAGC4g");
	this.shape.setTransform(14.7,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,42.3);


(lib.heroshadowg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AzoBQQoJgiAAguQAAgtIJgiQIJggLfAAQLgAAIJAgQIJAiAAAtQAAAuoJAiQoJAgrgABQrfgBoJggg");
	this.shape.setTransform(177.8,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,355.6,22.5);


(lib.heroheadturng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDA47E").s().p("AC9B2ImUi5IgDgCQgHgFgCgKQgCgJAFgKQAGgKAKgEQAKgEAJAEIGUC5QAJAFADAKQADAKgGAKQgFALgKAEQgFACgFAAQgFAAgFgCg");
	this.shape.setTransform(64.1,223.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E4646").s().p("AhkBOQgJgCgGgIQgFgHABgKQACgJAHgGQAIgFAJABQA5AJA+g1IA0g5QAGgHAJgCQAJgCAIAGQAIAFACAJQABAJgFAIQgCADg4A8QhDA7hEAAg");
	this.shape_1.setTransform(45.6,124.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E4646").s().p("ABIBrQhLAAgwhFQgkg0gIhCQgCgKAGgHQAGgIAJgBQAKgBAHAGQAIAFABAKIAFAYQAHAcALAXQAkBJBAgBIABAAQAJAAAHAHQAGAHABAJQAAAKgHAGQgHAHgJAAg");
	this.shape_2.setTransform(110.4,136.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9BD8C").s().p("AgNBdQAEgEAFgJQAIgWgIgVQgJgVgVgJQgPgHgQADQgPACgMAKQgEgaAKgYQAPgkAkgPQAkgPAjAQQAkAPAPAkQAPAjgPAkQgNAegcAPQgWAMgYAAIgNgBg");
	this.shape_3.setTransform(181.9,167.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EED09A").s().p("Ag+CWQg+gbgZg9Qgag+Aag+QAbg+A+gaQA9gZA+AaQA+AbAaA9QAZA+gaA+QgaA+g+AaQgfAMgfAAQgfAAgfgNg");
	this.shape_4.setTransform(182.2,167.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAeQgOgCgJgKQgJgLACgMQADgMALgIQAMgHANACQAPADAIAKQAJALgCALQgCANgMAHQgIAGgLAAIgGgBg");
	this.shape_5.setTransform(105.7,155.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#717C84").s().p("AgGAvQgUgDgMgQQgMgQADgSQADgUAQgLQAQgMATADQAUADAMAQQAMAQgDASQgDAUgQAMQgNAJgPAAIgHgBg");
	this.shape_6.setTransform(97.7,159);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9BC6E5").s().p("AgNBSQgkgGgWgcQgWgcAGghQAFgiAegUQAegUAjAGQAlAGAWAcQAWAcgGAhQgFAigeAUQgXAQgbAAIgQgCg");
	this.shape_7.setTransform(101.3,158);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEAeQgPgCgIgKQgJgLACgMQACgMAMgHQAMgIANADQAOACAJALQAJAKgDAMQgCAMgLAHQgJAGgKAAIgGgBg");
	this.shape_8.setTransform(53.2,146.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#717C84").s().p("AgGAvQgUgDgMgQQgMgQADgSQADgUAQgLQAQgMATADQAUADAMAQQAMAQgDASQgDAUgQAMQgNAJgPAAIgHgBg");
	this.shape_9.setTransform(45.2,150.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9BC6E5").s().p("AgMBSQglgGgWgcQgWgcAGghQAFgiAegUQAegUAjAGQAlAGAWAcQAWAcgGAhQgFAigeAUQgXAQgbAAIgPgCg");
	this.shape_10.setTransform(48.8,149.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7D0B0").s().p("AAfAsQgWgCgYgPQgZgOgNgSQgNgSAGgLQAHgMAWACQAXADAYAOQAZAPANARQANATgGALQgGAKgQAAIgIgBg");
	this.shape_11.setTransform(66.9,175.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3C496").s().p("AgbBVQg7gTghgnQgiglALgjQAMgjAxgMQAygLA6ATQA7ATAiAmQAiAmgLAjQgMAjgyALQgTAFgUAAQghAAgkgMg");
	this.shape_12.setTransform(61.6,176.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7F382C").s().p("AgFiFQBJgPAxAoQAZAUAKAXQhkgShvBtQgjAiggArIgZAkg");
	this.shape_13.setTransform(184.7,67.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3F1910").s().p("AqqBjIVVjkQgbAXg2AgQhsBAiMAtQkdBflYAAQjCAAjVgfg");
	this.shape_14.setTransform(90.4,89.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7F382C").s().p("ApPDUQBigdCEgiQEIhECmgaQDYghA8giQBBgmi6gMQkEgRiqgFQCshOC5gpQF0hRBFC7IiGDQQhwAqi8AiQjjAqjlAAQiTAAiSgRg");
	this.shape_15.setTransform(111.6,55.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#592618").s().p("AI0GtQiyhugWiwQgGg4AJg3IALgrIB3j3IiYDjQhpAzjPA0QmeBooBACIgVhUQgMgxAAhSQABioBAiuQAlhlBlhLQBghGCJggQCIgiCVALQCbALCKA5Ihfh+IBQAUQBjAcBTAnQEJB9AODDIA5gHQBGgDA7ANQC8AqASDCQARDBhdDAQguBggyA6IhsEYIh2ALg");
	this.shape_16.setTransform(123.5,81.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EED09A").s().p("ArNE0IAxkBIUIl1IBiASIiWEnQitEMo9AzQiIANiBAAQiOAAiEgPg");
	this.shape_17.setTransform(106.1,85.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EED09A").s().p("Aj2L4IF34FIB3D7ImLUgg");
	this.shape_18.setTransform(164.4,194.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FADFAE").s().p("Au5RPQBZp2CoslQBVmTBCkUQA1hSCBhAQEBiBF3BUQF5BVDADkQBgByAUBhQhQHUjdMBQhvGChfEjg");
	this.shape_19.setTransform(104.2,150.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,7.3,207.5,266.7);


(lib.heroheadg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9BD8C").s().p("AgCBfQADgFADgJQAGgXgKgUQgLgUgXgHQgPgFgQAFQgOAEgLALQgHgaAHgZQALgmAigTQAigTAlALQAmALATAiQATAjgLAkQgJAggbATQgYASgeAAIgDAAg");
	this.shape.setTransform(173.7,152.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EED09A").s().p("AgsCdQhBgTghg7Qghg7AThAQAThBA7ghQA7ghBAATQBBASAhA8QAhA7gTBAQgSBBg7AhQgmAVgoAAQgWAAgYgHg");
	this.shape_1.setTransform(174,151.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7F382C").s().p("AgZiLQBHgYA2AiQAbARANAWQhmgGhhB6QggAmgbAvIgUAng");
	this.shape_2.setTransform(162.3,53.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F1910").s().p("ApFCqISLlUQhSBai7BWQldClnhAAIhAgBg");
	this.shape_3.setTransform(76.2,84.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7F382C").s().p("AleC8QEAhjCjguQDUg6A3gqQA9gui7AKQikAJiXALIh2AJIBog5QB9hBBygnQFqh+BcCzIhtDgQhrA4i4A4QluBxl9ABg");
	this.shape_4.setTransform(87.9,49.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#592618").s().p("AJsGJQi/hZgriuQgNg3ADg4IAGgsIBZkFIh8D1Qg/A+imBMQlKCZoBA/IgnFFIhxgUIgWmAQgSgvgKhUQgTinAri1QAZhqBchWQBYhSCFgyQEdhpErBSIhuhyIBUAKQBkAQBYAdQEZBeAlDBIA4gNQBFgMA8AGQDCATApDAQApC/hGDMQgjBmgsA/IhKElIh1Aag");
	this.shape_5.setTransform(101.7,70.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EED09A").s().p("AqGB7ISpn9IBkAGIhzE5QiMEgoPBwQilAji4ANIiXAGg");
	this.shape_6.setTransform(88.7,78.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EED09A").s().p("AiqMVIDA4zICVDtIjvVQg");
	this.shape_7.setTransform(158,182.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FADFAE").s().p("AtUSpQAOqBBNseQAmmQAkkPIAlg2QA0hABMgxQDxigGCAoQGDAnDbDOQBtBmAgBfQgYHdiCMdQhAGOg8Evg");
	this.shape_8.setTransform(93.3,142.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3C496").s().p("AhABFQgYgWgFggQgGgmAXggQAYgfAmgGQAmgGAgAXQAgAXAGAnQAEAagLAYQgJgMgOgGQgPgGgQACQgXAEgNASQgNATADAXQABAGAEAJQgggDgYgWg");
	this.shape_9.setTransform(16.6,145.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FADFAE").s().p("AhfCEQg3gogLhDQgKhCAog3QAog2BDgLQBCgKA3AoQA3AoAKBDQAKBCgoA2QgoA3hDALQgOACgMAAQgzAAgrggg");
	this.shape_10.setTransform(16.4,144.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.1,263.6);


(lib.herofaceworriedg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E4646").s().p("AhoBZQgIAAgFgFQgGgFgBgIQgBgJAFgHQAFgGAJgBQBXgLA8g3QAfgdAOgdQAEgIAIgDQAIgCAIADQAIAEADAIQACAIgDAIQgSAjgkAhQhGBDhlAMg");
	this.shape.setTransform(12.5,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E4646").s().p("ABXBoQhogfg5hMQgTgYgLgbQgFgMgDgMQgCgIAEgIQAFgHAIgCQAJgCAHAFQAHAEACAIQACAHAFANQAKAWAQAUQAwA/BaAbQAIACAEAIQAEAHgCAJQgFAOgPAAg");
	this.shape_1.setTransform(78.7,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CDA47E").s().p("AkrBFQgJgIgCgLQgCgNAIgKQAIgLAMgCIIvhZQANgCAKAIQALAIACAMQACANgIAKQgIALgMACIo0BZQgMAAgIgHg");
	this.shape_2.setTransform(41.8,95.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7D0B0").s().p("AgMAdQgbgLgPgRQgPgQAFgMQAFgMAXAAQAWgBAaAMQAbALAQARQAPAQgFAMQgFAMgXABQgXAAgagMg");
	this.shape_3.setTransform(44.6,50.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3C496").s().p("AgQBYQg+gMgmgiQgmgiAHgkQAHgkAwgSQAxgRA8AMQA+AMAmAiQAmAigHAkQgHAkgwASQgdAKghAAQgXAAgYgFg");
	this.shape_4.setTransform(39.4,52.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAfQgPgBgKgJQgKgKABgMQAAgNALgIQALgJANABQAPAAAKAKQAKAJgBAMQAAANgLAJQgKAIgMAAIgCAAg");
	this.shape_5.setTransform(22.2,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#717C84").s().p("AgBAwQgUgBgOgOQgNgOAAgUQABgTAOgOQAPgNATAAQAUABAOAOQAOAOAAATQgBAUgPANQgOAOgTAAIgBAAg");
	this.shape_6.setTransform(18.2,26.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9BC6E5").s().p("AgDBUQgkgCgagZQgagaACgiQABgiAcgYQAbgXAkABQAmACAZAZQAZAagBAiQgCAjgbAXQgaAWgiAAIgEAAg");
	this.shape_7.setTransform(18.2,26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAfQgPgBgKgJQgKgKABgMQAAgNALgIQALgJANABQAPABAKAJQAKAKgBALQAAANgLAJQgKAIgMAAIgCAAg");
	this.shape_8.setTransform(76.9,27.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#717C84").s().p("AAAAwQgVgBgNgOQgOgPAAgSQABgVAOgNQAPgNATAAQAUAAAPAPQAOAPgBASQgBAUgOAOQgPANgTAAIAAAAg");
	this.shape_9.setTransform(72.9,30.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9BC6E5").s().p("AgDBUQglgCgZgaQgZgZABgiQACgjAbgXQAbgYAlACQAlABAZAaQAZAagBAhQgCAkgbAXQgaAWgiAAIgEAAg");
	this.shape_10.setTransform(72.9,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.1,103);


(lib.herofacewinkg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDA47E").s().p("AiEBQQgFgKAEgLQAEgKAKgFIB4g4IhKgeQgLgEgEgKQgFgKAEgKQAEgLALgEQAKgFAKAEIC+BLIjoBtQgFADgHAAQgQAAgIgPg");
	this.shape.setTransform(22.4,34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E4646").s().p("AhgBkQgIAAgGgFQgGgGAAgJQgBgIAGgHQAGgGAJAAQBVgDAzhFQAagkAKgjQACgIAIgFQAHgEAIACQAJADAEAHQAEAHgCAJQgLArghApQhABWhnADg");
	this.shape_1.setTransform(11.7,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E4646").s().p("ABUBSQggg5hRgrIhOgiQgIgCgEgIQgEgHACgJQADgIAHgEQAIgEAIADIBZAmQBaAyAkBBQAEAIgCAIQgDAJgHAEQgFACgFAAQgNAAgFgLg");
	this.shape_2.setTransform(79.8,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CDA47E").s().p("AjvBDQgogighgqIgZglQEKBSDmhXQB0grA/g9QgPBDgtBIQhaCOiWAZQgcAFgbAAQh2AAhohZg");
	this.shape_3.setTransform(53.6,98);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7D0B0").s().p("AgIAfQgcgJgRgPQgRgNADgOQAEgMAXgDQAWgDAbAJQAcAIASAPQARAOgEANQgEANgXACIgMABQgSAAgTgGg");
	this.shape_4.setTransform(49.6,54.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3C496").s().p("AgGBaQg/gFgpgeQgqgeACgjQADglAvgXQAugXA9AFQA+AEArAeQApAdgCAkQgDAmguAXQgmASgxAAIgVAAg");
	this.shape_5.setTransform(44.8,56.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAXQgLgHgBgNQgBgMAJgKQAKgKAPgBQANgBALAIQALAJABAMQABANgKAJQgJAKgPABIgCAAQgMAAgKgIg");
	this.shape_6.setTransform(79.1,26.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#717C84").s().p("AgeAlQgQgNgCgUQgBgTANgPQANgPAUgCQATgCAPANQAQANACAUQABATgNAPQgNAPgUACIgEAAQgRAAgNgLg");
	this.shape_7.setTransform(75.4,30.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9BC6E5").s().p("Ag6BAQgcgXgDgiQgCgiAYgbQAZgaAlgDQAkgCAcAWQAcAXADAiQACAigYAbQgZAaglADIgHAAQggAAgZgUg");
	this.shape_8.setTransform(75.4,30.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.1,113.6);


(lib.herofacehappyg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E4646").s().p("AhyBWQgIgFgCgIQgCgIAFgIQAng/BbguQAwgYAqgLQAJgCAHAEQAIAFACAIQACAIgFAIQgEAHgIACQglAKgqAUQhTAogiA4QgGAKgMAAQgFAAgFgDg");
	this.shape.setTransform(12.6,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E4646").s().p("ABKBbQgZg8hLg0IhKgrQgIgDgDgIQgEgIAEgIQAEgIAHgDQAJgDAHADIBUAxQBUA7AcBGQAEAIgEAIQgEAIgHADIgIABQgOAAgFgNg");
	this.shape_1.setTransform(80.7,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CDA47E").s().p("AlNgCQgMgFgEgMQgFgMAFgMQAFgLAMgFQAMgFAMAFQDxBqDPgvQBpgXA5guQAKgIANABQANACAIAKQAIAJgBANQgBANgKAIQgfAZg7AaQhuAviBAAQilAAi1hPg");
	this.shape_2.setTransform(43,97);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7D0B0").s().p("AgMAdQgbgLgPgRQgPgQAFgMQAFgMAXAAQAWgBAaAMQAbALAQARQAPAQgFAMQgFAMgXABQgXAAgagMg");
	this.shape_3.setTransform(45.6,53.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3C496").s().p("AgQBYQg+gMgmgiQgmgiAHgkQAHgkAwgSQAxgRA8AMQA+AMAmAiQAmAigHAkQgHAkgwASQgdAKghAAQgXAAgYgFg");
	this.shape_4.setTransform(40.4,55.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAfQgPgBgKgJQgKgKABgMQAAgNALgIQALgJANABQAPAAAKAKQAKAJgBAMQAAANgLAJQgKAIgMAAIgCAAg");
	this.shape_5.setTransform(23.2,26.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#717C84").s().p("AgBAwQgUgBgOgOQgNgOAAgUQABgTAOgOQAPgNATAAQAUABAOAOQAOAOAAATQgBAUgPANQgOAOgTAAIgBAAg");
	this.shape_6.setTransform(19.2,29.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9BC6E5").s().p("AgDBUQgkgCgagZQgagaACgiQABgiAcgYQAbgXAkABQAmACAZAZQAZAagBAiQgCAjgbAXQgaAWgiAAIgEAAg");
	this.shape_7.setTransform(19.2,29.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAfQgPgBgKgJQgKgKABgMQAAgNALgIQALgJANABQAPABAKAJQAKAKgBALQAAANgLAJQgKAIgMAAIgCAAg");
	this.shape_8.setTransform(77.9,30.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#717C84").s().p("AAAAwQgVgBgNgOQgOgPAAgSQABgVAOgNQAPgNATAAQAUAAAPAPQAOAPgBASQgBAUgOAOQgPANgTAAIAAAAg");
	this.shape_9.setTransform(73.9,33.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9BC6E5").s().p("AgDBUQglgCgZgaQgZgZABgiQACgjAbgXQAbgYAlACQAlABAZAaQAZAagBAhQgCAkgbAXQgaAWgiAAIgEAAg");
	this.shape_10.setTransform(73.9,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.1,104.8);


(lib.herobodyg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKhjIhsgMIjXElImFl3IV9AFIn5F+g");
	this.shape.setTransform(109.8,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3AB68").s().p("AhrBBIDXiMIgcAiIizB1g");
	this.shape_1.setTransform(111.1,163.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3AB68").s().p("AiGBTIENiwIAAAQIkFCrg");
	this.shape_2.setTransform(109.1,155.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3AB68").s().p("AicBgIE4jLIABAQIkxDHg");
	this.shape_3.setTransform(106.5,147.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3AB68").s().p("AifBjIE+jQIABAQIk4DLg");
	this.shape_4.setTransform(105.6,138.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3AB68").s().p("AicBgIE4jLIABAQIkwDHg");
	this.shape_5.setTransform(105.5,128.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3AB68").s().p("AiYBeIEwjGIABAPIkpDCg");
	this.shape_6.setTransform(105.3,119);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3AB68").s().p("AiTBfIAAgFIEmjAIABAQIkiC+g");
	this.shape_7.setTransform(105.3,109.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3AB68").s().p("AiOBiIABgMIEbi6IABAQIkbC5g");
	this.shape_8.setTransform(105.3,99.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3AB68").s().p("AiIBRIERizIABAQIkTC1g");
	this.shape_9.setTransform(105.3,90.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B3AB68").s().p("AiDBOIEHitIABAQIkJCug");
	this.shape_10.setTransform(105.3,80.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3AB68").s().p("Ah+BLID9imIABAQIj/Cng");
	this.shape_11.setTransform(105.3,70.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3AB68").s().p("Ah5BIIDyigIABABIABAPIj1Chg");
	this.shape_12.setTransform(105.3,61.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3AB68").s().p("Ah0BEIDniYIABABIABAOIjqCag");
	this.shape_13.setTransform(105.4,51.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3AB68").s().p("AhuBBIDciSIACADIABANIjgCTg");
	this.shape_14.setTransform(105.4,41.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B3AB68").s().p("AhqA9IDTiKIABADIABAMIjVCMg");
	this.shape_15.setTransform(105.4,32.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3AB68").s().p("AhkA6IDHiEIADAEIAAALIjLCGg");
	this.shape_16.setTransform(105.4,22.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3AB68").s().p("AhfA2IC8h8IADAEIABAKIjBB/g");
	this.shape_17.setTransform(105.4,12.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4A86B6").s().p("AhZiMIC5gDIAICMIjPCTg");
	this.shape_18.setTransform(105.4,20);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#579ED6").s().p("AirJ9IBN2sIC5gxIBRXiIiwDfg");
	this.shape_19.setTransform(105.8,90.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B3AB68").s().p("AgCABIAFgDIgEAGg");
	this.shape_20.setTransform(105.5,176.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DEDEDE").s().p("Ahnn8IjFDZIl5oBIJ+AqILNgiImqH6IiGjOIBcSiIhFBwIiTADg");
	this.shape_21.setTransform(108.6,81.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1A0B03").s().p("ACGByIiqgeIiHg0IgXApIhegIIBLi5IB5ARIF8DGQAJAahEAAQgkAAg7gHg");
	this.shape_22.setTransform(201.7,325.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1A0B03").s().p("AkfBfIF8jGIB5gRIBLC5IhfAIIgVgpIiIA0QhWAThUALQg7AHgkAAQhEAAAJgag");
	this.shape_23.setTransform(28.9,325.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ArRs8IWjAAIhBY0I0nBFg");
	this.shape_24.setTransform(108.5,82.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3B130B").s().p("AqYAFIUnhFIARBzI0/AOg");
	this.shape_25.setTransform(108.7,165.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4F1B0F").s().p("AKeMqImuyVIpQg4IkcS2Ih8AAQgroEAlo4QALiyASiiIAQh/IUngtQBMJFBuQOg");
	this.shape_26.setTransform(114.5,239.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230.6,337.6);


(lib.heroblinkersmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EED09A").s().p("AhGBFQgegcAAgpQAAgnAegdQAdgdApABQAqgBAdAdQAeAdAAAnQAAApgeAcQgdAcgqAAQgpAAgdgcg");
	this.shape.setTransform(64.8,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EED09A").s().p("AhHBFQgdgdAAgoQAAgnAdgdQAegcApgBQAqABAdAcQAeAdAAAnQAAAogeAdQgdAdgqAAQgpAAgegdg");
	this.shape_1.setTransform(10.1,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).to({state:[{t:this.shape_1},{t:this.shape}]},6).to({state:[]},6).to({state:[{t:this.shape_1},{t:this.shape}]},42).to({state:[]},8).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.9,23.4);


(lib.heroarmthumbsupg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEDEDE").s().p("Agbi8IA7E4Ig+BAg");
	this.shape.setTransform(4.2,203.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEDEDE").s().p("AgwhoIBhB+IgsBTg");
	this.shape_1.setTransform(111.2,60.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FADFAE").s().p("AgxCiQgsgIgZgrIgQgpIgIhXQgChXApgiQAVgQAtgGQAygHAeADQA7AEAQAlQAUAwAFBNQAFBVgVAfQgUAdg0AMQgcAHgdAAQgXAAgYgEg");
	this.shape_2.setTransform(125.6,32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EED09A").s().p("AgvgDQAWhsAmAHQAmAHAJBhQAEAvgDAvIh6ALQADg3ALg1g");
	this.shape_3.setTransform(120.2,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah/gFIB3i7ICIDSIhJCvg");
	this.shape_4.setTransform(113.8,46.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ApPIDIBsh2QCIiXCJioQG0oZEan7IBpDOQh2D1jVFTQmnKknXHTg");
	this.shape_5.setTransform(61.3,126.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,223);


(lib.heroarmscratchg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEDEDE").s().p("AhmgPIDIgTIAFBFg");
	this.shape.setTransform(70,42.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiTgSIDehPIBKCwIkVATg");
	this.shape_1.setTransform(69.7,30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmCIoIAfgOQAngUApgaQCEhVBih+QE8mPh/qJIDfhPIALA5QAMBJAHBRQAVEDglDrQg0FIijDrQjLEnluCCg");
	this.shape_2.setTransform(40.4,105.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FADFAE").s().p("AiSCPQgZgVgNg8QgNg4AJgkQAJgkCJg0QCJg0AeAbQApAnASBPQAIAmABAgIiHBMQgqANguAKQguAJgdAAQgdAAgMgKg");
	this.shape_3.setTransform(63.7,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.5,190.3);


(lib.heroarmscratchfingerg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EED09A").s().p("AhCgHQgOAMgTAMQgmAZgagBQgegCgagaQgZgYANgKQA8guARgLQBIgvAgALQAsAOBjA6QBrA8AZAeQAkArhOARIhVAJg");
	this.shape.setTransform(23.6,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.3,23.4);


(lib.heroarmonhipg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhECQIgijvICOg0IA/Eng");
	this.shape.setTransform(28.4,113.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FADFAE").s().p("AheCVQgKgFgFhqQgGhrAKgmQAJgiAvgJQAUgDArACQAlADARANQAkAcAGBPIACBPIgIAmQgQAogjAKQgmALgzACIgZABQgaAAgHgEg");
	this.shape_1.setTransform(11.2,117.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3E3E3").s().p("AhAh0ICBDHIhVAhg");
	this.shape_2.setTransform(40,112.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ak3GqIBIgbQBXghBIgjQDmhtgChOQgEh9kVi2QhXg5hog4IhXgtIAllCIB9BBQCWBUB7BdQGNEqgKETQgGDMlYCbQhqAwiBAlIhqAcg");
	this.shape_3.setTransform(47.4,64.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.5,132.4);


(lib.heroarmipaddowng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiqAgID1ioIBhB1IjACcg");
	this.shape.setTransform(63.5,156.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FADFAE").s().p("AhxCNQgUgXgZgwQgRggASgmIAVghIA7g2QA/g0AsAJQAogWAegKQAxgRAOASQANARgXAcQgQAUgfAVQAqAugTApQgUAug4A0Qg+A5gvAEIgEAAQgaAAgbgeg");
	this.shape_1.setTransform(77.8,167.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3E3E3").s().p("AhxAFIDjhEIixB/g");
	this.shape_2.setTransform(56.8,150.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiBIsQi7kcgGjdQgIkVEsk4QCWibCXhlIA1FGQhbBBhcBiQi4DGgKCrQgICjCZDtQBNB1BPBWIjACAQhbhhheiOg");
	this.shape_3.setTransform(47.1,79.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#595959").s().p("AlNCeQgJgLACgPQACgOALgJIKdoYInKNXg");
	this.shape_4.setTransform(34.1,126);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B4B4B").s().p("AjDJ4QgPgCgJgLImwobQgJgLABgOQACgPAMgJIMxqOQALgJAOABQAOACAJALIGwIbQAJALgBAOQgCAPgLAJIsxKOQgKAIgMAAIgDAAg");
	this.shape_5.setTransform(66,133.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.9,197);


(lib.heroarmipadg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADFAE").s().p("AiNDmQhngLgthJQgegxgKhhQgMhzBQhFQA8g0BUgKQBLgJA9AgQBJAnAEBRQACA2AhBbQAQAuAQAkICpAeQgjBWikAIIgcABQhSAAikgTg");
	this.shape.setTransform(162,206.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(87,185,216,0.098)").s().p("Aw7qjMAgxAGUQAjAHAUAeQAUAdgHAjIijNOg");
	this.shape_1.setTransform(197.5,76.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBEBEB").s().p("AKRCPI0nj9QgGgCgEgFQgDgFABgHQACgGAFgEQAFgEAHABIUlD+QAGABAEAFQAEAFgBAHQgBAGgFADQgEAEgGAAg");
	this.shape_2.setTransform(148.1,190.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBEBEB").s().p("ApshnQgGgBgEgFQgDgGABgGQABgHAFgDQAGgEAGABITSDtQAHABAEAGQADAFgBAHQAAAFgFAEQgEAEgGAAg");
	this.shape_3.setTransform(149.3,184.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBEBEB").s().p("AK6CXI15kNQgHgCgDgFQgEgFACgHQABgHAGgDQAFgEAGACIV5ENQAGABAEAFQADAFAAAHQgCAGgEADQgFAEgGAAg");
	this.shape_4.setTransform(150.5,178.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F5F5F").s().p("AASAYIAEgYQABgEgBgEQgBgDgEgBQgFgBgGAGIgFAcIgGgBIAFgYQAAgGAAgDQgCgDgDAAQgEgCgHAGIgGAcIgGgBIAIgnIAFABIgBAGIABAAQACgCAEgCQADgBAEAAQAEABABACQADADAAAEIAHgEQADgCAEABQAGABACAEQACAEgBAIIgFAZg");
	this.shape_5.setTransform(149.4,43.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5F5F5F").s().p("AgDAVQgDAAgDgDIgGgFQgBgCgBgFIAAgIQAAgEADgFIAGgGQADgDADAAIAGAAIAHADIAEAFIADAHIAAAIIgEAJIgEAGQgDADgEAAIgDAAIgDAAgAgBgOIgEADIgDADIgCAHIgBAFIACAFIADAEIAEADIAEgBIAEgDIADgDIACgHIABgGIgCgEIgDgFIgEgCIgBAAIgDABg");
	this.shape_6.setTransform(144.1,42.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F5F5F").s().p("AgBAVIgHgDIgFgFIgDgHIABgIQAAgFADgEIAFgGIAHgDQACgBAEABIAHADIAEAEIgEAEIgDgDIgEgCIgFAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABgBAAIgDAFIgCAGIgBAFQAAAEACACIADAEIAEACIAFgBIAEgCIACAFIgGADIgFAAIgBAAg");
	this.shape_7.setTransform(140.4,42);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5F5F5F").s().p("AgDADIgBgDQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAIgCABg");
	this.shape_8.setTransform(137.2,43);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F5F5F").s().p("AgIAcIAHgnIAGABIgHAngAABgVIgBgDQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAIADgBIADACIABAEIgCACIgDABg");
	this.shape_9.setTransform(135.8,40.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F5F5F").s().p("AgIAbIAIgnIAFACIgGAngAADgTIgCgCIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIADgBQABAAAAAAQABABAAAAQAAAAABAAQAAAAAAABIABADIgCADIgCABIgCAAg");
	this.shape_10.setTransform(133.8,39.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F5F5F").s().p("AgRARIABgDIAZgaIgRgEIABgFIAZAEIgBAEIgZAaIAUAEIgBAGg");
	this.shape_11.setTransform(130.9,40.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5F5F5F").s().p("AgCAeQgDAAgBgDQgCgCABgFIAJgyIAGACIgIAyQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAIAAABIABAAIAAAFIgBABg");
	this.shape_12.setTransform(128.4,38.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F5F5F").s().p("AAGAfIgGgWIgJAIIgCALIgHgCIALg6IAHACIgIAnIAAAAIAUgRIAHABIgQANIAKAbg");
	this.shape_13.setTransform(125.5,38.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5F5F5F").s().p("AAAAFQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgBgDIACgDIADgBQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAIABADIgDAEIgCAAIAAAAg");
	this.shape_14.setTransform(122,40);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5F5F5F").s().p("AABAXIgCgiIgOAeIgIgBIgCgpIAGABIACAjIAPggIAFACIACAjIAPggIAHABIgSAlg");
	this.shape_15.setTransform(119.2,37.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5F5F5F").s().p("AAAAXIgBgiIgOAeIgHgBIgEgpIAHABIABAjIAQggIAFACIADAjIAPggIAFABIgSAlg");
	this.shape_16.setTransform(113.5,36.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5F5F5F").s().p("AAAAXIAAgiIgPAfIgIgCIgCgpIAGABIACAjIAPgfIAFABIACAXIABAMIAOggIAHABIgSAlg");
	this.shape_17.setTransform(107.8,35.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ANIDfI6mlHQgHgCgEgGQgFgGABgIIAQhRQACgHAGgFQAGgEAIABIamFHQAHACAEAGQAFAHgCAHIgPBRQgBAIgHAEQgFADgFAAIgEAAg");
	this.shape_18.setTransform(186.9,50.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77BB8B").s().p("AgEAaQgLgCgGgJQgGgJACgKQACgLAJgGQAJgGAKACQALACAGAJQAGAJgCAKQgCALgJAGQgHAFgHAAIgFgBg");
	this.shape_19.setTransform(92.8,32.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7CB79").s().p("AgEAaQgLgCgGgJQgGgJACgKQACgLAJgGQAJgGAKACQALACAGAJQAGAJgCAKQgCALgJAGQgHAFgHAAIgFgBg");
	this.shape_20.setTransform(85.5,30.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E69291").s().p("AgEAaQgLgCgGgJQgGgJACgKQACgLAJgGQAJgGAKACQALACAGAJQAGAJgCAKQgCALgJAGQgHAFgHAAIgFgBg");
	this.shape_21.setTransform(78.2,29.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EBEBEB").s().p("AwWhsIAii0MAgLAGMIgiC0g");
	this.shape_22.setTransform(174.7,47.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAGAuIgShDIgBAAIgKA9IgSgEIARhUIATADIATBDIAAAAIAKg9IASADIgQBVg");
	this.shape_23.setTransform(196.1,159.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIAtQgIgCgHgFQgGgEgEgHQgEgGgCgKQgBgIACgKQACgJAFgJQAFgIAFgEQAGgFAIgBQAHgCAJACQAJABAGAFQAGAEAFAHQAEAHABAIQABAIgCAKQgCAMgEAHQgFAIgGAEQgGAFgIACIgIAAIgIAAgAgJgWQgGAGgDANQgDALAEAKQAEAIAJACQAIACAGgHQAHgHACgNQADgMgEgIQgEgIgJgBIgEgBQgFAAgFAFg");
	this.shape_24.setTransform(187.2,157.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRApIAQhVIATAEIgQBVg");
	this.shape_25.setTransform(180.8,156.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHAsQgIgBgIgFQgIgFgFgHIAOgLIAIAIQAGAEAFABQAEABAEgCQADgBACgEIAAgEIgDgDIgXgQIgFgGIgCgIIAAgJQAAgEAEgFIAIgHIALgEQAFgBAHACQAIABAGAFQAFADAGAHIgMALIgHgHQgFgCgEgBQgGgCgDACQgCACgBADIAAAEIACADIADADIAPAJQAIAFADAGQADAHgBAIQgBAFgEAFQgDAEgEADQgGADgGABIgFAAIgIgBg");
	this.shape_26.setTransform(175,155.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGAsQgKgBgHgFQgIgFgFgHIANgLIAJAIIALAFQAFABADgCQAEgBABgEIAAgEIgCgDIgEgDIgOgKIgGgEIgFgGIgCgHIAAgJQACgGADgDQACgEAFgDIALgEQAGgBAFACQAHABAIAEQAHAFAEAGIgMALIgHgHQgEgCgFgCQgGAAgDABQgCABgBAEIAAAEIADADIASAMQAFADAFAHQAEAHgCAJIgEAKQgEAFgEACQgGADgGABIgFAAIgHgBg");
	this.shape_27.setTransform(167.9,154.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgiAmIAQhVIA1AKIgDARIghgHIgEARIAdAGIgEAPIgcgGIgEAUIAjAHIgDAQg");
	this.shape_28.setTransform(160.8,152.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgHAsQgIgBgIgFQgIgFgFgHIANgLIAJAIIALAFQAGABADgCQACgBABgEIAAgEIgBgDIgEgDIgOgKIgGgEIgEgGIgDgHIAAgJQACgFADgEQACgEAGgDQAFgDAFgBQAGgBAFACQAIABAHAEQAGAFAFAGIgMALIgIgHQgDgCgGgCQgFAAgDABQgCABgBAEIABAEIACADIARAMQAIAEADAGQADAHgBAJQgBAGgDAEQgDAFgFACQgGADgFABIgGAAIgIgBg");
	this.shape_29.setTransform(153.4,151.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYArIAOhEIgYgFIADgQIBCANIgDAQIgYgFIgMBFg");
	this.shape_30.setTransform(144.1,149.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAIAtIgJgiIgLgCIgGAfIgTgEIARhVIAqAKIAKAGQAEAGABAEQACAGgCAIQgBAJgGAEQgFAGgIABIANAmgAgJgGIAJACQAIACAFgDQAEgCABgGQACgGgEgEQgDgDgIgBIgJgCg");
	this.shape_31.setTransform(135.9,148);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AASAsIgCgWIgYgFIgKAUIgUgEIAqhQIAYAFIALBagAgCADIARAEIgCglIAAAAg");
	this.shape_32.setTransform(127.3,146.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgYAsIAOhFIgYgEIADgRIBCANIgDAQIgYgFIgMBFg");
	this.shape_33.setTransform(121.9,144.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgHAsQgJgCgHgEQgFgDgIgJIAOgMQADAEAGAFQAEAEAGAAQAFACAEgCQADgCABgEIgBgDIgCgDIgDgDIgOgKIgGgEIgEgGIgDgHQgBgEABgFQABgFADgEQADgFAFgCQAEgDAHgBQADgBAJABQAHACAHAEQAHAFAEAGIgMAKQgEgEgDgCQgEgDgFgBQgFgBgEACQgCABgBAEIAAADIADADIACADIAPAKQAIAEADAGQAEAHgCAJQgBAFgDAEQgDAFgFADQgEACgIABIgGABIgHgBg");
	this.shape_34.setTransform(114,143.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6BAA3B").s().p("AJbEJIztjzQgXgEgNgTQgNgTAFgWIAiiyQAEgXATgNQATgNAXAFITuDzQAWAEANATQANATgEAWIgiCyQgEAXgUANQgOAJgQAAIgMgBg");
	this.shape_35.setTransform(155.6,151.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5A595C").s().p("AgEAbQgLgCgGgJQgGgJACgLQACgMAJgGQAJgGAKACQALACAGAJQAGAJgCALQgCAMgJAGQgHAFgIAAIgEgBgAgKgSQgIAFgBAKQgCAJAEAHQAFAHAJACQAIACAGgFQAIgGABgJQACgJgEgHQgFgIgIgBIgFgBQgFAAgFAEgAADAPIgDgLIgEgBIgCAKIgFgBIAFgbIAJACQALACgCAJQgBAFgFAAIAEANgAgDAAIADAAQAFABABgEQACgFgHgBIgCgBg");
	this.shape_36.setTransform(236.2,81);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#519B6D").s().p("AgogGQALg0ArgMQAkAcgJAyQgKA0gsALQglgcAKgxg");
	this.shape_37.setTransform(214,82.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EEE75B").s().p("AA4BbQgRgQgpgJIgLgBIgCAAIgFgCIgDAAIAAAAQhfgWAPhOQAThTBkAUQBXARADA+IAAAAIgBAsQgJAzghAfQABgGgIgIg");
	this.shape_38.setTransform(220.5,85.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6CBCE4").s().p("AhqgBIAQgrIAAAAQAZg5BWARQBmAUgOBSQgPBPhfgPIAAAAIgJgBIgBAAIgLgDQgqgIgVAJIgNAKQgTgpALgxg");
	this.shape_39.setTransform(207.4,81.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D03742").s().p("AhYCnIBFliIBsAUIhFFkg");
	this.shape_40.setTransform(217.1,118);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6BAA3B").s().p("AhYCnIBFliIBsAUIhFFkg");
	this.shape_41.setTransform(198.4,114.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#59595C").s().p("AizCWIAPhPICzijIiLgbIARhWIEfA4IgPBPIi2CiICRAcIgRBWg");
	this.shape_42.setTransform(171.9,109.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#59595C").s().p("AhqEJIBqolIBsAUIhrIlg");
	this.shape_43.setTransform(147.3,94.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#59595C").s().p("AALEZIg4iKIgXB7IhtgWIBqokIBsAVIg1EVIBDhKIB/AZIiaCFIBxDjg");
	this.shape_44.setTransform(119.6,89.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2B2B2B").s().p("AgyEKQgHgCgEgGQgEgFABgHIBfnxQABgHAGgEQAGgEAHABQAHABAEAGQAEAGgBAHIhfHxQgBAGgFAEQgFAEgGAAg");
	this.shape_45.setTransform(277.6,141.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#282928").s().p("AgOBPQghgGgTgcQgTgbAHggQAGghAcgTQAcgSAfAGQAhAGATAcQATAcgHAfQgGAhgcATQgVAOgXAAQgHAAgIgCg");
	this.shape_46.setTransform(36.2,95.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AzFJzIFA5+MAhLAGZIlBZ+g");
	this.shape_47.setTransform(161.1,119.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4B4B4B").s().p("ARNSXMgn/gHuQgjgGgUgeQgUgeAGgjIFF6VQAHgjAegUQAegUAjAGMAn/AHuQAjAHAUAeQAVAdgHAjIlFaVQgHAjgeAUQgWAPgZAAQgJAAgJgBg");
	this.shape_48.setTransform(152.9,117.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,305.9,235.3);


(lib.customersunhappyg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCA37E").s().p("AgLA7QgRgEgJgUQgJgTAFgYQAGgYAPgPQAQgOAQADQARAEAJAUQAJATgFAYQgFAYgQAPQgNAMgMAAIgHgBg");
	this.shape.setTransform(154.4,131.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8BC8B").s().p("AgSApQgOgGgHgOQgJgRAGgRQAFgSARgIQARgJARAGQASAGAIAQQAGAMgBAMQgNgIgPAGQgKAFgDALQgDAKAFAKIAEAGIgKABQgJAAgJgEg");
	this.shape_1.setTransform(106.3,99.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EED09A").s().p("AgWBKQgfgJgPgdQgPgdAKgeQAJgfAdgPQAdgOAeAJQAfAKAPAdQAOAdgJAdQgKAfgdAPQgRAJgSAAQgLAAgMgEg");
	this.shape_2.setTransform(106.1,99.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BAB8A9").s().p("AgRACIAcgWIAHAJIgUAgg");
	this.shape_3.setTransform(121.1,82.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A848D").s().p("AiqB+IFGkGIAQATIlPD+g");
	this.shape_4.setTransform(103.7,96.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#404040").s().p("AgOgCIAdgLIgQAbg");
	this.shape_5.setTransform(123.1,79.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DAD7C6").s().p("AgYgKIAjgOIANARIgUAgg");
	this.shape_6.setTransform(120.5,82);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4FB0BB").s().p("AixB4IFGkJIAdAkIlOD/g");
	this.shape_7.setTransform(103.1,95.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2B2B2").s().p("AguATIBQgKIhegVIBXgHIAXgaIgFAiIAQA4g");
	this.shape_8.setTransform(206.5,179.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E5E5E5").s().p("AhIAGIgJgtICOgVIgEAsIAZBNg");
	this.shape_9.setTransform(205.9,179.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CEDEF0").s().p("AgtAPQgNAAgJgJQgKgHgBgNICdAAQgBANgKAHQgJAJgNAAg");
	this.shape_10.setTransform(146.7,207.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CEDEF0").s().p("AgGANIAAgZIANAAIAAAZg");
	this.shape_11.setTransform(155.3,204.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CEDEF0").s().p("AgGANIAAgZIANAAIAAAZg");
	this.shape_12.setTransform(155.3,188.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FADFAE").s().p("AgtBHQgEgDgDgyQgCgzAEgSQAFgQAWgEQAIgCAVABQASACAIAGQASANADAmIABAlIgFASQgHAUgRAEQgSAGgYABIgKAAQgOAAgEgCg");
	this.shape_13.setTransform(161.4,195.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhXBxQgOAAgJgJQgKgKAAgNIAAjCICeAAIAAALIAlAAQASAAAOAOQAOAOAAASIAABeQAAASgOAPQgOANgSAAIglAAQgCAMgKAJQgJAJgMgBgAAmA5IAlAAQAIABAFgHQAHgFAAgIIAAheQAAgIgHgFQgFgHgIAAIglAAg");
	this.shape_14.setTransform(150.9,197.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FADFAE").s().p("AjUBmIgPhDQCcgaB8g6QA+gdAfgXIBSAuQh0BvitAjQg2ALg2AAg");
	this.shape_15.setTransform(187.8,188.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#81542C").s().p("AgnAFQAKgOAYgHQAWgHAQANQAIAHADAGQglgLgdAMIgVAPg");
	this.shape_16.setTransform(145,39.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#81542C").s().p("AAMAyQgWgLgQgZQgPgZAWgZQALgMAMgGQgbAfAYApQANAVATAQQgJAAgMgFg");
	this.shape_17.setTransform(147.2,53.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#432B13").s().p("AANA1QgTgDgOgdQgNgcAHgaIAKgUQgTAoAfAkQAPASATAKQgFADgGAAIgGgBg");
	this.shape_18.setTransform(100.6,77.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#432B13").s().p("AgnBXQgRgPgDgbQgEgbAYgMQALgFANgBQgKgGgGgNQgMgbAVgbQAVgcAgAGQARADANAIQhGgDAAA3QAAAcAMAbQgOAEgaAUQgRAMAPAVQAHAKAKAHQgIgCgJgIg");
	this.shape_19.setTransform(104.6,59.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#432B13").s().p("AABAtQgOgJgIgdQgIgcAagQQAMgIAPgCQgkAXAKAmQAFAUAMAOIgCAAQgFAAgHgDg");
	this.shape_20.setTransform(121,54.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#432B13").s().p("AgyAJQAHgZAegMQAegLAUAQQALAHAEAKQg0gNgfAYIgTAcQgDgLADgNg");
	this.shape_21.setTransform(121.1,43.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#64401D").s().p("AklFFQgwgKgMgVQgGgKAMgVQAGgKAIgIQgLgIgJgMQgUgXAAgXQAAgXAJgMQAEgHAEgBQgMgHgMgLQgZgWgEgXQgFgXAVgPQAKgIAKgEQgHgEgHgKQgOgSACgdQACgdAVgFQAKgDAKAEQgGgMgDgQQgFgfAOgRQAaghAhADQAQACALAIQgCgIADgNQAHgZAZgYQAdgcAmADQATACANAHQgBgIAEgKQAJgVAbgOQAbgPAnATQAUAKANAMIAJgWQAOgWAXgCQAmgCASAaQAJANABANIAMgQQATgPAcAEQAdAEASAbQAKANADAMIAZABQAeAEAbAMQAbAMgEAjQgCARgHAPIAZABQAcAHAQAjQARAjgTAdIgVAWIANAIQAPAPAIAnQAJApgZAdQgUAWgRAAQgIAAgDgSIgCgSQgIABgKgCQgVgEgKgPQgLgOAFgWIAGgUQgHAJgNAIQgaARghgDQgQgBgZgWIgWgVQgEAJgJALQgSAWgZAJQgYAIgigQIgdgRQgBAGgHAHQgMAOgZAGQgdAIgWgPQgUgOgIgcQgHgYgegBQgagCgNAKQgRAPAHAXQAJAdgGANQgBADgQAJQgPAIgEATQgEAUAIAUIAQArQAGAXgLAjQgFASgHANQgHAkgjAAQgKAAgKgCg");
	this.shape_22.setTransform(132.7,64);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#43413C").ss(2.6,1).p("AglAjIAQgaQAWgcAlgP");
	this.shape_23.setTransform(131.6,86.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#43413C").ss(2.6,1).p("AAnAhQgEgMgMgNQgYgcglgM");
	this.shape_24.setTransform(162.7,83.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F5CFB0").s().p("AgBAPQgNgCgJgFQgJgFABgFQAAgGAKgEQAKgDAMABQAOACAJAFQAJAFgBAFQAAAGgKAEQgIACgJAAIgGAAg");
	this.shape_25.setTransform(153.2,109.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F3C496").s().p("Ag0DFQgfgYAaghIAFgHQACgEAAgHIAAgPQAAi8AChPQAEiOAlD1IAUCPQADAXAFACIAIADQAuALgFAkQgFAjgsAMQgQAFgNAAQgYAAgUgQg");
	this.shape_26.setTransform(151.1,95.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHAKQgFgCgBgGQgBgEAEgEQADgEAGgBQAFgBAFADQAFACAAAGQABAEgEAEQgDAFgGAAIgCAAQgEAAgDgCg");
	this.shape_27.setTransform(160.3,94.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#66584A").s().p("AgMATQgIgGgCgJQgCgJAGgHQAFgIAKgCQAJgBAIAFQAHAGACAJQACAJgGAHQgFAIgKACIgEAAQgGAAgGgEg");
	this.shape_28.setTransform(158.6,95.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B18F6C").s().p("AgYAhQgPgKgCgQQgDgQALgNQAKgOASgDQAQgCAPAJQAOAKADAQQACAQgLANQgKAOgSADIgGAAQgNAAgLgHg");
	this.shape_29.setTransform(158.6,95.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIAKQgEgDgBgFQgBgEAEgEQADgEAGgBQAFgBAFADQAFADAAAFQABAEgEAEQgDAFgGAAIgCABQgEAAgEgDg");
	this.shape_30.setTransform(139,97.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#66584A").s().p("AgMATQgIgGgCgJQgCgJAGgHQAGgIAJgCQAJgBAHAFQAIAGACAJQACAJgGAHQgGAIgJACIgEAAQgGAAgGgEg");
	this.shape_31.setTransform(137.3,98.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B18F6C").s().p("AgZAhQgOgKgDgQQgCgQALgNQAKgOASgDQAQgCAPAJQAOAKACAQQADAQgLANQgKAOgSADIgGAAQgNAAgMgHg");
	this.shape_32.setTransform(137.3,98.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EED09A").s().p("AAGDbIgXgKIg7m+IAAgEIBiASIA3HRQgngKgggNg");
	this.shape_33.setTransform(110.7,123.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EED09A").s().p("AkCCqQgvg/gEgXQgFgbASg2QARgzAfg7QAcgzBHggQAugVBQgQQAxgLCTBMQBKAmBAAoQgEAOgKAPQgTAegcALQgcAKgfgWIgbgZQgCALgHANQgOAZgXAIQgXAKgkgMIgggMQgQAIgTAAIgmgBQgQgBgSgbQgQgdgFgGQgGgGgMAHQgSAKgDABQgJABgBAPQAAAJADAVQACAOgKAKQgJAJgOACQgMADAAAKQAAAJAMAVQAJASABAgQABAQgBAMIAsgaIBHgUIgfAuIiBBPQgWgbgXggg");
	this.shape_34.setTransform(131.3,72.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FADFAE").s().p("AAFIuQh4gIhkgdIhLgdQhcqlgHhWQgGhUBJhUQBbhoCjgNQCtgOBeBKQBVBEAJCGQAEA6gJBnQgNCZgCA5QAqAbAdAqQAeAtAKA2QAQBPgcBHQgcBHg8AlQgVARguAPQhIAZhbAAQgYAAgZgCg");
	this.shape_35.setTransform(138,95.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C87776").s().p("AgLhSIASgGIAGCwIgSABg");
	this.shape_36.setTransform(168.2,152.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C87776").s().p("AgJhhIAWANIgFC0IgUACg");
	this.shape_37.setTransform(109.9,153.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E5E5E5").s().p("Ag5hTIAiAAIBRBcIg9BLg");
	this.shape_38.setTransform(127.4,154.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E5E5E5").s().p("AirgwIFXABIhaBaIgyg6IgvAAIg+BAg");
	this.shape_39.setTransform(140.4,151);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B2B2B2").s().p("AhnAKIBchcIBGAAIAtA/IhEgOIh3B0g");
	this.shape_40.setTransform(138.2,156.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E8A8A9").s().p("AgLAvQAAgJAHgHQAGgHAKAAIAQAAQAIAAAAgIQAAgIgIAAIg4AAQgJAAgHgHQgHgGAAgKQAAgKAHgHQAHgHAJAAIAaAAQAJAAAHgHQAHgHAAgJIAAAQQAAAJgHAHQgHAHgJAAIgaAAQgIAAAAAIQAAAIAIAAIA4AAQAKAAAHAHQAHAGAAAKQAAAJgHAHQgHAHgKAAIgQAAQgKAAgGAHQgHAIAAAJg");
	this.shape_41.setTransform(147.8,178);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C77675").s().p("AhpBxQgNABgKgKQgKgKAAgNIAAjCICeAAIAAALIAlAAQAVABANAPIADAAQAOABAHAEQAOAHAGAUIABAAIADBNQgHAYgSAFIgOAEQgGAMgLAIQgMAIgOAAIgmAAQgBAMgJAJQgJAJgMgBg");
	this.shape_42.setTransform(157.1,201);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E48887").s().p("AhpBxQgNABgKgKQgKgKAAgNIAAjCICeAAIAAALIAlAAQAVABANAPIADAAQAOABAHAEQAOAHAGAUIABAAIADBNQgHAYgSAFIgOAEQgGAMgLAIQgMAIgOAAIgmAAQgBAMgJAJQgJAJgMgBgAAtA6IgCgBQgFgDgCgyQgDgzAEgSQACgGAEgEIgXAAIAACFIAZAAg");
	this.shape_43.setTransform(157.1,201);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E48887").s().p("AgLBDIAAiFIAVAAQgEAEgBAGQgEASACAzQACAyAFADIACABg");
	this.shape_44.setTransform(160.4,200.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B2B2B2").s().p("AARgRIAQAXIhBAMg");
	this.shape_45.setTransform(205.8,173.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C87776").s().p("AlCgGIKDgVIACAXIqEAgg");
	this.shape_46.setTransform(139.4,222.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C87776").s().p("AjXhuIAqgBICrCqICpipIAxgBIjdDfg");
	this.shape_47.setTransform(140.9,157.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E5E5E5").s().p("AhbgEIAPgWIA/g4IAvAAIA6A/IhSBmg");
	this.shape_48.setTransform(140.2,157.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E48887").s().p("AkwmTICOAgICrC6IC6i6IBjgwIAdMmIqFAhg");
	this.shape_49.setTransform(139.4,183.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E5E5E5").s().p("ABYhAIhaAAIFAgMIAhAwIi6BogAlAg1IE+gLIgdBTIk/ADg");
	this.shape_50.setTransform(140,229.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#381610").s().p("AB8g1IhdAJIgpBcIk8gLIANhhIJ1gWIALBeIhlBHg");
	this.shape_51.setTransform(139.4,230);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4F1C12").s().p("AFAGDIjNowIkbgaIiHI/Ig7AAQgVj2ASkPIAVjfIJ2gWQAkEWA1Hvg");
	this.shape_52.setTransform(142.4,260.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E5E5E5").s().p("AhCAeIiFhCIgLiNQCmAzCPCCQBIBBAoA3IhcA2QgthDiMhRg");
	this.shape_53.setTransform(188.8,162.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B2B2B2").s().p("Ag0AhIBIg3Ig5AFIAqgMQArgJAFANQhlA7gEAAIAAgBg");
	this.shape_54.setTransform(91.7,195.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B2B2B2").s().p("AAvgQIgBAgIhcABg");
	this.shape_55.setTransform(92.8,188.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E5E5E5").s().p("Ag8gQIgLgrICQgEIgBAvIiPBQg");
	this.shape_56.setTransform(91.6,196.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E5E5E5").s().p("AheBhQA9i2CJihIAYCHIhLCAQhJCRgBBQIhqAFQADg7Aehbg");
	this.shape_57.setTransform(99.2,168.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FADFAE").s().p("AgMBgQh1iEgWihIBeAOIAIAbQANAiAUAmQA9B6BrB0Ig1AsQg2gjg5hDg");
	this.shape_58.setTransform(101.5,211.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B2B2B2").s().p("AgIANQgDgGAAgHQAAgGADgGQAEgFAEAAQAFAAADAFQAEAGAAAGQAAAHgEAGQgDAFgFAAQgEAAgEgFg");
	this.shape_59.setTransform(111.4,301.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B2B2B2").s().p("Ag7AbIBMg/IArAOIheA7g");
	this.shape_60.setTransform(105.6,300);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E5E5E5").s().p("AhSA9QgSgGAGgOQAHgRAugjQArgkAagLQAVgJATAIQAJAEAGAGIAKAaQAIAcgIAXQgLAIgaAJQgyAQhFADQgKAAgJgDg");
	this.shape_61.setTransform(104.4,302.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#808080").s().p("AhWASQgPgFAJgSQAIgRBaAAQAuAAAsAEQAAALgKAGQgJAEglAJQgqAKghAAIgMABQgdAAgKgFg");
	this.shape_62.setTransform(104.2,306.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B2B2B2").s().p("AgHANQgEgGAAgHQAAgHAEgEQADgGAEAAQAFAAAEAGQADAEAAAHQAAAHgDAGQgEAEgFAAQgEAAgDgEg");
	this.shape_63.setTransform(174.6,303);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B2B2B2").s().p("Ag7gWIArgOIBMA/IgZAKg");
	this.shape_64.setTransform(180.4,301.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E5E5E5").s().p("Ag3AtIglgRQgIgXAJgdIAJgZIAPgKQATgIAVAJQAaALArAjQAvAkAGARQAGAOgSAGIgTADQhFgDgygQg");
	this.shape_65.setTransform(181.5,303.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#808080").s().p("AAkAWQghAAgqgKQglgJgJgEQgGgEgDgHIgBgGIBagDQBaAAAIAQQAJASgPAFQgKAEgdAAIgMAAg");
	this.shape_66.setTransform(181.8,308.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5E7A63").s().p("AApETQgFhtgQh8Qgej3g3hIIAMADQAOAMAPAoQAwCBAqF0g");
	this.shape_67.setTransform(39.2,138.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EED09A").s().p("AgdgBIABgPIA6ANIgCAUg");
	this.shape_68.setTransform(26.1,141.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#936046").s().p("AAJAEQgolHgsAEIAggOIAKADQAOAMAOAvQAsCYAlG8IgiAJQgMilgVilg");
	this.shape_69.setTransform(37,144.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#739478").s().p("AhVCRIALiEQAFhHADgSQAGgiBJgcQAlgNAkgIIgdA6QggBBgKAjQgMAvgQByg");
	this.shape_70.setTransform(31.1,125.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FADFAE").s().p("AgrARQgLgnAIgdIALgVIAbAHQAOAAASAEQAcAGgCANQgBAMgqAFIAFAjQAFAmgDAHQgIASgNAAQgUAAgQg4g");
	this.shape_71.setTransform(27.1,199.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FADFAE").s().p("AgXEsQgeiIAMjeIASjDQAXgZASgNQAngagRA7QgRA7gID/QgECAgBB0g");
	this.shape_72.setTransform(25.9,163.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#936046").s().p("AgoCSQgJgiAFgbQADgQAIgKQgWhrADiZIA7AWIgBATQgECRAABPQAUABANAEQAUAGgBALQgCAMgpAFIAFAkQAEAmgDAHQgIASgMAAQgVAAgQg4g");
	this.shape_73.setTransform(28.7,188.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D7C580").s().p("AgTAdIAAhNIAnAUIAABNg");
	this.shape_74.setTransform(15,186.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D7C580").s().p("AgTAdIAAhNIAnAUIAABNg");
	this.shape_75.setTransform(33.1,195.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D28C67").s().p("Ag4BJIB0ixQgZA2heCbg");
	this.shape_76.setTransform(12.2,192.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#936046").s().p("AimhSIFNCOIAAAXg");
	this.shape_77.setTransform(24.4,190.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D28C67").s().p("AgwiaICBA5IigD8g");
	this.shape_78.setTransform(14.8,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#936046").s().p("AgOjfIAhgJQAGC3ADEWIg3AEg");
	this.shape_79.setTransform(42.7,200.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BB7B58").s().p("AjHCFQgBiDAQijIARiJIArAAIE7CFQAGC2ADEXIg3ADg");
	this.shape_80.setTransform(25.5,193.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#35322B").s().p("AgbDfIg1mdIAPgqIBQASIgDgnIAgAKIAlHxg");
	this.shape_81.setTransform(41.6,193.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#433F36").s().p("AgEANIAAgZIAJAEIAAAVg");
	this.shape_82.setTransform(38.3,165.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#433F36").s().p("AgEAMIAAgXIAJACIAAAVg");
	this.shape_83.setTransform(47.2,168);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#433F36").s().p("AgEAMIAAgUIAJgDIAAAXg");
	this.shape_84.setTransform(65.3,166.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#433F36").s().p("AgEANIAAgYIAJgBIAAAZg");
	this.shape_85.setTransform(57.8,168.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#121212").s().p("AhDAWQgkgHgfgMIgZgKIAAgUIAZALQAfAMAkAGQBxAUBygsIAAAUQhPAehOAAQgjAAgjgGg");
	this.shape_86.setTransform(52.2,166.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FCEFC4").s().p("AgZgKIAzgGIgPAdIghAEg");
	this.shape_87.setTransform(58.9,130.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FADE8C").s().p("Ag/gHIB8gMIADAcIh8ALg");
	this.shape_88.setTransform(62.7,130);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#5E7A63").s().p("AhAgHIB8gLIAFAaIiAALg");
	this.shape_89.setTransform(63.3,130.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#5E7A63").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_90.setTransform(49.4,126.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#5E7A63").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_91.setTransform(49.4,122.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#5E7A63").s().p("AgEg6IAIAAIgCB0g");
	this.shape_92.setTransform(51.1,125.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5E7A63").s().p("AgGA5QALhOgCgjIADAhQACAogGAog");
	this.shape_93.setTransform(73.1,133.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CD863E").s().p("AAIhTQArgtAogSQhJBDg9B3QgfA8gQAvQAOiMBUhag");
	this.shape_94.setTransform(31.3,17);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CD863E").s().p("AAHheQARgyAPgSIhNFFQALifAihig");
	this.shape_95.setTransform(37.5,27.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#CD8580").ss(2,1).p("AhMAHIAxgNQA6gJAuAZ");
	this.shape_96.setTransform(50.3,81.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F3C496").s().p("AgGBpIgXgFQAWgmAShaIAPhVQAFA7gBCoQgMgFgYgEg");
	this.shape_97.setTransform(48.8,61.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#654241").ss(1.3,1).p("AAnAPQgHgJgNgHQgYgRghAE");
	this.shape_98.setTransform(65.8,48.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#654241").ss(1.3,1).p("AgmAPQAGgJAOgHQAYgRAhAE");
	this.shape_99.setTransform(36.8,47.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E0A462").s().p("AlNBYQABgqAEgvQAKhhAVgiQAYgmBtgbQBngYBlACQBiADBNA8QBNA8AkBhQAdBSgLBMQgGAmgLAVIgBABQi2gYiRgHIhrgCIgGjBIgYDCQg6AChTAQQgpAIgeAHQABgSAOhyg");
	this.shape_100.setTransform(52.1,28);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgGALQgFgCgBgFQgCgEADgEQADgFAGgCQAEgBAEACQAFACACAFQABAEgCAEQgDAFgFABIgEABIgGgBg");
	this.shape_101.setTransform(62.1,54.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#66584A").s().p("AgJASQgIgEgCgJQgCgHAEgHQAEgIAJgCQAHgCAIAEQAHAEACAIQADAHgFAIQgEAHgIADIgGABQgEAAgFgDg");
	this.shape_102.setTransform(63.5,55.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#A2B085").s().p("AgSAgQgOgHgEgOQgEgNAIgNQAHgOAQgEQAOgFAOAHQAOAHAEAOQAEANgHANQgIAOgQAEQgGACgFAAQgJAAgIgEg");
	this.shape_103.setTransform(63.5,55.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgGALQgFgCgBgFQgBgEACgEQAEgFAEgBQAFgCAFACQAFACABAFQABAEgDAEQgCAFgGABIgDABIgGgBg");
	this.shape_104.setTransform(37.7,54.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#66584A").s().p("AgJASQgIgEgCgIQgCgIAEgHQAEgHAJgDQAHgCAIAEQAHAEACAIQADAIgFAHQgEAIgIACIgGABQgEAAgFgDg");
	this.shape_105.setTransform(39,55.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A2B085").s().p("AgSAgQgOgGgEgPQgEgNAIgOQAHgNAQgFQAOgEAOAHQAOAGAEAPQAEANgHAOQgIANgQAFQgGABgFAAQgJAAgIgEg");
	this.shape_106.setTransform(39,55.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#739478").s().p("AgFCWQgFgkADgxQACgpgGgUQgJgigghBIgdg6IBFAWQBGAdAMAgQALAdABAqQAAA6gSBfg");
	this.shape_107.setTransform(72.3,124.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EED09A").s().p("AjaCDQhbAGgVAMIgFgvICfg5IA/jGIAYDSQBqAABqAEQDVAIAAAUQAAAhgSAgQlhgii3ALg");
	this.shape_108.setTransform(52.6,37.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FADFAE").s().p("AgCHDQiKgDhXiFQhtikAIlAQAFihBshKQBhhBCIAaQCHAaBZBjQBjBvgNCVQgQDChyCjQgyBHg1ApQg2AogpAAIgCAAg");
	this.shape_109.setTransform(52.2,53.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F3C496").s().p("AgOAhIAEgEQAGgHgBgJQgBgJgHgEQgKgJgMAFQABgKAHgIQAJgMAPgBQAOgCAMAKQAMAJABAQQACAOgKALQgIAKgMADIgIABQgHAAgHgEg");
	this.shape_110.setTransform(82.9,55.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FADFAE").s().p("AgnAxQgUgRgDgaQgCgZAQgUQARgVAagCQAZgDAUARQAUARADAaQACAZgQAUQgRAUgaADIgGAAQgVAAgSgOg");
	this.shape_111.setTransform(83.1,55.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E0B68C").s().p("AgHAkQgMgDgIgKQgKgLACgOQACgPALgKQAMgKAOACQAPABAJAMQAHAIABAKQgMgFgKAJQgHAEgBAJQgBAJAGAHIAEAEQgHAEgHAAIgIgBg");
	this.shape_112.setTransform(20.3,55.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EED09A").s().p("AgFA/QgagDgRgUQgQgUACgZQADgaAUgRQAUgRAZADQAaACARAVQAQAUgCAZQgDAagUARQgSAOgWAAIgFAAg");
	this.shape_113.setTransform(20.2,55.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EED09A").s().p("AhSA/QgHgUgBgYIAAgUIAVgHQAVgIAAgOQAEg7gCgmIBqAAQgBAmACA7QABAQAdANIgBAAIgBATQgDAYgIAUQgYBBg6AAQg7AAgThAg");
	this.shape_114.setTransform(51.1,107.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#739478").s().p("Ag/E2QgigGgdgLIgXgJQgujXgShlQgVh0ACgwQACg4B0glQA6gSA4gHQCRAVA6A4QAeAdAAAYQgQCtgdCnQgOBUgMAxQhPAahNAAQgiAAgjgFg");
	this.shape_115.setTransform(51.6,136.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E0A462").s().p("AjCJqIgagKQgWg7gXhbQgwi2gMiiIgZjmQgOiUALhcQAikLEQgEQEegEBRCVQAhA+AFBjQAEBEgLB9QgVDtgOBgQgXCYg5DhQgFALgiAMQhDAXiKAAQiGAAg0gKg");
	this.shape_116.setTransform(51.6,62.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#433F36").s().p("AiBGMIg5gjQg5klApj0QANhMAWg/IASgvQANgRAZgRQAygiA7ACQA7ACAxAkQAZASANASQBDBKAIFNQAECngJCYQgyAegXAIQgxAShOABIgGAAQhFAAhEghg");
	this.shape_117.setTransform(52.4,199);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FADFAE").s().p("AgEAJIgqgdIABgFQAEgGALAAQANgBAIAKIAfAXQAfAZgHAGIgDAAQgLAAgkgXg");
	this.shape_118.setTransform(60.8,294.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#4A614F").s().p("AgJAaIg8ggIgJA1IgIAAIgDhoIAkgCIBUA7QBQA7gcABIgBAAQgbAAhAgig");
	this.shape_119.setTransform(65.1,297.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EED09A").s().p("AgxApQgDg2gCgbIBtAAIgGA5QgYAUgnAEg");
	this.shape_120.setTransform(62,241.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FADFAE").s().p("Ag0EVQADhuAAh8QACj4gHhHIBuADIgYDTQgcDngWBsg");
	this.shape_121.setTransform(62,264.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FADFAE").s().p("AgtAgQgHgGAfgZIAfgXIAGgFQAHgFAIABQALAAAEAGQACADgBACIgqAdQgkAXgLAAIgDAAg");
	this.shape_122.setTransform(45.1,294.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#4A614F").s().p("AhSA8QgcgBBQg7IBUg7IAkACIgDBoIgIAAIgJg1Ig8AgQhAAigbAAIgBAAg");
	this.shape_123.setTransform(40.8,297.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EED09A").s().p("AAPApQgngEgYgUIgGg6IBtAAQgCAbgDA2IgTACIgQgBg");
	this.shape_124.setTransform(44,241.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FADFAE").s().p("Agfg+IgXjTIBtgDQgHBHACD4QAAB8ADBuIgiAAQgWhsgcjng");
	this.shape_125.setTransform(44,264.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#936046").s().p("AhlD6QBGjvBGiaIA5hqIAGAaQhFB8g0C6QgaBegMBFg");
	this.shape_126.setTransform(18.8,138.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EED09A").s().p("AgHiVIBDAEIgCAbIgpgCQgQBrgbCiIghABg");
	this.shape_127.setTransform(71.4,153.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FADFAE").s().p("AhFEmQAWhyAUh+QAoj8gGg+QgFg9AhAhQARARASAcIgUDDQgfDcg1CBg");
	this.shape_128.setTransform(70.7,160.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#7A8B9A").s().p("AgZF5IAyr3IgZL9g");
	this.shape_129.setTransform(218.1,253);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C0D3E3").s().p("AAaBQIhDg7IAhg6IhPgNIgxh+IBDg+QB6CiA3CtQAaBXADA3QgkhUhLhLg");
	this.shape_130.setTransform(207.5,150.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgJAIABQAEAAADACQACADAAADQAAAEgCACQgDAEgEAAQgDAAgDgEg");
	this.shape_131.setTransform(204.1,131);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgDADAAQAEAAACADQAEAEAAACQAAAEgEADQgCACgEAAQgDAAgDgCg");
	this.shape_132.setTransform(206.3,131.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgCACgDQADgDADAAQAEAAADADQACACAAADQAAAEgCACQgDAEgEAAQgDAAgDgEg");
	this.shape_133.setTransform(208.4,132.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADgBQAEABADADQACACAAADQAAAEgCACQgDADgEABQgDgBgDgDg");
	this.shape_134.setTransform(210.6,132.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgGAGQgDgCABgEQgBgDADgCQADgEADAAQAEAAADAEQADADAAACQAAAEgDACQgDADgEAAQgDAAgDgDg");
	this.shape_135.setTransform(212.8,133);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgEADAAQAEAAADAEQACACAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_136.setTransform(219.1,131.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_137.setTransform(178.3,98.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCACQgDAEgEAAQgDAAgDgEg");
	this.shape_138.setTransform(217.1,132.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQAEACAAADQAAAEgEACQgCAEgEAAQgDAAgCgEg");
	this.shape_139.setTransform(215,132.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#C3D6E8").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_140.setTransform(221.3,192.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#7A8B9A").s().p("ABRgkQgSAEgmAEQhNAKhtAHIA7gLQBOgPBdgbIiNg/IDJAuIAVAAIAMAdQgIAIg0AFIgRCng");
	this.shape_141.setTransform(215.4,192);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#C0D3E3").s().p("AgTD0QAcjXgjiUQgLgvgQgiIgOgZIAAgSQArAkAyBDQAZAiARAaIg0AVIAtAXIhNEYg");
	this.shape_142.setTransform(224.7,149.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#7A8B9A").s().p("AgZBkQAKifguimIAqAlQAvAvAhA3IgyANIAqAVIhXEWIgKAAQAOguAFhQg");
	this.shape_143.setTransform(227.5,151.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#865A8C").s().p("AkLBVQAUihBwhHQCAhRCYAAQBMAAAzAQQhYgChlARQjJAig+BeQhEBlgOBvQgHA0AEAiQgLhBAJhPg");
	this.shape_144.setTransform(194.5,58.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#CF6D6B").ss(1.6).p("ABrg4IAFAzQABAPgKANQgLANgRABIiKAMQgRACgMgLQgNgLgCgQIgEgy");
	this.shape_145.setTransform(227.5,87.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#CF6D6B").ss(1.6,1).p("AEugaIpbA0");
	this.shape_146.setTransform(211.9,84.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#CF6D6B").ss(1.6).p("ABrg4IAFAyQABAQgLANQgKANgRABIiKAMQgRACgMgLQgNgLgCgRIgEgx");
	this.shape_147.setTransform(199.8,90.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F5CFB0").s().p("AgSAJQgCgDAEgGQAFgEAIgEQAHgDAHAAQAHAAACADQABAEgEAEQgFAGgIADQgHAEgHAAQgHAAgBgEg");
	this.shape_148.setTransform(213.5,95.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F3C496").s().p("AgfCDQgWgOAQgXIADgFQABgCAAgFIgBgKIgMiwQgFhdAlCfIAUBcQADAQADABIAGABQAfAFgCAYQgBAXgdAKQgLAFgKAAQgOAAgNgIg");
	this.shape_149.setTransform(214.8,85.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F3C496").s().p("AgDAlQgMgBgJgJQgLgLAAgPQAAgPALgLQAKgLAPAAQAPAAALALQAHAIADAJQgNgDgKAJQgGAGAAAJQAAAJAGAGIAGAEQgJAFgKAAIgEAAg");
	this.shape_150.setTransform(175.8,92.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FADFAE").s().p("AgsAtQgTgSAAgbQAAgZASgTQATgTAaAAQAZgBATATQATASABAbQAAAagTASQgSAUgbAAIAAAAQgZAAgTgTg");
	this.shape_151.setTransform(175.7,92.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#A06BA5").s().p("AlwDCQguh8Ach8QAjiiChhYQCThQClAWQByAOBBA8QAsApAjBRQAZA7gLAmQgGATgLAHQhKAth5gcQgmgJgmgPIgegNIBdA8QiggKhdg/QgdgTgTgXIgOgTQBABshcBvQgcAjgpAfIgjAYQAkBPAnBCQATAhANASQiNgYg4iWg");
	this.shape_152.setTransform(203.5,69);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgBANQgHgBgDgEQgEgFABgFQABgFAFgDQAFgDAFABQAHABADAFQAEAEgBAFQgBAFgFADQgEACgEAAIgCAAg");
	this.shape_153.setTransform(202.6,87.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#717C83").s().p("AgCAVQgJgCgFgHQgFgHABgIQACgIAHgFQAHgFAIABQAIACAFAHQAFAHgBAHQgBAJgHAFQgGAEgHAAIgCAAg");
	this.shape_154.setTransform(200.7,88.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#ACC3DE").s().p("AgFAkQgQgDgKgMQgJgNADgOQACgPAOgIQANgJAPADQAQADAJANQAJAMgCAOQgDAPgNAIQgKAHgMAAIgGgBg");
	this.shape_155.setTransform(200.7,88.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgCANQgFgBgFgFQgDgFABgEQABgFAFgDQAFgDAGABQAGABAEAFQADAEgBAFQAAAFgGADQgEADgEAAIgDgBg");
	this.shape_156.setTransform(227.3,85.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#717C83").s().p("AgDAVQgIgCgFgHQgFgHABgIQABgIAIgFQAHgFAHABQAJACAFAHQAFAHgBAIQgCAIgHAFQgGAEgGAAIgDAAg");
	this.shape_157.setTransform(225.3,86.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#ACC3DE").s().p("AgGAkQgQgDgJgNQgJgMACgOQADgPANgIQAOgJAOADQAQADAKAMQAJANgDAOQgCAPgNAIQgKAHgMAAIgHgBg");
	this.shape_158.setTransform(225.3,86.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#CD7971").ss(1.8,1).p("ABEgSQg9AShKAU");
	this.shape_159.setTransform(215.5,108.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#582719").ss(1.8,1).p("AAngfQgOACgRAJQggASgOAi");
	this.shape_160.setTransform(198.3,79.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#582719").ss(1.8,1).p("AArAVQgGgKgOgKQgbgTgmgC");
	this.shape_161.setTransform(225.7,78);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#EED09A").s().p("AhCCeQg4gRgvgaIgkgXIhwgxQAyhWBig/QBfg9BmgNQBrgOBKAvQBRA0AQB1QAJBBADBDQhrAehjAAQhcAAhWgag");
	this.shape_162.setTransform(206.8,55.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FADFAE").s().p("AiIEtQiIiSgyiQQgrh+BUh7QBMhuCLg4QCLg5BtAmQB6AqAUCWQApEthWC+QhJCih8ARIgLAAQhOAAiBiKg");
	this.shape_163.setTransform(204.9,81.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#865A8C").s().p("AhtDrQhqgNgshOQgrhPAthgQAuhiBrg7QBrg8BrAOQBqANAsBOQArBOgtBhQguBihrA7QhYAxhXAAQgUAAgTgDg");
	this.shape_164.setTransform(185.7,44.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgPgCIAWgLIAJAYIgaADg");
	this.shape_165.setTransform(234.9,171.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FADFAE").s().p("Ag2AUIAagfQAegfAWAFQATAFAIARQAFAMgBAOQgBAPgPAEIhUAIg");
	this.shape_166.setTransform(241.1,168.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#A9C1D8").s().p("AgSEUIi8gHQgHgHgDgOQgHgbAOgfIE4gdIhNjCQAEAvgJg7QgGgmgxhkIgwhcIAXAIQAcAMAcAUQBYBAAvB6QBGC0AKAhQATBHgdAWQgYATidAAIgnAAg");
	this.shape_167.setTransform(229.7,156.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgJgKQAEgHAEgDIATAAQgGAXAAARIgdABQgBgTAJgMg");
	this.shape_168.setTransform(206.8,177.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FADFAE").s().p("AgRABQAGgWAfgCIgHALQgHAOgBAQIgXAFQgDgKAEgMg");
	this.shape_169.setTransform(204.6,177.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#7A8B9A").s().p("AhKh6IAHAiQAJApAPAiQAsBqBKgCIhyAgg");
	this.shape_170.setTransform(207.7,165.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AhhjUIA4ASQA/ANAqgeIAKAYQALAhAGArQAUCIgmC8g");
	this.shape_171.setTransform(214.9,155.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#EED09A").s().p("Ag3BXIhIhoIASgUQARgagDghICQAbIAHAXQAJAdAMAbIAzA2QgUAOghAJQghAKggAAQggAAghgKg");
	this.shape_172.setTransform(212.5,130.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#A9C1D8").s().p("AiGEoQgggbgeh1QgchtgIhsQgHhcAlhKQAMgWAPgTIAMgNQDlguBmBgQA8A4AABHQAAAeAGAkIgMCSIAMAhIgZBSQhOAahSAXQh2AhgrAAQgQAAgGgFg");
	this.shape_173.setTransform(211.1,160.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#A9C1D8").s().p("AASB9QhggCiPguIBXivIEZgaIBKC7QgNAHgZAIQgwAPgxAEIAAAUQgSAIgtAAIgFAAg");
	this.shape_174.setTransform(215.3,195.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#7A8B9A").s().p("AhPAnQhLgSgqgaIgCgSQB3g5CWAPQBMAHA0ATIgLBsQiggEhrgag");
	this.shape_175.setTransform(215,205);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#A0B6CB").s().p("AghHdIgMgFQhJkGgvlaIghkoQB3g5CWAPQBMAHA0ATQgTDmhBFlQggCzgdCFQgVAFgQgEIgMgEIgFAbQgLADgKAAIgMgBg");
	this.shape_176.setTransform(215,245.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FADFAE").s().p("AgEAIIgogiQAAgCACgDQAEgFALAAQANABAIALIAdAbQAcAcgIAFIgCABQgLAAgigdg");
	this.shape_177.setTransform(214.9,295.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#B55F5D").s().p("ABOBEQgcgCg+gpIg5gnIgJAwIgHgBIABhlIAlACIBPBEQBIBDgYAAIgCgBg");
	this.shape_178.setTransform(218.9,300);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FADFAE").s().p("AgEAJIgrgdQgBgCACgDQAEgGALgBQANgBAJALIAgAXQAfAZgHAGIgDABQgLAAglgYg");
	this.shape_179.setTransform(220.4,292.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#B55F5D").s().p("AgJAbIg9ggIgJA2IgIAAIgEhqIAlgCIBWA7QBRA7gcABIgBAAQgcAAhBghg");
	this.shape_180.setTransform(224.8,296.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(0,0,0,0.2)").s().p("Am5BJQjugQAAgWQAAgGAZgIQhmAEiGAAQj3AAivgNQiugMAAgQQAAgSCugNQCvgMD3AAQD3AACvAMQCvANAAASQAAADgJAEQDCgJDwABICkABQgjgJAAgJQAAgWC0gPQC0gQD9AAQD+AAC0AQQCzAPAAAWQAAAWiqAOQiqAQj0AAQApAJAAAIQAAAWjuAQQjuAPlQAAQlPAAjugPg");
	this.shape_181.setTransform(148.7,305.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297.5,314.5);


(lib.customersspeech3g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0654A").s().p("AirAjQgJgKACgNQABgMAMgIQALgIAOACQAOABAJAKIA7BBICujVQAJgKAOgCQAPgCALAHQAMAIACAMQACANgIAKIjlEYg");
	this.shape.setTransform(49.2,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah1EnQingghshtQhuhwAAiOQAAioCUh4QCTh3DPAAQDQAACUB3QCTB4AACoQAACiiKB2QiKB1jHAJIieDKg");
	this.shape_1.setTransform(50.3,50.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.6,101.6);


(lib.customersspeech2g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0654A").s().p("AilCmQhFhFAAhhQAAhgBFhFQBFhFBgAAQBhAABFBFQBFBFAABgQAABhhFBFQhFBFhhAAQhgAAhFhFgAiKAjQgFABgCAFQgDAFACAFQAQAvApAdQApAdAwAAQAxAAApgdQAogdARgvQACgFgDgFQgCgFgFgBQgFgCgFACQgFADgCAFQgOAmghAYQgiAYgpAAQgoAAgigYQghgYgOgmQgCgFgFgDIgFgBIgFABgAAzhaQgIAIAAAMQAAALAIAJQAIAIAMAAQALAAAJgIQAIgJAAgLQAAgMgIgIQgJgIgLAAQgMAAgIAIgAhahaQgIAIAAAMQAAALAIAJQAJAIALAAQAMAAAIgIQAIgJAAgLQAAgMgIgIQgIgIgMAAQgLAAgJAIg");
	this.shape.setTransform(48.6,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhiEhQivgdhxhvQh0hxAAiRQAAipCTh3QCUh4DPAAQDQAACUB4QCTB2AACqQAACeiHB2QiGB1jEAMIhNDeg");
	this.shape_1.setTransform(50.3,51.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.6,103.6);


(lib.customersspeech1g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0654A").s().p("AikgvIAAgTQADgoAYgZQAUgWAbgDIAPAAQAaAAASALQAOAJARAVQARgVAOgJQATgLAaAAIAOAAQAbADAVAWQAYAZADAoIAAATQgIBdidBvQidhvgHhdgAhWh4QgOACgLANQgOAPgDAZIAAAQQAGBGB6BbQB6hbAHhGIAAgQQgDgZgOgPQgMgNgNgCIgLAAQgQAAgKAGQgJAFgOAQIgbAiIgbgiQgNgQgJgFQgKgGgQAAg");
	this.shape.setTransform(51,43.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxEnQjAgPiBh1QiEh0AAicQAAipCUh3QCTh4DPAAQDQAACUB4QCTB2AACqQAACVh6BzQh4Bxi2AYIALDig");
	this.shape_1.setTransform(50.3,51.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.6,103.6);


(lib.customersquestionmarkg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0654A").s().p("AARGHQgmgbgKgzQgJgzAbgmQAaglA0gKQA1gJAoAaQAnAbAJAyQAKA0gbAmQgcAmg1AJQgNACgMAAQglAAgdgTgAgFgrIAig6QAOgfgFgcQgIgvgyAJQggAFgMAZQgLAYAIAuIjHAjQgZiIA9hZQA9haCIgYQB9gWBQAqQBQApATBhQAKA3gTAzQgMAjgiAxQgmA2gKATQgUAqAHAnIjBAiQgRheAyhTg");
	this.shape.setTransform(87.5,62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoAiQgRgOAAgUQAAgTARgOQARgOAXAAQAYAAARAOQARAOAAATQAAAUgRAOQgRAOgYAAQgXAAgRgOg");
	this.shape_1.setTransform(16.8,144.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAmQgQgQAAgWQAAgVAQgQQAPgPAUAAQAVAAAQAPQAPAQAAAVQAAAWgPAQQgPAPgWAAQgUAAgPgPg");
	this.shape_2.setTransform(156.1,152.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhEA+QgdgaAAgkQAAgjAdgZQAcgaAoAAQApAAAdAaQAcAZAAAjQAAAkgcAaQgdAZgpAAQgoAAgcgZg");
	this.shape_3.setTransform(151.4,132.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAiQgRgOAAgUQAAgTARgOQARgOAXAAQAYAAARAOQARAOAAATQAAAUgRAOQgRAOgYAAQgXAAgRgOg");
	this.shape_4.setTransform(87.3,166.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhNBDQgggcAAgnQAAgnAggbQAggcAtAAQAtAAAgAcQAhAbAAAnQAAAnghAcQggAcgtAAQgtAAgggcg");
	this.shape_5.setTransform(86.7,147.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhhBRQgpgiAAgvQAAgvApgiQAoghA5AAQA5AAApAhQApAiAAAvQAAAvgpAiQgpAig5AAQg5AAgogig");
	this.shape_6.setTransform(30.1,126.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlEJIQhig7gzhkQghAGgnAAQidAAhwhsQhwhsAAiaQAAhrA8hbQA6hYBhguQAJiBBhhZQBhhZCGAAQBlAABVA3QA4g6BJgfQBMghBUAAQBpAABbAyQBYAxA2BTQA3gRA6AAQCbAABuBrQBuBrAACXQAABpg5BXQg4BWheAuQALAlAAAnQAABvhRBPQhRBPhzAAQg/AAg4gaQg2gagngtQg4BXhbAyQhdA0hsAAQh3AAhjg+g");
	this.shape_7.setTransform(92.7,64.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.4,171);


(lib.customersg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8BC8B").s().p("AgSApQgOgGgHgOQgJgRAGgRQAFgSARgIQARgJARAGQASAGAIAQQAGAMgBAMQgOgJgOAHQgKAFgDALQgDAKAFAKIAEAGIgKABQgJAAgJgEg");
	this.shape.setTransform(106.1,99.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EED09A").s().p("AgWBLQgfgKgPgdQgPgdAKgdQAJgfAdgPQAdgPAeAKQAfAJAPAdQAOAdgJAeQgKAfgdAPQgRAIgSAAQgLAAgMgDg");
	this.shape_1.setTransform(105.9,99.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BAB8A9").s().p("AgRACIAcgWIAHAJIgUAgg");
	this.shape_2.setTransform(121,82.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A848D").s().p("AiqB+IFGkGIAPATIlND+g");
	this.shape_3.setTransform(103.6,96.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#404040").s().p("AgOgCIAdgLIgQAbg");
	this.shape_4.setTransform(123,79.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DAD7C6").s().p("AgYgLIAjgNIAOARIgVAgg");
	this.shape_5.setTransform(120.3,82);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4FB0BB").s().p("AixB4IFGkJIAdAlIlOD+g");
	this.shape_6.setTransform(102.9,95.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2B2B2").s().p("AguAUIBQgKIhegWIBXgHIAXgZIgFAhIAQA5g");
	this.shape_7.setTransform(206.3,179.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E5E5E5").s().p("AhJAGIgIgtICOgVIgEAsIAZBNg");
	this.shape_8.setTransform(205.8,179.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CEDEF0").s().p("AgtAPQgNAAgJgJQgKgHgBgMICdAAQgBAMgKAHQgJAJgNAAg");
	this.shape_9.setTransform(146.5,207.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CEDEF0").s().p("AgGANIAAgZIANAAIAAAZg");
	this.shape_10.setTransform(155.2,204.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CEDEF0").s().p("AgGANIAAgZIANAAIAAAZg");
	this.shape_11.setTransform(155.2,188.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FADFAE").s().p("AgtBHQgEgDgDgyQgCgzAEgSQAHgZAxAEQASACAIAGQASANADAmIABAlIgFASQgHAUgRAEQgSAGgYABIgKAAQgOAAgEgCg");
	this.shape_12.setTransform(161.3,195.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhXBxQgNAAgKgJQgKgKAAgOIAAjAICdAAIAAAKIAlAAQAUAAAOAOQANAOAAATIAABdQAAATgNAOQgOANgUAAIglAAQgBANgJAIQgKAIgNAAgAAlA6IAlAAQAJAAAGgGQAFgGAAgIIAAhdQAAgIgFgGQgGgGgJAAIglAAg");
	this.shape_13.setTransform(150.7,197.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FADFAE").s().p("AjUBmIgPhDQCcgaB8g5QA+geAfgYIBSAvQh0BwitAiQg2ALg2ABg");
	this.shape_14.setTransform(187.7,188.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#81542C").s().p("AgmAFQAJgNAXgHQAXgHAQANQAIAGADAHQglgMgdAMIgVAPg");
	this.shape_15.setTransform(144.9,39.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#81542C").s().p("AAMAyQgWgLgQgaQgPgZAWgYQALgMAMgGQgbAfAYApQANAVATAQQgJAAgMgFg");
	this.shape_16.setTransform(147.1,53.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#432B13").s().p("AANA1QgTgDgOgdQgNgcAHgaIAKgUQgTAoAfAkQAPASATAKQgFADgGAAIgGgBg");
	this.shape_17.setTransform(100.5,77.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#432B13").s().p("AgnBXQgRgQgDgbQgEgbAYgLQALgFANgBQgKgGgGgOQgMgaAVgcQAVgbAgAFQARADANAIQhGgCAAA3QAAAbAMAbQgOAFgaAUQgRAMAPAUQAHALAKAHQgIgCgJgIg");
	this.shape_18.setTransform(104.4,59.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#432B13").s().p("AABAtQgOgJgIgdQgIgcAagQQAMgIAPgDQgkAYAKAmQAFATAMAPIgCABQgFAAgHgEg");
	this.shape_19.setTransform(120.9,54.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#432B13").s().p("AgyAJQAHgaAegLQAegLAUAQQALAHAEAKQg0gNgfAYIgTAcQgDgLADgNg");
	this.shape_20.setTransform(120.9,43.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#64401D").s().p("AklFFQgwgKgMgVQgGgKAMgVQAGgKAIgIQgKgIgKgMQgUgYAAgWQAAgXAJgMQAEgHAEgBQgMgHgMgLQgZgWgEgXQgEgXAUgQQAKgHAKgEQgHgEgHgKQgOgTACgdQABgcAWgFQAKgDAKADQgGgMgDgPQgFgfAOgSQAaggAhADQAQACALAIQgCgIADgNQAHgZAZgYQAdgcAmADQATACANAHQgBgIAEgKQAJgVAbgOQAbgPAnATQAUAKANAMIAJgWQAOgXAXgBQAmgCASAaQAJANABANIAMgQQATgPAcAEQAdAEASAbQAKANADAMIAZABQAeAEAbAMQAbAMgEAjQgCARgHAPIAZABQAcAHAQAjQARAjgTAdIgVAWIANAIQAPAOAIAoQAJApgZAdQgUAWgRAAQgIAAgDgSIgCgSQgIABgKgCQgVgEgKgPQgLgOAFgXIAGgTQgHAJgNAIQgaARghgDQgQgBgZgWIgWgVQgFAJgIALQgSAWgZAIQgYAJgigQIgdgRQgBAGgHAHQgMAOgZAGQgcAIgXgPQgUgOgIgcQgHgYgegBQgagCgNAKQgRAPAHAXQAJAdgGAMQgBADgQAKQgPAIgEATQgEAUAIAUIAQArQAGAXgLAjQgFASgHANQgHAkgkAAQgJAAgKgCg");
	this.shape_21.setTransform(132.6,64);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#43413C").ss(2.6,1).p("AgkAjIAPgaQAWgcAlgP");
	this.shape_22.setTransform(131.5,86.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#43413C").ss(2.6,1).p("AAnAhQgEgMgMgOQgYgbglgM");
	this.shape_23.setTransform(162.6,83.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F5CFB0").s().p("AgBAOQgNgBgJgFQgJgFABgGQAAgGAKgDQAKgDAMABQAOACAJAFQAJAFgBAFQAAAGgKAEQgHACgIAAIgIgBg");
	this.shape_24.setTransform(153.1,109.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F3C496").s().p("Ag0DGQgggZAbghIAFgGQACgEAAgHIAAgQQAAi8AChPQAEiOAlD2IAUCOQADAYAFACIAIACQAuAMgFAjQgFAkgsALQgQAFgNAAQgYAAgUgPg");
	this.shape_25.setTransform(151,95.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCA37E").s().p("AiQgkIAcAQQAjARAkAGQBwAWBOhaQgVBEguAmQgfAZgjAAQhFAAhXhmg");
	this.shape_26.setTransform(149.6,127.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHAKQgFgCgBgGQgBgEAEgEQADgFAGgBQAFAAAFADQAFADAAAFQABAEgEAEQgDAFgGAAIgCABQgEAAgDgDg");
	this.shape_27.setTransform(160.1,94.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#66584A").s().p("AgMATQgIgGgCgJQgCgJAGgHQAGgIAJgCQAJgBAIAFQAHAFACAKQACAIgGAIQgGAIgJABIgEABQgHAAgFgEg");
	this.shape_28.setTransform(158.4,95.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B18F6C").s().p("AgYAhQgPgKgCgQQgDgQALgNQAKgOASgDQAQgDAPAKQAOAKADAQQACAQgLANQgKAOgSACIgHABQgNAAgKgHg");
	this.shape_29.setTransform(158.4,95.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIAKQgEgDgBgFQgBgEAEgEQADgFAGgBQAFAAAFADQAFADAAAFQABAEgEAEQgDAFgGAAIgCABQgEAAgEgDg");
	this.shape_30.setTransform(138.9,97.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#66584A").s().p("AgMATQgIgGgCgJQgCgJAGgHQAGgIAJgCQAJgBAHAFQAIAFACAKQACAIgGAIQgGAIgJABIgEABQgHAAgFgEg");
	this.shape_31.setTransform(137.2,98.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B18F6C").s().p("AgZAhQgOgKgDgQQgCgQALgNQAKgOASgDQAQgCAPAJQAOAKACAQQADAPgLAOQgKAOgSACIgHABQgNAAgLgHg");
	this.shape_32.setTransform(137.2,98.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EED09A").s().p("AAGDbIgXgKIg8m+IAAgEIBiARIA4HSQgngKgggNg");
	this.shape_33.setTransform(110.6,123.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EED09A").s().p("AkCCqQgvg/gEgXQgFgbASg2QARgzAfg7QAcgzBHggQAugVBQgQQAxgLCTBMQBKAmBAAoQgEAOgKAPQgTAegcALQgcAKgfgWIgbgZQgCALgHANQgOAZgXAIQgXAKgkgMIgggMQgQAIgTAAIgmgBQgQgBgSgbQgQgdgFgGQgGgGgMAHQgSAKgDABQgJABgBAOQAAAKADAVQACAOgKAKQgJAJgOACQgMADAAAKQAAAJAMAVQAJASABAgQABAPgBANIAsgbIBHgTIgfAuIiBBPQgWgbgXggg");
	this.shape_34.setTransform(131.1,72.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FADFAE").s().p("AAFIuQh4gIhkgdIhLgdQhcqlgHhWQgGhUBJhUQBbhoCjgNQCtgPBeBLQBVBEAJCFQAEA7gJBnQgNCagCA4QApAaAeArQAeAsAKA2QAQBQgcBHQgcBHg8AlQgVARguAPQhIAZhbAAQgYAAgZgCg");
	this.shape_35.setTransform(137.9,95.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C87776").s().p("AgMhSIAUgGIAECwIgSABg");
	this.shape_36.setTransform(168.1,152.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C87776").s().p("AgJhhIAWANIgFC0IgUACg");
	this.shape_37.setTransform(109.7,153.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E5E5E5").s().p("Ag5hTIAiAAIBRBcIg9BLg");
	this.shape_38.setTransform(127.2,154.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E5E5E5").s().p("AisgxIFYADIhaBZIgxg6IgvAAIg+BAg");
	this.shape_39.setTransform(140.2,151);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B2B2B2").s().p("AhoAKIBehcIBFAAIAtA/IhEgPIh2B1g");
	this.shape_40.setTransform(138,156.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E8A8A9").s().p("AgLAvQAAgJAHgIQAGgHAKAAIAQAAQAIAAAAgHQAAgIgIAAIg4AAQgJAAgHgHQgHgGAAgKQAAgKAHgHQAGgHAKAAIAaAAQAJAAAHgHQAHgHAAgJIAAAQQAAAJgHAHQgHAHgJAAIgaAAQgIAAAAAIQAAAIAIAAIA4AAQAKAAAHAHQAHAGAAAKQAAAJgHAHQgHAHgKAAIgQAAQgKAAgGAHQgHAHAAAKg");
	this.shape_41.setTransform(147.6,178);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C77675").s().p("AhpBxQgOABgJgKQgKgKAAgNIAAjCICeAAIAAALIAlAAQAVABANAPIAEAAQANABAHAEQAOAHAGAUIABAAIADBNQgHAYgSAFQgIACgHABQgFANgLAIQgMAIgOAAIglAAQgCAMgJAJQgJAJgMgBg");
	this.shape_42.setTransform(157,201);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E48887").s().p("AhpBxQgOABgJgKQgKgKAAgNIAAjCICeAAIAAALIAlAAQAVABANAPIAEAAQANABAHAEQAOAHAGAUIABAAIADBNQgHAYgSAFQgIACgHABQgFANgLAIQgMAIgOAAIglAAQgCAMgJAJQgJAJgMgBgAAtA5IgDAAQgEgDgDgyQgCgzAFgSQABgGAEgEIgXAAIAACEIAZAAg");
	this.shape_43.setTransform(157,201);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E48887").s().p("AgMBDIAAiFIAXAAQgFAEgBAGQgFATADAyQADAyAEADIADABg");
	this.shape_44.setTransform(160.2,200);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B2B2B2").s().p("AARgRIAQAWIhBANg");
	this.shape_45.setTransform(205.6,173.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C87776").s().p("AlCgGIKEgVIABAXIqFAhg");
	this.shape_46.setTransform(139.2,222.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C87776").s().p("AjXhtIAqgCICrCrICpipIAxgCIjdDfg");
	this.shape_47.setTransform(140.8,157.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E5E5E5").s().p("AhbgEIAPgWIA/g4IAvAAIA6BAIhSBlg");
	this.shape_48.setTransform(140,157.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E48887").s().p("AkwmTICOAfICrC7IC6i7IBjgvIAdMmIqFAhg");
	this.shape_49.setTransform(139.2,183.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E5E5E5").s().p("ABYhBIhSAAIE4gLIAhAwIi6BogAlAg2IE+gLIgdBTIk/AEgAgChBIAIAAIgIAAgAAGhBg");
	this.shape_50.setTransform(139.9,229.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#381610").s().p("AB8g1IhdAJIgpBcIk8gLIANhiIJ1gVIALBdIhlBIg");
	this.shape_51.setTransform(139.2,230);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4F1C12").s().p("AFAGDIjNowIkbgaIiHI/Ig7AAQgVj2ASkPIAVjfIJ2gWQAkEVA1Hwg");
	this.shape_52.setTransform(142.3,260.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E5E5E5").s().p("AhCAeIiFhCIgKiNQClAzCPCCQBJBBAmA3IhbA2QgthDiMhRg");
	this.shape_53.setTransform(188.6,162.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B2B2B2").s().p("Ag0AhIBIg3Ig5AFIAqgMQArgKAFAOQhlA7gEAAIAAgBg");
	this.shape_54.setTransform(91.5,195.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B2B2B2").s().p("AAwgQIgBAgIheABg");
	this.shape_55.setTransform(92.6,188.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E5E5E5").s().p("Ag8gQIgLgrICPgEIgBAvIiOBQg");
	this.shape_56.setTransform(91.4,196.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E5E5E5").s().p("AheBhQA9i2CJihIAYCHIhLCAQhJCRgBBRIhqAEQADg7Aehbg");
	this.shape_57.setTransform(99,168.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FADFAE").s().p("AgMBgQh1iEgWihIBeAOIAIAbQANAiAUAmQA9B6BrB0Ig1AsQg2gjg5hDg");
	this.shape_58.setTransform(101.4,211.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B2B2B2").s().p("AgHANQgEgGAAgHQAAgGAEgFQADgGAEAAQAFAAAEAGQADAFAAAGQAAAHgDAGQgEAEgFAAQgEAAgDgEg");
	this.shape_59.setTransform(111.3,301.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B2B2B2").s().p("Ag7AcIBMhAIArAOIheA7g");
	this.shape_60.setTransform(105.4,300);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E5E5E5").s().p("AhSA9QgSgGAGgOQAHgRAugkQArgjAagLQAVgJATAIQAJAEAGAGIAKAaQAIAcgIAXQgLAIgaAJQgyAQhFADQgKAAgJgDg");
	this.shape_61.setTransform(104.3,302.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#808080").s().p("AhWASQgPgFAJgSQAIgRBaAAQAuAAAsAEQAAALgKAGQgJAEglAJQgqAKghAAIgMABQgdAAgKgFg");
	this.shape_62.setTransform(104,306.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B2B2B2").s().p("AgIANQgDgFAAgIQAAgGADgFQAEgGAEAAQAFAAADAGQAEAFAAAGQAAAHgEAGQgDAFgFAAQgEAAgEgFg");
	this.shape_63.setTransform(174.4,302.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B2B2B2").s().p("Ag7gWIArgOIBMA/IgZAKg");
	this.shape_64.setTransform(180.3,301.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E5E5E5").s().p("Ag3AtIglgRQgIgXAJgcIAJgaIAPgKQATgIAVAJQAaALArAkQAuAjAHARQAGAOgSAGIgTADQhFgDgygQg");
	this.shape_65.setTransform(181.4,303.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#808080").s().p("AAkAWQghAAgqgKQglgJgJgEQgGgEgDgHIgBgGIBagDQBaAAAIAQQAJARgPAGQgKAEgdAAIgMAAg");
	this.shape_66.setTransform(181.6,308.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5E7A63").s().p("AApETQgEhtgQh8Qgfj3g3hIIALADQAOAMAQAoQAxCBApF0g");
	this.shape_67.setTransform(39.1,138.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EED09A").s().p("AgdgBIABgPIA6AMIgCAVg");
	this.shape_68.setTransform(26,141.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#936046").s().p("AAJAEQgolIgsAFIAggOIAKADQAOAMAOAvQAsCYAlG8IgiAJQgMilgVilg");
	this.shape_69.setTransform(36.9,144.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#739478").s().p("AhVCRIALiEQAFhHADgSQAGgiBJgcQAlgNAkgIIgdA6QggBBgKAjQgNAvgPByg");
	this.shape_70.setTransform(31,125.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FADFAE").s().p("AgrARQgLgmAIgeIALgVIAbAHQAOAAASAEQAcAHgCAMQgBALgqAGIAFAjQAFAmgDAHQgIASgNAAQgUAAgQg4g");
	this.shape_71.setTransform(26.9,199.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FADFAE").s().p("AgXEsQgeiJAMjdIASjDQAXgZASgNQAngagRA7QgRA7gID/QgECAgBB0g");
	this.shape_72.setTransform(25.8,163.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#936046").s().p("AgoCSQgJgiAFgbQADgQAIgKQgWhrADiZIA7AWIgBATQgECQAABPQA2AFgCASQgCAMgpAFIAFAkQAEAmgDAHQgIASgMAAQgVAAgQg4g");
	this.shape_73.setTransform(28.6,188.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D7C580").s().p("AgTAdIAAhNIAnAUIAABNg");
	this.shape_74.setTransform(14.9,186.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D7C580").s().p("AgTAdIAAhNIAnAUIAABNg");
	this.shape_75.setTransform(33,195.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D28C67").s().p("Ag5BJIB0ixQgYA1hdCcg");
	this.shape_76.setTransform(12.1,192.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#936046").s().p("AimhSIFNCOIAAAXg");
	this.shape_77.setTransform(24.3,190.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D28C67").s().p("AgwiZICAA4IigD7g");
	this.shape_78.setTransform(14.7,179.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#936046").s().p("AgOjfIAhgJQAGC3ADEWIg3AEg");
	this.shape_79.setTransform(42.6,200.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BB7B58").s().p("AjHCFQgBiDAQijIARiJIArAAIE7CFQAGC1ADEYIg3ADg");
	this.shape_80.setTransform(25.3,193.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#35322B").s().p("AgbDfIg1meIAOgoIBRASIgCgpIAfAKIAlHzg");
	this.shape_81.setTransform(41.4,193.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#433F36").s().p("AgEANIAAgZIAJAEIAAAVg");
	this.shape_82.setTransform(38.2,165.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#433F36").s().p("AgEAMIAAgXIAJACIAAAVg");
	this.shape_83.setTransform(47,168);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#433F36").s().p("AgEAMIAAgUIAJgDIAAAXg");
	this.shape_84.setTransform(65.2,166.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#433F36").s().p("AgEANIAAgYIAJgBIAAAZg");
	this.shape_85.setTransform(57.7,168.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#121212").s().p("AhDAWQgkgHgfgMIgZgKIAAgUIAZALQAfAMAkAGQBxAUBygsIAAATQhPAfhQAAQghAAgjgGg");
	this.shape_86.setTransform(52.1,166.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FCEFC4").s().p("AgZgLIAzgFIgPAdIghAEg");
	this.shape_87.setTransform(58.7,130.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FADE8C").s().p("Ag/gIIB9gLIACAcIh8ALg");
	this.shape_88.setTransform(62.5,130);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#5E7A63").s().p("AhAgHIB8gLIAFAaIiAALg");
	this.shape_89.setTransform(63.1,130.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#5E7A63").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_90.setTransform(49.3,126.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#5E7A63").s().p("AgFAGQgCgDAAgDQAAgCACgDQACgCADAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgDAAgCgCg");
	this.shape_91.setTransform(49.3,122.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#5E7A63").s().p("AgDg6IAIAAIgEB0g");
	this.shape_92.setTransform(50.9,125.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5E7A63").s().p("AgGA5QALhOgCgjIADAhQACAogGAog");
	this.shape_93.setTransform(73,133.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CD863E").s().p("AAIhTQArgtAogSQhJBDg9B3QgfA8gQAvQAOiMBUhag");
	this.shape_94.setTransform(31.2,17);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CD863E").s().p("AAHheQARgyAPgSIhNFFQALifAihig");
	this.shape_95.setTransform(37.4,27.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#CD8580").ss(2,1).p("AhMgSIALAMQAOAMARAHQA0AWA7gz");
	this.shape_96.setTransform(50.2,81.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F3C496").s().p("AgGBpIgXgFQAWgmAShbIAPhUQAFA7gBCoQgMgFgYgEg");
	this.shape_97.setTransform(48.6,61.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#654241").ss(1.3,1).p("AAnAPQgGgJgOgHQgYgRghAE");
	this.shape_98.setTransform(65.7,48.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#654241").ss(1.3,1).p("AgmAPQAGgJANgHQAZgRAhAE");
	this.shape_99.setTransform(36.6,47.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E0A462").s().p("AlNBYQABgpAEgwQAKhhAVghQAYgnBtgaQBngZBlADQBhACBOA9QBNA7AkBhQAdBSgLBMQgGAmgLAWIgBAAQi2gYiRgHIhrgCIgGjBIgYDDQg6AChTAPQgpAIgeAHQABgSAOhyg");
	this.shape_100.setTransform(52,27.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgGALQgFgDgBgEQgCgEAEgFQACgEAFgCQAEgBAGACQAFACABAFQABAEgDAEQgCAFgGABIgDABIgGgBg");
	this.shape_101.setTransform(62,54.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#66584A").s().p("AgJASQgIgEgCgIQgCgIAEgHQAEgHAJgDQAHgCAIAEQAHAEACAIQADAIgFAHQgEAIgIACIgGABQgEAAgFgDg");
	this.shape_102.setTransform(63.3,55.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#A2B085").s().p("AgSAgQgOgHgEgOQgEgOAIgNQAHgNAQgEQAOgFAOAHQAOAHAEAOQAEANgHANQgIAOgQAEQgGACgFAAQgJAAgIgEg");
	this.shape_103.setTransform(63.3,55.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgGALQgFgCgBgFQgBgEADgEQACgFAGgCQAEgBAFACQAFACABAFQACAEgEAEQgCAFgFABIgEABIgGgBg");
	this.shape_104.setTransform(37.5,54.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#66584A").s().p("AgJASQgIgEgCgJQgCgHAEgHQAEgIAJgCQAHgCAIAEQAHAEACAIQADAHgFAIQgEAHgIADIgGABQgEAAgFgDg");
	this.shape_105.setTransform(38.9,55.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A2B085").s().p("AgSAgQgOgGgEgPQgEgNAIgOQAHgNAQgFQAOgEAOAHQAOAGAEAPQAEANgHAOQgIANgQAFQgGABgFAAQgJAAgIgEg");
	this.shape_106.setTransform(38.9,55.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#739478").s().p("AgFCWQgFgkADgxQACgpgGgUQgJgigghBIgdg6IBFAWQBGAdAMAgQALAdABApQAAA7gSBfg");
	this.shape_107.setTransform(72.1,124.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EED09A").s().p("AjaCDQhbAGgVAMIgFgvICfg5IA/jGIAYDSIDUAEQDVAIAAAUQAAAhgSAgQlhgii3ALg");
	this.shape_108.setTransform(52.4,37.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FADFAE").s().p("AgCHDQiKgEhXiEQhtilAIk/QAFihBshKQBhhBCIAaQCHAaBZBjQBjBvgNCVQgQDChyCjQgyBHg1ApQg2AogpAAIgCAAg");
	this.shape_109.setTransform(52.1,53.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F3C496").s().p("AgOAhIAEgEQAGgHgBgJQgBgJgHgFQgKgIgMAFQABgKAHgIQAJgMAPgBQAOgCAMAKQAMAJABAQQACAOgKALQgIAKgMADIgIABQgHAAgHgEg");
	this.shape_110.setTransform(82.8,55.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FADFAE").s().p("AgnAxQgUgRgDgaQgCgZAQgUQARgUAagDQAZgDAUARQAUARADAaQACAZgQAUQgRAUgaADIgGAAQgVAAgSgOg");
	this.shape_111.setTransform(82.9,55.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E0B68C").s().p("AgHAkQgMgDgIgKQgKgLACgOQACgPALgKQAMgKAOACQAPABAJAMQAHAIABAKQgMgFgKAIQgHAFgBAJQgBAJAGAHIAEAEQgHAEgHAAIgIgBg");
	this.shape_112.setTransform(20.2,55.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EED09A").s().p("AgFA/QgagDgRgUQgQgUACgZQADgaAUgRQAVgRAYADQAaADARAUQAQAUgCAZQgDAagUARQgSAOgWAAIgFAAg");
	this.shape_113.setTransform(20,55.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EED09A").s().p("AhTA/QgGgUgCgYIAAgUIAWgHQAVgIAAgPQADg6gBgmIBpAAQgBAmADA6QABARAeANIgCAAIgCATQgDAYgHAUQgYBBg6AAQg7AAgUhAg");
	this.shape_114.setTransform(51,107.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#739478").s().p("Ag/E2QgigGgdgLIgXgJQgujYgShkQgVh0ACgwQACg4B0glQA6gSA4gHQCRAUA6A5QAeAdAAAYQgQCtgdCnQgOBUgMAxQhPAahNAAQgiAAgjgFg");
	this.shape_115.setTransform(51.5,136.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E0A462").s().p("AjCJqIgagKQgWg7gXhbQgwi2gMiiIgZjmQgOiUALhcQAikLEQgEQEegEBRCVQAhA+AFBjQAEBEgLB9QgVDtgOBgQgXCYg5DhQgFALgiAMQhDAXiKAAQiGAAg0gKg");
	this.shape_116.setTransform(51.4,62.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#433F36").s().p("AiBGLIg5gjQg5klApjzQANhNAWg+IASgvQANgRAZgRQAygiA7ACQA7ACAxAkQAZASANARQBDBLAIFNQAECngJCYQgyAegXAIQgxAShOABIgEAAQhGAAhFgig");
	this.shape_117.setTransform(52.2,199);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FADFAE").s().p("AgEAJIgqgdIABgFQAEgGALgBQANAAAIAKIAfAXQAfAZgHAGIgDABQgLAAgkgYg");
	this.shape_118.setTransform(60.7,294.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#4A614F").s().p("AgJAbIg8ghIgJA2IgIgBIgDhpIAkgBIBUA7QBQA7gcABIgBAAQgbAAhAghg");
	this.shape_119.setTransform(65,297.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EED09A").s().p("AgxApQgCg4gDgZIBtAAIgGA5QgYAUgnAEg");
	this.shape_120.setTransform(61.8,241.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FADFAE").s().p("Ag0EVQADhuABh8QACj4gIhHIBtADIgXDTQgcDngWBsg");
	this.shape_121.setTransform(61.8,264.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FADFAE").s().p("AgtAgQgHgGAfgZIAfgXIAGgFQAHgFAIAAQALABAEAGQACACgBADIgqAdQgkAYgLAAIgDgBg");
	this.shape_122.setTransform(45,294.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#4A614F").s().p("AhSA8QgcgBBQg7IBUg7IAkABIgDBpIgIABIgJg2QgbAQghARQhAAhgbAAIgBAAg");
	this.shape_123.setTransform(40.7,297.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EED09A").s().p("AAPApQgngEgYgUIgGg6IBtAAQgDAagCA3IgTACIgQgBg");
	this.shape_124.setTransform(43.9,241.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FADFAE").s().p("Agfg+IgXjTIBtgDQgHBHACD4QAAB8ADBuIgiAAQgWhsgcjng");
	this.shape_125.setTransform(43.9,264.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#936046").s().p("AhlD6QBGjvBGiaIA5hqIAFAaQhEB7gzC7QgbBegNBFg");
	this.shape_126.setTransform(18.7,138.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EED09A").s().p("AgHiVIBDAEIgCAaIgpgBQgQBrgbChIghACg");
	this.shape_127.setTransform(71.3,153.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FADFAE").s().p("AhFEmQAWhyAUh+QAoj8gGg+QgFg9AhAhQARARASAcIgUDDQgfDcg1CBg");
	this.shape_128.setTransform(70.5,160.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#7A8B9A").s().p("AgYF5IAxr3IgZL9g");
	this.shape_129.setTransform(217.9,253);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C0D3E3").s().p("AAaBQIhDg7IAhg5IhPgOIgxh+IBEg+QB5CiA2CuQAbBWADA3QgkhThLhMg");
	this.shape_130.setTransform(207.4,150.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgIAAQAAgIAIAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgIAAAAgJg");
	this.shape_131.setTransform(203.9,131);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgGAHQgCgDgBgEQABgIAIgBQAEABADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_132.setTransform(206.2,131.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgFAGQgEgCAAgEQAAgDAEgDQACgCADAAQAKgBgBAJQAAAEgCACQgDAEgEAAQgCAAgDgEg");
	this.shape_133.setTransform(208.3,132.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgDACgDQADgDADAAQAJAAAAAJQAAAEgCACQgDADgEABQgDgBgDgDg");
	this.shape_134.setTransform(210.5,132.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgGAGQgCgCgBgEQAAgJAJAAQAEABADACQACADAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_135.setTransform(212.7,133);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgIAAQAAgIAIAAQAJAAAAAIQAAAEgCADQgDACgEAAQgIAAAAgJg");
	this.shape_136.setTransform(219,131.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgKALQgFgEAAgHQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_137.setTransform(178.2,98.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgIAIAAQAJAAAAAIQAAAEgCACQgDAEgEAAQgDAAgDgEg");
	this.shape_138.setTransform(216.9,132.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgGAGQgDgCAAgEQAAgDADgDQADgCADAAQAEAAADACQACADAAADQAAAEgCACQgDAEgEAAQgDAAgDgEg");
	this.shape_139.setTransform(214.8,132.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#C3D6E8").s().p("AgHAIQgDgEAAgEQAAgDADgDQAEgEADAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_140.setTransform(221.1,192.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#7A8B9A").s().p("ABQgkQgQAEgnAEQhMAKhuAHIA7gKQBOgQBdgbIiOg/IDLAuIAVAAIALAcQgCADgJACQgQAGghADIgQCng");
	this.shape_141.setTransform(215.3,192);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#C0D3E3").s().p("AgTD0QAcjXgiiUQgMgvgQgiIgOgaIAAgRQArAkAxBDQAaAiARAaIg1AUIAuAYIhMEYg");
	this.shape_142.setTransform(224.6,149.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#7A8B9A").s().p("AgYBjQAJifgtilIApAlQAvAvAhA3IgxANIAqAVIhXEWIgKAAQANguAGhRg");
	this.shape_143.setTransform(227.4,151.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#865A8C").s().p("AkLBVQAUiiBwhGQCAhQCYAAQBMAAAzAPQhYgBhlAQQjJAig+BdQhEBmgOBvQgHA0AEAhQgLhBAJhOg");
	this.shape_144.setTransform(194.4,58.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#CF6D6B").ss(1.6).p("ABrg4IAFAyQABAQgKANQgLANgRABIiKAMQgRACgMgLQgNgLgCgQIgEgy");
	this.shape_145.setTransform(227.4,87.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#CF6D6B").ss(1.6,1).p("AEugZIpbAz");
	this.shape_146.setTransform(211.7,84.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#CF6D6B").ss(1.6).p("ABrg4IAFAzQABAPgLANQgKANgRABIiKAMQgRACgMgLQgNgLgCgQIgEgx");
	this.shape_147.setTransform(199.6,90.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F5CFB0").s().p("AgSAIQgCgDAEgFQAFgEAIgEQAHgDAHAAQAHAAACADQABAEgEAEQgFAFgIADQgHAFgHAAQgHAAgBgFg");
	this.shape_148.setTransform(213.4,95.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F3C496").s().p("AgfCDQgWgOAQgXIADgFQABgDAAgEIgBgLIgMivQgFheAlCgIAUBcQADAQADABIAGABQAfAFgCAYQgBAXgdAKQgLAFgKAAQgOAAgNgIg");
	this.shape_149.setTransform(214.7,85.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F3C496").s().p("AgCAlQgNgBgKgJQgKgLgBgPQABgPAKgLQALgLAOAAQAPAAALALQAJAIABAJQgNgDgIAJQgHAGAAAJQAAAJAHAGIAEAEQgIAFgKAAIgDAAg");
	this.shape_150.setTransform(175.7,92.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FADFAE").s().p("AgsAuQgTgTAAgaQAAgaASgTQATgTAaAAQAaAAASASQATATABAaQAAAagTATQgSATgbAAQgZAAgTgSg");
	this.shape_151.setTransform(175.6,92.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#A06BA5").s().p("AlwDBQguh7Ach8QAjiiChhYQCThQClAWQByAOBBA8QAsApAjBRQAZA7gLAmQgGATgLAHQhKAth5gcQgmgJgmgPIgegNIBdA7QiggJhdg/QgdgTgTgXIgOgTQBABshcBvQgcAigpAgIgjAYQAkBPAnBCQATAhANASQiNgYg4iXg");
	this.shape_152.setTransform(203.3,69);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgBANQgHgBgDgEQgEgFABgFQABgFAFgDQAFgDAFABQAHABADAFQAEAEgBAFQgBAFgFADQgEACgEAAIgCAAg");
	this.shape_153.setTransform(202.5,87.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#717C83").s().p("AgCAVQgJgCgFgHQgFgHABgIQACgIAHgFQAHgFAIABQAIACAFAHQAFAHgBAIQgBAIgHAFQgGAEgHAAIgCAAg");
	this.shape_154.setTransform(200.5,88.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#ACC3DE").s().p("AgFAkQgQgDgKgMQgJgNADgOQACgPAOgIQANgJAPADQAPADAKANQAJAMgCAOQgDAPgNAIQgKAHgMAAIgGgBg");
	this.shape_155.setTransform(200.5,88.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgBANQgGgBgFgFQgDgFABgEQABgFAFgDQAFgDAFAAQAHACADAEQAEAFgBAEQAAAGgGADQgEADgEAAIgCgBg");
	this.shape_156.setTransform(227.1,85.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#717C83").s().p("AgDAVQgIgCgFgHQgFgHABgIQABgIAIgFQAHgFAHABQAJACAFAHQAFAHgBAIQgCAIgHAFQgGAEgGAAIgDAAg");
	this.shape_157.setTransform(225.2,86.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#ACC3DE").s().p("AgGAkQgQgDgJgMQgJgNACgOQADgPANgIQANgIAPACQAQADAKANQAJAMgDAOQgCAPgNAIQgKAHgMAAIgHgBg");
	this.shape_158.setTransform(225.2,86.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#CD7971").ss(1.8,1).p("ABNgOQgPAOgcAIQg1ASg5ga");
	this.shape_159.setTransform(214.5,108.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#582719").ss(1.8,1).p("AAngfQgOACgRAKQggARgOAi");
	this.shape_160.setTransform(198.1,79.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#582719").ss(1.8,1).p("AArAVQgGgKgOgKQgbgTgmgC");
	this.shape_161.setTransform(225.5,78);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#EED09A").s().p("AhBCeQg5gRgvgaIgkgXIhvgxQAwhXBjg+QBgg9BkgNQBtgOBIAvQBSA0AQB1QAJBBACBCQhqAfhkAAQhbAAhVgag");
	this.shape_162.setTransform(206.6,55.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FADFAE").s().p("AiIEtQiIiSgyiRQgrh+BUh6QBMhuCLg4QCLg5BtAmQB6AqAUCWQApEthWC+QhJCih8ARIgLAAQhOAAiBiKg");
	this.shape_163.setTransform(204.8,81.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#865A8C").s().p("AhtDrQhqgNgshOQgrhOAthhQAuhhBrg8QBrg7BrANQBqANAsBOQArBPgtBgQguBihrA7QhYAxhXAAQgUAAgTgDg");
	this.shape_164.setTransform(185.5,44.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgPgCIAWgLIAJAYIgZADg");
	this.shape_165.setTransform(234.8,171.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FADFAE").s().p("Ag2AVIAaggQAegfAWAGQATAEAIARQAFAMgBAOQgBAPgPAFIhUAHg");
	this.shape_166.setTransform(240.9,168.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#A9C1D8").s().p("AgSEUIi8gHQgHgHgDgOQgHgcAOgeIE4gdIhNjCQAEAvgJg7QgGgmgxhkIgwhcIAXAIQAcAMAcAUQBYBAAvB6QBGC0AKAhQATBHgdAWQgYATidAAIgnAAg");
	this.shape_167.setTransform(229.5,156.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgJgKQAEgHAEgDIATAAQgGAXAAARIgdABQgBgTAJgMg");
	this.shape_168.setTransform(206.7,177.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FADFAE").s().p("AgRABQAGgWAfgCIgHALQgHAOgBAQIgXAFQgDgKAEgMg");
	this.shape_169.setTransform(204.5,177.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#7A8B9A").s().p("AhJh6IAGAiQAKApAOAiQAsBqBJgCIhwAgg");
	this.shape_170.setTransform(207.5,165.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AhhjUIA4ASQA/AMAqgdIAKAYQALAhAGAqQAUCJgmC8g");
	this.shape_171.setTransform(214.7,155.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#EED09A").s().p("Ag3BXIhIhoIASgUQARgagDghICQAbIAHAXQAJAdAMAbIAzA2QgUAOghAJQghAKggAAQggAAghgKg");
	this.shape_172.setTransform(212.3,130.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#A9C1D8").s().p("AiGEoQgggbgeh1QgchtgIhsQgHhcAlhKQAMgWAPgTIAMgNQDlguBmBgQA8A4AABHQAAAdAGAlIgMCSIAMAhIgZBRQhOAbhSAXQh2AhgrAAQgQAAgGgFg");
	this.shape_173.setTransform(211,160.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#A9C1D8").s().p("AASB9QhhgCiOguIBXivIEZgaIBLC6QgOAHgZAIQgwAQgwAEIAAAUQgTAIgtAAIgFAAg");
	this.shape_174.setTransform(215.2,195.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#7A8B9A").s().p("AhPAnQhLgSgqgaIgCgSQB3g5CWAPQBMAHA0ATIgLBsQifgEhsgag");
	this.shape_175.setTransform(214.8,205);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#A0B6CB").s().p("AghHdIgMgFQhJkGgvlaIghknQB3g6CWAPQBMAIA0ASQgTDmhBFlQggCzgdCFQgVAFgQgEIgMgEIgFAbQgKADgKAAIgNgBg");
	this.shape_176.setTransform(214.8,245.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FADFAE").s().p("AgEAIIgogiQAAgCACgDQAEgFALAAQANABAIALIAdAbQAcAcgIAFIgCABQgLAAgigdg");
	this.shape_177.setTransform(214.8,295.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#B55F5D").s().p("ABOBEQgcgCg+gpIg5gnIgJAwIgHgBIABhlIAlACIBPBEQBIBDgYAAIgCgBg");
	this.shape_178.setTransform(218.8,300);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FADFAE").s().p("AgEAJIgrgdQgBgDACgCQAEgGALgBQANgBAJALIAgAXQAfAZgHAGIgDABQgLAAglgYg");
	this.shape_179.setTransform(220.3,292.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#B55F5D").s().p("AgJAbIg9ggIgJA2IgIAAIgEhrIAlgBIBWA7QBRA7gcABIgCAAQgcAAhAghg");
	this.shape_180.setTransform(224.7,296.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(0,0,0,0.2)").s().p("Am5BJQjugQAAgWQAAgGAZgIQhmAEiGAAQj3AAivgNQiugMAAgQQAAgSCugNQCvgMD3AAQD3AACvAMQCvANAAASQAAADgJAEQDCgJDwABICkABQgjgJAAgJQAAgWC0gPQC0gQD9AAQD+AAC0AQQCzAPAAAWQAAAWiqAOQiqAQj0AAQApAJAAAIQAAAWjuAQQjuAPlQAAQlPAAjugPg");
	this.shape_181.setTransform(148.7,305.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297.5,314.5);


(lib.bkgburstg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EAA52D","#EF7B20"],[0,1],10.1,-69.5,0,10.1,-69.5,705.4).s().p("EBTnA+gMgrwhRPMBFhBDLIAAOEgEASxA+gMAVGhRPMAc5grwIWqAAMgzjArwMAO1BRPgEg6kA+gMBibhRPMgyABRPgEhtXA+gIAL14MCVDg7XMiH8BRPgEAn3gSvMBFhAajIAASwgEhtXAAyMCVOgThMiVNAqLgEAn3gSvMBFhgGQIAARMgEhtXgktMCVOAR+MiVNAEsgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvMgDJgrwIRNAAMgOEArwgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEAn3gSvgEhtXg1HIAApYMAj8AAAMBxSArwgEgtTg+fIc7AAMA4PArwgEAEtg+fIRMAAMAR+ArwgEBtYg5zIAASwMhFhAUUg");
	this.shape.setTransform(700,400);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1400,800);


(lib.heroarmscratchfingermc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.heroarmscratchfingerg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.2,19,1,1,11.2,0,0,39.2,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-26.7,y:20.6},4).to({rotation:11.2,y:19},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,-4,44.8,27.1);


(lib.bkgburstmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bkgburstg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(700,400,1,1,0,0,0,700,400);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},14).to({alpha:0.301},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1400,800);


// stage content:
(lib.Klzii_WebHeader_01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_289 = function() {
		this.gotoAndPlay(169);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(289).call(this.frame_289).wait(1));

	// star-g
	this.instance = new lib.starg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(780.1,131.4,0.9,0.9,0,0,0,14.7,21.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).wait(1));

	// star-g
	this.instance_1 = new lib.starg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(701.1,483.6,0.9,0.9,0,0,0,14.7,21.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).wait(1));

	// star-g
	this.instance_2 = new lib.starg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(818.1,226.4,0.9,0.9,0,0,0,14.7,21.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},0).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).wait(1));

	// star-g
	this.instance_3 = new lib.starg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(784.5,523.9,1.2,1.2,0,0,0,14.7,21.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).wait(1));

	// star-g
	this.instance_4 = new lib.starg("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1079.5,157.7,1.2,1.2,0,0,0,14.7,21.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69).to({_off:false},0).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).wait(1));

	// star-g
	this.instance_5 = new lib.starg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(696.7,244.7,1.2,1.2,0,0,0,14.7,21.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},0).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).to({alpha:1},20).to({alpha:0.199},20).wait(1));

	// hero-arm-thumbsup-g
	this.instance_6 = new lib.heroarmthumbsupg("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1078.1,234.1,1,1,0,0,0,70,111.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(119).to({_off:false},0).to({_off:true},20).wait(151));

	// hero-arm-onhip-g
	this.instance_7 = new lib.heroarmonhipg("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1041.8,368,1,1,0,0,0,44.2,66.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},20).wait(40).to({_off:false},0).to({_off:true},59).wait(20).to({_off:false},0).wait(151));

	// hero-arm-scratch-g
	this.instance_8 = new lib.heroarmscratchg("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1049.9,235,1,1,0,0,0,42.2,95.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({_off:true},40).wait(230));

	// hero-arm-scratch-finger-mc
	this.instance_9 = new lib.heroarmscratchfingermc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1058.9,135.7,1,1,0,0,0,23.6,11.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({_off:false},0).to({_off:true},40).wait(230));

	// hero-arm-ipad-g
	this.instance_10 = new lib.heroarmipadg("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(806.1,369.1,1,1,0,0,0,153,117.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:806,y:369},3).to({scaleX:1,scaleY:1,x:806.1,y:369.1},2).wait(54).to({regX:153.1,rotation:4.2,x:803.2,y:342.1},0).wait(20).to({regX:153,rotation:0,x:806.1,y:369.1},0).wait(151));

	// hero-arm-ipaddown-g
	this.instance_11 = new lib.heroarmipaddowng("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(860.9,399.6,1,1,0,0,0,66,98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},60).wait(230));

	// hero-body-g
	this.instance_12 = new lib.herobodyg("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(946.5,469.6,1,1,0,0,0,115.3,168.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(290));

	// hero-blinkers-mc
	this.instance_13 = new lib.heroblinkersmc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(946.4,196.8,1,1,0,0,0,37.4,11.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(159).to({_off:false},0).wait(131));

	// hero-face-happy-g
	this.instance_14 = new lib.herofacehappyg("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(945.9,217.7,1,1,0,0,0,46,52.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(60).to({_off:false},0).to({_off:true},59).wait(20).to({_off:false},0).wait(151));

	// hero-face-wink-g
	this.instance_15 = new lib.herofacewinkg("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(937,219.7,1,1,0,0,0,46.1,56.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(119).to({_off:false},0).to({_off:true},20).wait(151));

	// hero-face-worried-g
	this.instance_16 = new lib.herofaceworriedg("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(945,216.8,1,1,0,0,0,45.1,51.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(21).to({_off:false},0).to({_off:true},39).wait(230));

	// hero-head-g
	this.instance_17 = new lib.heroheadturng("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(957,173,1,1,0,0,0,97.5,131.8);

	this.instance_18 = new lib.heroheadg("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(957,173,1,1,0,0,0,97.5,131.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17}]}).to({state:[{t:this.instance_18,p:{regX:97.5,regY:131.8,rotation:0,x:957,y:173}}]},21).to({state:[{t:this.instance_18,p:{regX:97.6,regY:131.9,rotation:-6.2,x:943.1,y:175.1}}]},98).to({state:[{t:this.instance_18,p:{regX:97.5,regY:131.8,rotation:0,x:957,y:173}}]},20).wait(151));

	// hero-shadow-g
	this.instance_19 = new lib.heroshadowg("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(999.4,637.6,1,1,0,0,0,177.8,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(290));

	// customers-speech3-g
	this.instance_20 = new lib.customersspeech3g("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(512.8,223.9,0.3,0.3,0,0,0,50.4,50.9);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({regX:50.2,regY:50.8,scaleX:1,scaleY:1,x:533.4,y:143.5,alpha:1},10,cjs.Ease.get(1)).to({y:156.5},3).to({startPosition:0},70).to({y:136.5},5).to({y:156.5},10,cjs.Ease.get(1)).wait(92));

	// customers-speech2-g
	this.instance_21 = new lib.customersspeech2g("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(445.3,224.2,0.3,0.3,0,0,0,50.4,51.9);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(97).to({_off:false},0).to({regX:50.2,regY:51.8,scaleX:1,scaleY:1,x:440.9,y:150.6,alpha:1},10,cjs.Ease.get(1)).to({y:163.6},3).to({startPosition:0},66).to({y:143.6},5).to({y:163.6},10,cjs.Ease.get(1)).wait(99));

	// customers-speech1-g
	this.instance_22 = new lib.customersspeech1g("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(376.2,204.9,0.3,0.3,0,0,0,50.5,51.9);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(94).to({_off:false},0).to({regX:50.3,regY:51.8,scaleX:1,scaleY:1,x:351.5,y:123.4,alpha:1},10,cjs.Ease.get(1)).to({y:136.4},3).to({startPosition:0},62).to({y:116.4},5).to({y:136.4},10,cjs.Ease.get(1)).wait(106));

	// customers-questionmark-g
	this.instance_23 = new lib.customersquestionmarkg("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(438.1,206.1,0.75,0.75,0,0,0,92.8,85.5);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({regX:92.7,scaleX:1,scaleY:1,x:438,y:156.1,alpha:1},8).to({startPosition:0},66).to({scaleX:1.2,scaleY:1.2,y:111.1,alpha:0},14).wait(202));

	// customers-g
	this.instance_24 = new lib.customersunhappyg("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(457,358,1,1,0,0,0,148.7,157.2);

	this.instance_25 = new lib.customersg("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(457,358,1,1,0,0,0,148.7,157.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24}]}).to({state:[{t:this.instance_25}]},60).wait(230));

	// bkg-burst-mc
	this.instance_26 = new lib.bkgburstmc();
	this.instance_26.parent = this;
	this.instance_26.setTransform(700,400,1,1,0,0,0,700,400);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(60).to({_off:false},0).wait(230));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1008.3,448.5,868.9,600.4);
// library properties:
lib.properties = {
	width: 1400,
	height: 800,
	fps: 20,
	color: "#EF7B21",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;