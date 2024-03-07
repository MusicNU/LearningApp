from melodia import melody
from link_to_mp3 import link_to_mp3

import sys
link = str(sys.argv[1])
melody(link_to_mp3(link))