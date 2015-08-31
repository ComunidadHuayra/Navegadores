dir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cd $dir/..; zip -r bin/comhuayra-xul-ext-webmenu.xpi * -x "bin/*";
