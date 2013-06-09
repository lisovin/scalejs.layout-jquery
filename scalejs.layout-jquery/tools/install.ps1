param($installPath, $toolsPath, $package, $project)

$project |
	Add-Paths "{
		'scalejs.layout-jquery' : 'Scripts/scalejs.layout-jquery-$($package.Version)',
		'jquery.layout'			: 'Scripts/jquery.layout.1.3.0.rc-30.79'
	}" |
	Add-ScalejsExtension 'scalejs.layout-jquery' |
	Add-Shims "{
		'jquery.layout' : {
			deps: ['jQuery']
		}
	}" |
	Out-Null