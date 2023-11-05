var val      = null;
var width_s  = 2280;
var height_s = 1080;

$(function() {
	// セレクトボックスが切り替わったら発動
	$("#no_select").change(function()
	{
		// 既にあるキャンバスと置き換える
		$('<canvas id="spine_view"></canvas>').replaceAll('#spine_view');
		
		val = $("#no_select").val(); // 選択したselectのvalue値を変数に格納
		
		console.log(val);
		
		const app = new PIXI.Application({
			backgroundAlpha: 0,
			width: width_s,
			height: height_s,
			resolution: window.devicePixelRatio || 1,
			view: document.getElementById('spine_view'),
			autoResize: true,
		});
		
		document.getElementById("spine_area").appendChild(app.view);
		
		const chara       = 'spine/' + val + '.skel';
		const chara_back  = 'spine/' + val + '_Back.skel';
		const chara_front = 'spine/' + val + '_Front.skel';
		
		// Backを読み込む
		PIXI.Assets.load(chara_back).then((Back) => 
		{
			const chara_back = new PIXI.spine.Spine(Back.spineData);
			
			// 表示位置の調整
			chara_back.x = app.screen.width / 2;
			if(val == "1044/Painting_1044")
			{
				chara_back.y = app.screen.height / 2 - 160;
			} else {
				chara_back.y = app.screen.height / 2;
			}
			
			// canvas内で表示する大きさ
			chara_back.scale.set(1.5);
			
			// 表示するアニメーション
			chara_back.state.setAnimation(0, "A", true);
			
			app.stage.addChild(chara_back);
		});
		
		// Charaを読み込む
		PIXI.Assets.load(chara).then((Chara) => 
		{
			const chara = new PIXI.spine.Spine(Chara.spineData);
			
			// Animationの一覧を取得する
			for(var i in Chara.spineData.animations)
			{
				if(i == 0)
				{
					$('<div id="ani_select"></div>').replaceAll('#ani_select');
				}
				console.log(Chara.spineData.animations[i].name);
				$("#ani_select").append($('<button onclick="butotnClick(this.id)" id="'
				 + Chara.spineData.animations[i].name
				 + '" class="btn dropdown-toggle btn-default" value="'
				 + Chara.spineData.animations[i].name + '">'
				 + Chara.spineData.animations[i].name + '</button>'));
			}
			
			// 表示位置の調整
			chara.x = app.screen.width / 2;
			chara.y = app.screen.height / 2;
			
			// canvas内で表示する大きさ
			chara.scale.set(1.5);
			
			// 表示するアニメーション
			chara.state.setAnimation(0, "A", true);
			
			app.stage.addChild(chara);
		});
		
		// Frontを読み込む
		PIXI.Assets.load(chara_front).then((Front) => 
		{
			const chara_front = new PIXI.spine.Spine(Front.spineData);
			
			// 表示位置の調整
			chara_front.x = app.screen.width / 2;
			if(val == "1044/Painting_1044")
			{
				chara_front.y = app.screen.height / 2 - 160;
			} else {
				chara_front.y = app.screen.height / 2;
			}
			
			// canvas内で表示する大きさ
			chara_front.scale.set(1.5);
			
			// 表示するアニメーション
			chara_front.state.setAnimation(0, "A", true);
			
			app.stage.addChild(chara_front);
		});
	});
	
	// セレクトボックスが切り替わったら発動
	$("#no_select_uw").change(function()
	{
		// 既にあるキャンバスと置き換える
		$('<canvas id="spine_view"></canvas>').replaceAll('#spine_view');
		
		val = $("#no_select_uw").val(); // 選択したselectのvalue値を変数に格納
		
		const app = new PIXI.Application({
			backgroundAlpha: 0,
			width: width_s,
			height: height_s,
			resolution: window.devicePixelRatio || 1,
			view: document.getElementById('spine_view'),
			autoResize: true,
		});
		
		document.getElementById("spine_area").appendChild(app.view);
		
		const chara = 'spine/' + val + '.skel';
		
		// Charaを読み込む
		PIXI.Assets.load(chara).then((Chara) => 
		{
			const chara = new PIXI.spine.Spine(Chara.spineData);
			
			// Animationの一覧を取得する
			for(var i in Chara.spineData.animations)
			{
				if(i == 0)
				{
					$('<div id="ani_select"></div>').replaceAll('#ani_select');
				}
				//console.log(Chara.spineData.animations[i].name);
				$("#ani_select").append($('<button onclick="butotnClickuw(this.id)" id="'
				 + Chara.spineData.animations[i].name
				 + '" class="btn dropdown-toggle btn-default" value="'
				 + Chara.spineData.animations[i].name + '">'
				 + Chara.spineData.animations[i].name + '</button>'));
			}
			
			// 表示位置の調整
			chara.x = app.screen.width / 2;
			chara.y = app.screen.height / 2;
			
			// canvas内で表示する大きさ
			chara.scale.set(1.5);
			
			// 表示するアニメーション
			chara.state.setAnimation(0, "A", true);
			
			app.stage.addChild(chara);
		});
	});
	
	// 初期表示設定
	const app = new PIXI.Application({
		backgroundAlpha: 0,
		width: width_s,
		height: height_s,
		resolution: window.devicePixelRatio || 1,
		view: document.getElementById('spine_view'),
		autoResize: true,
	});
	
	document.getElementById("spine_area").appendChild(app.view);
	
	var ran_list = [
		"1029/102904",
		"1045/104504",
		"1050/105004",
		"1056/105604",
		"1057/105704"
	];
	
	const chara = 'spine/' + ran_list[Math.floor(Math.random()*ran_list.length)] + '.skel';
	
	PIXI.Assets.load(chara).then((resource) => 
	{
		const animation = new PIXI.spine.Spine(resource.spineData);
		
		// 表示位置の調整
		animation.x = app.screen.width / 2;
		animation.y = app.screen.height / 2;
		
		// canvas内で表示する大きさ
		animation.scale.set(1.5);
		
		// 表示するアニメーション
		animation.state.setAnimation(0, "A", true);
		
		app.stage.addChild(animation);
	});
});

// 普段着のボタンを押下した際の処理
function butotnClick(id){
	// 既にあるキャンバスと置き換える
	$('<canvas id="spine_view"></canvas>').replaceAll('#spine_view');
	
	const app = new PIXI.Application({
		backgroundAlpha: 0,
		width: width_s,
		height: height_s,
		resolution: window.devicePixelRatio || 1,
		view: document.getElementById('spine_view'),
		autoResize: true,
	});
	
	document.getElementById("spine_area").appendChild(app.view);
	
	const chara       = 'spine/' + val + '.skel';
	const chara_back  = 'spine/' + val + '_Back.skel';
	const chara_front = 'spine/' + val + '_Front.skel';
	//const chara_name  = 'spine/1068/SP_heroname_1068.skel';
	
	// Backを読み込む
	PIXI.Assets.load(chara_back).then((Back) => 
	{
		const chara_back = new PIXI.spine.Spine(Back.spineData);
		
		// 表示位置の調整
		chara_back.x = app.screen.width / 2;
		if(val == "1044/Painting_1044")
		{
			chara_back.y = app.screen.height / 2 - 160;
		} else {
			chara_back.y = app.screen.height / 2;
		}
		
		// canvas内で表示する大きさ
		chara_back.scale.set(1.5);
		
		// 表示するアニメーション
		// Aかinの場合そのままアニメーションを読み込む
		if((id == "A") || (id == "in"))
		{
			chara_back.state.setAnimation(0, id, true);
		// Aかinではない場合、Aのアニメーションを読み込む
		} else {
			chara_back.state.setAnimation(0, "A", true);
		}
		
		app.stage.addChild(chara_back);
	});
	
	// Charaを読み込む
	PIXI.Assets.load(chara).then((Chara) => 
	{
		const chara = new PIXI.spine.Spine(Chara.spineData);
		
		// 表示位置の調整
		chara.x = app.screen.width / 2;
		chara.y = app.screen.height / 2;
		
		// canvas内で表示する大きさ
		chara.scale.set(1.5);
		
		// 表示するアニメーション
		chara.state.setAnimation(0, id, true);
		
		app.stage.addChild(chara);
	});
	
	// Frontを読み込む
	PIXI.Assets.load(chara_front).then((Front) => 
	{
		const chara_front = new PIXI.spine.Spine(Front.spineData);
		
		// 表示位置の調整
		chara_front.x = app.screen.width / 2;
		if(val == "1044/Painting_1044")
		{
			chara_front.y = app.screen.height / 2 - 160;
		} else {
			chara_front.y = app.screen.height / 2;
		}
		
		// canvas内で表示する大きさ
		chara_front.scale.set(1.5);
		
		// 表示するアニメーション
		// Aかinの場合そのままアニメーションを読み込む
		if((id == "A") || (id == "in"))
		{
			chara_front.state.setAnimation(0, id, true);
		// Aかinではない場合、Aのアニメーションを読み込む
		} else {
			chara_front.state.setAnimation(0, "A", true);
		}
		
		app.stage.addChild(chara_front);
	});
	
	// Nameを読み込む
	//PIXI.Assets.load(chara_name).then((Name) => 
	//{
	//	const chara_name = new PIXI.spine.Spine(Name.spineData);
	//	console.log(Name.spineData);
	//	
	//	chara_name.x = app.screen.width / 4;
	//	chara_name.y = app.screen.height / 1.2;
	//	
	//	app.stage.addChild(chara_name);
	//	
	//	chara_name.state.setAnimation(0, id, false);
	//});
}

// 下着のボタンを押下した際の処理
function butotnClickuw(id){
	// 既にあるキャンバスと置き換える
	$('<canvas id="spine_view"></canvas>').replaceAll('#spine_view');
	
	const app = new PIXI.Application({
		backgroundAlpha: 0,
		width: width_s,
		height: height_s,
		resolution: window.devicePixelRatio || 1,
		view: document.getElementById('spine_view'),
		autoResize: true,
	});
	
	document.getElementById("spine_area").appendChild(app.view);
	
	const chara = 'spine/' + val + '.skel';
	
	// Charaを読み込む
	PIXI.Assets.load(chara).then((Chara) => 
	{
		const chara = new PIXI.spine.Spine(Chara.spineData);
		
		// 表示位置の調整
		chara.x = app.screen.width / 2;
		chara.y = app.screen.height / 2;
		
		// canvas内で表示する大きさ
		chara.scale.set(1.5);
		
		// 表示するアニメーション
		chara.state.setAnimation(0, id, true);
		
		app.stage.addChild(chara);
	});
}