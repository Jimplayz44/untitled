input.onButtonPressed(Button.A, function () {
	
})
finch.startFinch()
basic.forever(function () {
    if (finch.getLine(RLDir.Right) > 90) {
        finch.setMove(MoveDir.Backward, 10, 100)
    } else if (finch.getLine(RLDir.Left) > 20) {
        finch.setMove(MoveDir.Forward, 10, 100)
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
