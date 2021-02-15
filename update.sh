info=$1
if ["$info" = ""];
then info="更新了网站"
fi
git add -A
git commit -m "$info"
git push origin hexo