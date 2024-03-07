import sys
import multiprocessing
from functools import partial
from melodia import melody
from link_to_mp3 import link_to_mp3


def run_melody_parallel(link):
    pool = multiprocessing.Pool(processes=5)
    results = pool.map(melody, [link] * 5)
    pool.close()
    pool.join()
    return results

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <link_to_mp3>")
        sys.exit(1)

    link = sys.argv[1]
    link_name = link_to_mp3(link)
    results = run_melody_parallel(link_name)
    print(results)