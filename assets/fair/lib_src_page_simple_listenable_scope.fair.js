GLOBAL['#FairKey#']=(function(__initProps__){const __global__=this;return runCallback(function(__mod__){with(__mod__.imports){function _ListenableScopeDemoState(){const inner=_ListenableScopeDemoState.__inner__;if(this==__global__){return new _ListenableScopeDemoState({__args__:arguments});}else{const args=arguments.length>0?arguments[0].__args__||arguments:[];inner.apply(this,args);_ListenableScopeDemoState.prototype.ctor.apply(this,args);return this;}}_ListenableScopeDemoState.__inner__=function inner(){this.fairProps=__initProps__;this._pageName='#FairKey#';this._uniqueKey='';};_ListenableScopeDemoState.prototype={_getRouteName:function _getRouteName(){const __thiz__=this;with(__thiz__){if(fairProps!=null&&fairProps.__op_idx__('routeName')!=null){return fairProps.__op_idx__('routeName');}return'';}},_onCreateKey:function _onCreateKey(key){const __thiz__=this;const __arg_ctx__={key,};with(__thiz__){with(__arg_ctx__){_uniqueKey=key;}}},_addListener:function _addListener(value){const __thiz__=this;const __arg_ctx__={value,};with(__thiz__){with(__arg_ctx__){let type=value.__op_idx__(0);let values=value.__op_idx__(1);FairCommonPlugin().jsPrint(convertObjectLiteralToSetOrMap({['pageName']:_pageName,['type']:type,['values']:values,}));}}},_onTabControllerSetIndex:function _onTabControllerSetIndex(index){const __thiz__=this;const __arg_ctx__={index,};with(__thiz__){with(__arg_ctx__){FairCommonPlugin().tabController(convertObjectLiteralToSetOrMap({['pageName']:_pageName,['uniqueKey']:_uniqueKey,['type']:'TabController2',['method']:'set',['parameter']:index,}));}}},_onTabControllerAnimateTo:function _onTabControllerAnimateTo(index){const __thiz__=this;const __arg_ctx__={index,};with(__thiz__){with(__arg_ctx__){FairCommonPlugin().tabController(convertObjectLiteralToSetOrMap({['pageName']:_pageName,['uniqueKey']:_uniqueKey,['type']:'TabController2',['method']:'animateTo',['parameter']:index,}));}}},_onScrollControllerAnimateTo:function _onScrollControllerAnimateTo(offset){const __thiz__=this;const __arg_ctx__={offset,};with(__thiz__){with(__arg_ctx__){FairCommonPlugin().scrollController(convertObjectLiteralToSetOrMap({['pageName']:_pageName,['uniqueKey']:_uniqueKey,['type']:'ScrollController0',['method']:'get',['callback']:function dummy(values){if(values.__op_idx__('hasClients')==true){FairCommonPlugin().scrollController(convertObjectLiteralToSetOrMap({['pageName']:_pageName,['uniqueKey']:_uniqueKey,['type']:'ScrollController0',['method']:'animateTo',['parameter']:convertObjectLiteralToSetOrMap({['offset']:offset,['duration']:new Duration({seconds:1}),['curve']:'Curves.bounceIn',}),}));}},}));}}},_onValueNotifierSetValue:function _onValueNotifierSetValue(value){const __thiz__=this;const __arg_ctx__={value,};with(__thiz__){with(__arg_ctx__){FairCommonPlugin().valueNotifier(convertObjectLiteralToSetOrMap({['pageName']:_pageName,['uniqueKey']:_uniqueKey,['type']:'ValueNotifier3',['method']:'set',['parameter']:value,}));}}},_onAnimationControllerStart:function _onAnimationControllerStart(){const __thiz__=this;with(__thiz__){FairCommonPlugin().animationController(convertObjectLiteralToSetOrMap({['pageName']:_pageName,['uniqueKey']:_uniqueKey,['type']:'AnimationController1',['method']:'get',['callback']:function dummy(values){if(values.__op_idx__('isAnimating')==true){return null;}let method='forward';if(values.__op_idx__('isCompleted')==true){method='reverse';}FairCommonPlugin().animationController(convertObjectLiteralToSetOrMap({['pageName']:_pageName,['uniqueKey']:_uniqueKey,['type']:'AnimationController1',['method']:method,}));},}));}},};_ListenableScopeDemoState.prototype.ctor=function(){};;return _ListenableScopeDemoState();}},[]);})(convertObjectLiteralToSetOrMap(JSON.parse('#FairProps#')));