#!/bin/bash

npp_path=$(reg query 'HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\App Paths\notepad++.exe' | perl -ne 'print qq{"$1"} if /REG_SZ\s+([^\r\n]+)/')

if [ "$npp_path" == "" ]; then
	echo "Notepad++ not found"
	exit 1
fi

# Add an npp function to your bash profile, so you can edit a file with Notepad++ by typing this:
# npp some-file.txt

echo $'npp(){\n' $npp_path $'"$@" &\n}' >> ~/.bash_profile

# Set Notepad++ as the default Git editor (so we don't have to learn vi)

echo $npp_path | xargs -i git config --global core.editor '"{}" -multiInst -notabbar -nosession -noPlugin'
