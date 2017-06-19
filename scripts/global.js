$(function(){
	$("#inputSearch").focus(function(e){
		$(this).addClass("focus");
		if($(this).val() === this.defaultValue){
			$(this).val("");
		}
	}).blur(function(e){
		$(this).removeClass("focus");
		if($(this).val() === ""){
			$(this).val(this.defaultValue);
		}
	}).keyup(function(e){
		if(e.which === 13){
			alert("回车提交表单！");
		}
	});

	$("nav li").each(function(){
		$(this).hover(function(){
			$(this).find(".jnNav").show();
		}, function(){
			$(this).find(".jnNav").hide();
		})
	});

	$(".jnCatainfo .promoted").append('<s class="hot"></s>');
});