param($installPath, $toolsPath, $package, $project)

$project |
	Remove-Paths 'scalejs.layout-jquery' |
	Remove-ScalejsExtension 'scalejs.layout-jquery' |
	Out-Null
