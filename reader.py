finger = []

# open file and read the content in a list
with open('listfileNoAsset.txt', 'r') as filehandle:
    for line in filehandle:
        # remove linebreak which is the last character of the string
        currentFinger = line[:-1]

        # add item to the list
        finger.append(currentFinger)



#TO REMOVE DUPLICATE
def my_function(x):
  return list(dict.fromkeys(x))

mylist = my_function(finger)

print(mylist) 

with open('RDY.txt', 'w') as filehandle:
    for listitem in mylist:
        filehandle.write('%s\n' % listitem)

