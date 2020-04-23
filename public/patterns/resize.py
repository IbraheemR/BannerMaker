# A quick script to crop MC's default banner patterns to only the bits we need
from PIL import Image
import os


def resize_dir(directory, dim):
    for file in os.listdir(directory):
        if file.endswith(".png"):

            print(directory+file)

            image = Image.open(directory + file)

            new_image = image.crop(dim)

            new_image.save(directory + file)


# resize_dir("public/patterns/banner/", (1, 1, 21, 41))
resize_dir("public/patterns/shield/", (1, 1, 13, 23))
