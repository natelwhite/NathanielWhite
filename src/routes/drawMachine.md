## project background
- After seeing a 3Blue1Brown (YouTube) video on the discrete fourier transform, I wanted to implmement it myself.
	- I followed a CodingTrain (YouTube) video where he implemented a drawing machine in javascript using the algorithm.
	- I didn't want it to be too easy though, so I opted to use C++ and SDL2, much lower-level than javascript.
	- Here's some functionality I added that wasn't in the original
		1. A single fourier series draws both x and y dimensions, rather than one for each axis.
		2. Move to a specified frame.
		3. Draw polygons with any number of sides rather than circles.
		4. Change color of lines, polygons, and background.
		5. Start/Stop animation at any time.
		6. Clear drawn path at any time.
