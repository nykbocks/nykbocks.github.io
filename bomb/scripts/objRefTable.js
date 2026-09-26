const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Acts.SetEffectEnabled,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Behaviors.scrollto.Acts.Shake
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{Tilemap: 0},
	{Sprite: 0},
	{Shake: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Keyboard: 0},
	{Timer: 0},
	{Sprite4: 0}
];

self.InstanceType = {
	Tilemap: class extends self.ITilemapInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Sprite4: class extends self.ISpriteInstance {}
}