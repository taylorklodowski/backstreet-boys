# taylor klodowski | backstreet-boys 

Assumptions when building:

- Based on the data there was no unique identifier so I created one for each track 
- Based on the data I am only checking for the existence of  `.m4a` in the `mediaUrl` to identify audio files 
- Based on the data I am adding a ` 'Content-Security-Policy': 'upgrade-insecure-requests'` header to force requests over https instead of the http 



At the two hour mark I had most of the player functionality working, I spent the next hour finalizing the styling, if I had more time I would:

- ensure the styling was responsive (this is currently a desktop only solution)
- add icons for the play/pause and next/previous buttons 
- perform an accessibility check 
- set up eslint to identify any problematic code 
- spent more time tightening up the height of the player when switching between image/video content 
- add additional video functionality (mute / duration / volume), or pivot and use a third-party video player in favor of my custom solution
