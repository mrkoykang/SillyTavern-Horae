/**
 * index.en.js
 * English translation mapping for `index.js` (Horae plugin)
 *
 * This file provides a translations map for non-comment Chinese strings found in `index.js`.
 * Use the TRANSLATIONS object to replace UI strings programmatically or as reference when
 * creating an inline translated copy.
 *
 * Note: Comments in the original file are left untouched. This mapping focuses on visible
 * UI labels, prompts, messages, and common literals.
 */

export const TRANSLATIONS = {
    "Horae - 隐藏状态标签": "Horae - Hide status tags",
    "隐藏<horae>状态标签，不显示在正文，不发送给AI": "Hide <horae> status tags; not shown in the body and not sent to the AI",
    "Horae - 隐藏事件标签": "Horae - Hide event tags",
    "隐藏<horaeevent>事件标签的显示，不发送给AI": "Hide <horaeevent> event tag display; do not send to the AI",
    "Horae - 隐藏表格标签": "Horae - Hide table tags",
    "隐藏<horaetable>标签，不显示在正文，不发送给AI": "Hide <horaetable> tags; not shown in the body and not sent to the AI",
    "Horae - 隐藏RPG标签": "Horae - Hide RPG tags",
    "隐藏<horaerpg>标签，不显示在正文，不发送给AI": "Hide <horaerpg> tags; not shown in the body and not sent to the AI",

    "[Horae] 配套正则已同步至列表末尾（共 ${HORAE_REGEX_RULES.length} 条）": "[Horae] Companion regex rules synchronized to the end of the list (total ${HORAE_REGEX_RULES.length})",

    // DEFAULT_SETTINGS labels
    "用户标记的星标NPC列表": "User-marked favorite NPC list",
    "用户手动标记的重要角色列表（特殊边框）": "User-pinned important characters (special border)",
    "发送剧情轨迹（关闭则无法计算相对时间）": "Send timeline (turning off disables relative time calculation)",
    "发送角色信息（服装、好感度）": "Send character info (costumes, affection)",
    "发送物品栏": "Send inventory",
    "自定义表格": "Custom tables",
    "自定义系统注入提示词（空=使用默认）": "Custom system prompt (empty = use default)",
    "自定义AI摘要提示词（空=使用默认）": "Custom AI summary prompt (empty = use default)",
    "自定义AI分析提示词（空=使用默认）": "Custom AI analysis prompt (empty = use default)",
    "自定义剧情压缩提示词（空=使用默认）": "Custom compress prompt (empty = use default)",
    "自定义自动摘要提示词（空=使用默认；独立于手动压缩）": "Custom auto-summary prompt (empty = use default; independent from manual compression)",
    "AI摘要是否提取NPC": "Whether AI summary extracts NPCs",
    "AI摘要是否提取好感度": "Whether AI summary extracts affection",
    "消息面板宽度百分比（50-100）": "Message panel width percentage (50-100)",
    "消息面板右偏移量（px）": "Message panel right offset (px)",
    "插件主题：dark / light / custom-{index}": "Plugin theme: dark / light / custom-{index}",
    "用户自定义CSS": "User custom CSS",
    "导入的美化主题 [{name, author, variables, css}]": "Imported themes [{name, author, variables, css}]",
    "全局表格（跨角色卡共享）": "Global tables (shared across character cards)",
    "显示顶部导航栏图标": "Show top navbar icon",
    "自定义表格填写规则提示词（空=使用默认）": "Custom table fill prompt (empty = use default)",
    "发送场景记忆（地点固定特征描述）": "Send location memory (fixed place features)",
    "自定义场景记忆提示词（空=使用默认）": "Custom location prompt (empty = use default)",
    "发送关系网络": "Send relationships network",
    "发送情绪/心理状态追踪": "Send mood/psychological state tracking",
    "自定义关系网络提示词（空=使用默认）": "Custom relationship prompt (empty = use default)",
    "自定义情绪追踪提示词（空=使用默认）": "Custom mood prompt (empty = use default)",

    // Auto-summary
    "自动摘要开关": "Auto-summary enabled",
    "保留最近N条消息不压缩": "Keep recent N messages uncompressed",
    "缓冲阈值（楼层数或Token数）": "Buffer threshold (messages or tokens)",
    "单次摘要最大消息条数": "Max messages per summary batch",
    "单次摘要最大Token数": "Max tokens per summary batch",
    "是否使用独立API端点": "Use custom API endpoint",
    "独立API端点地址（OpenAI兼容）": "Custom API URL (OpenAI-compatible)",
    "独立API密钥": "Custom API key",
    "独立API模型名称": "Custom API model name",
    "反转述模式：AI回复时结算上一条USER的内容": "Anti-paraphrase mode: AI responses consider the previous USER message",
    "番外/小剧场模式：启用后可标记消息跳过Horae": "Sideplay mode: can mark messages to skip Horae when enabled",

    // RPG
    "RPG 模式总开关": "RPG mode master switch",
    "发送属性条（HP/MP/SP/状态）": "Send RPG bars (HP/MP/SP/status)",
    "发送技能列表": "Send skill list",
    "发送多维属性面板": "Send attribute panel",
    "发送声望数据": "Send reputation data",
    "发送装备栏（可选）": "Send equipment (optional)",
    "发送等级/经验值": "Send level/experience",
    "发送货币系统": "Send currency",
    "RPG全局仅限主角（总开关，联动所有子模块）": "RPG global user-only (master toggle, ties all submodules)",
    "发送据点/基地系统": "Send stronghold/base system",
    "力量": "Strength",
    "物理攻击、负重与近战伤害": "Physical attack, carrying capacity, and melee damage",
    "敏捷": "Dexterity",
    "反射、闪避与远程精准": "Reflex, evasion, and ranged accuracy",
    "体质": "Constitution",
    "生命力、耐久与抗毒": "Vitality, endurance, and poison resistance",
    "智力": "Intelligence",
    "学识、魔法与推理能力": "Learning, magic, and reasoning",
    "感知": "Wisdom",
    "洞察、直觉与意志力": "Insight, intuition, and willpower",
    "魅力": "Charisma",
    "说服、领导与人格魅力": "Persuasion, leadership, and personal charm",

    // equipment templates (examples)
    "人类": "Human",
    "兽人": "Orc",
    "翼族": "Winged",
    "人马": "Centaur",
    "拉弥亚": "Lamia",
    "恶魔": "Demon",
    "头部": "Head",
    "躯干": "Torso",
    "手部": "Hands",
    "腰带": "Belt",
    "下身": "Lower body",
    "足部": "Feet",
    "项链": "Necklace",
    "护身符": "Amulet",
    "戒指": "Ring",
    "尾部": "Tail",
    "翅膀": "Wings",
    "马甲": "Horse torso",
    "马蹄铁": "Horseshoe",
    "蛇尾饰": "Serpent tail accessory",
    "角饰": "Horn accessory",

    // runtime/UI messages (common)
    "[Horae] doNavbarIconClick 不可用，使用旧版抽屉模式": "[Horae] doNavbarIconClick not available, using legacy drawer mode",
    "[Horae] 已自动迁移属性面板配置到 DND 六维": "[Horae] Attribute panel configuration automatically migrated to DND six stats",
    "表格已导出": "Table exported",
    "无效的表格数据": "Invalid table data",
    "导入的表格": "Imported table",
    "表格已导入": "Table imported",
    "导入失败: ": "Import failed: ",
    "更新时间显示（标准日历显示周几）": "Update date display (standard calendar shows weekday)",
    "未设置": "Not set",
    "暂无在场角色服装记录": "No costume records for present characters",
    "暂无物品追踪": "No item tracking",
    "退出多选": "Exit multi-select",
    "多选模式": "Multi-select mode",
    "摘要": "Summary",
    "已展开为原始事件": "Expanded to original events",
    "自动": "Auto",
    "手动": "Manual",
    "切换为摘要": "Toggle to summary",
    "删除摘要": "Delete summary",
    "编辑摘要内容": "Edit summary content",
    "点击编辑添加摘要内容。": "Click to edit and add summary text.",
    "摘要已删除，原始事件已恢复": "Summary deleted; original events restored",
    "已删除事件": "Event deleted",
    "编辑摘要": "Edit summary",
    "摘要内容不能为空": "Summary content cannot be empty",
    "摘要已更新": "Summary updated",

    // ... (additional mappings can be added as needed)
};

export default TRANSLATIONS;
