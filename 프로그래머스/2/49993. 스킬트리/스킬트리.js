function solution(skill, skill_trees) {
    var infos = new Map();
    skill.split("").forEach((s, i) => infos.set(s, i+1));
    
    skill_trees = skill_trees.filter((skill_tree) => {
        var I = 1;
        for (s of skill_tree.split("")) {
            var S = infos.get(s);
            if (S == I) I += 1;
            else if (S > I) return false;
        }
        return true;
    })
    return skill_trees.length;
}