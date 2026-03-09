# Horae - 时光记忆 v1.9.0 | SillyTavern 记忆增强插件

![Image](https://github.com/SenriYuki/SillyTavern-Horae/blob/main/HoraeLogo.jpg)

> Horae – Goddess of Season in Greek mythology

You must have encountered the old problem of long-form RP players - the AI's memory is about the same as a goldfish: yesterday's events are said to be this morning, and even what happened a few days ago is always said to be yesterday; In the previous scene, he wore a school uniform, and in the next scene, he suddenly wore casual clothes; NPC relationship is inverted; The gifts sent out disappear into thin air, and the lost things are returned to the hands.

Horae uses structured time anchors to equip your AI with a reliable memory ledger.

Highlight features
RPG Mode - Health Bar, Skills, and Stats at a Glance (New) An RPG system tailored for Western Fantasy/Cultivation/Combat character cards. When enabled, the AI will output character attributes (HP/MP/SP and custom attributes), status ailments, and skill changes in the tab. The simple HUD status bar is automatically rendered above the bottom message bar, and the RPG tab on the top panel displays a detailed list of attributes and skills. The name and color of the attribute bar can be customized, and the skills are linked to NPC characters. No prompt words are injected or tokens are consumed when closing. Support adjusting the background color and transparency of the RPG status bar separately in the self-service beautification tool.<horaerpg>

Vector Memory Engine - Retrieve Folded Details (NEW) An intelligent outer brain designed for "Auto Summarize & Hide"! Hundreds of thousands of words of long stories are compressed and all the details are lost? Now when a conversation touches on a historical event, the plugin will automatically recall the relevant clip from the old timeline that was hidden. The whole process relies on Web Worker pure local computing, zero API consumption, and a smooth interface without lag (30-60MB model cache needs to be downloaded for the first run, and Chinese-optimized bge and multilingual e5 dual models are ⚠ available, mobile phones or cloud pubs under 2GB are recommended not to use).

Beginner Navigation - Don't Get Lost for the First Time (New) First-time users of Horae automatically trigger an interactive tour that walks you through the functional areas and settings. From basic concepts to advanced features (context depth, injection placement, custom prompts, etc.) in one place. Old users can "restart teaching" at any time in the settings.

Self-service beautifier – a non-CSS and customizable (new) visual beautification panel designed for non-code-free users. Use the hue bar, saturation/brightness slider to quickly grade colors, switch between day and night mode with one click, and import image URLs to decorate the drawer head, background, and bottom message bar. All modifications are previewed in real time, and you can save them when you are satisfied and export them for sharing. Of course, the theme JSON import/export and handwritten CSS are also reserved for advanced users. (⚠️ You don't need to ask me for permission to beautify the Horae plugin, please feel free.) ）

Scene Memory - Taverns no longer change overnight (new). AI describes the same place, the last time there was a fireplace, this time it is gone? Scene memory records the fixed physical characteristics of a location, which are automatically injected the next time you enter the same scene. Smart match place names ("Tavern/Hall" automatically reverts to "Tavern"), only the matched description is sent, and zero injection is injected if it misses.

Emotions & Relationship Network - AI Understands Interpersonal Scenes (NEW) Emotion tracking allows AI to remember a character's current mental state, no longer crying one second and laughing a second later. The relationship network records the types and changes of relationships between characters, and never again writes enemies as friends. Both are change-driven, with zero output when there is no change.

Automatic summary - long automatic saving token chat for hundreds of floors and still sending it in full? Automatic summary In the background, the old message is automatically compressed into a summary, and the original floor saves the token. Summary and original timeline can be switched at any time with one click, and what you see is what you see. It can also be equipped with a low-cost independent API for true parallelism, and summary generation does not occupy the main connection at all./hide

Vector memory – Let AI recall hidden details (NEW) An intelligent recall system used with automatic summarization. Old message details after summary compression are not lost - when a conversation involves a historical event, the plugin automatically recalls relevant fragments from the hidden timeline to inject context. Perform the entire process locally, without consuming additional APIs. It supports two types of model selection: Chinese optimization and multilingual model.

AI Smart Summary Old Archives Haven't used Horae? All historical messages are scanned in batches with one click, and AI automatically extracts plot events and item changes to generate a complete timeline. You can customize the upper limit of tokens for each batch to adapt to different models, and you can cancel it with one click if you are not satisfied.

Say goodbye to "Forever Yesterday" plugin automatically calculates relative time and injects life-like expressions such as "yesterday", "last Wednesday", and "15th of last month". AI can finally tell the difference between the day before yesterday and last week. Support a variety of calendar systems such as modern, historical, fantasy and overhead.

No more random clothes Each character's current outfit is locked and only the outfits of the characters present are sent. Characters will no longer inexplicably change yesterday's clothes, and they will no longer send clothes from people who are not present to AI to waste tokens.

NPCs will not become more and more blurry The fields such as appearance, personality, and relationships are tracked independently. The age will also automatically advance with the plot time. The prompt of the relationship is strictly established, and the AI output in the next second no longer says that the user owes Char money, reversing the relationship.

The inventory is finally reliable with a unique numbered item system, divided into three levels: general/important/critical. Intelligently analyze quantity changes (5 pounds→4 pounds), automatically detect "consumed" and other statuses and remove them.

To-do items are not forgotten AI can automatically record conventions and foreshadowing in the plot, and automatically delete them after completion. Never worry about AI forgetting a date you made two weeks ago again.

Baby food level custom form Excel-style free form, if you want to add rows, add rows, add columns, and fill in prompts for AI to fill in automatically. Curriculum, role relationships, task lists...... You can do anything you can think of. When you delete a message, the content filled in by the AI will automatically fall back, and your own content will always be retained.

Change-driven, save tokens The AI only outputs information about changes in the current round, and no longer repeats the entire state each time. Each type of data has clear trigger rules to reduce invalid outputs. No additional generation times - the plugin automatically parses memory nodes when the AI replies normally, with zero additional overhead.

Don't be afraid of truncation/rewriting Truncated in the middle or manually rewritten part of the plot yourself? The bottom bar has a built-in AI analysis function, which can intelligently complete the memory nodes of the message with just one generation.

The interface is simple, cute and friendly The bottom bar is clear at a glance, and the top panel is clearly pagination. No complex configuration required, ready to install.

Free control over what you send freely Choose what data is sent to the AI and what isn't in the settings - no role tracking required? Turn off. Don't need inventory? Turn off. Combine on demand to save tokens.

Quick installation
Open the SillyTavern → top extension panel (block icon) → "Install Extension"
Paste the Git link of this repository and click Install
Refresh the page after the installation is complete and you can use it
The companion regex is automatically injected when the plugin is loaded for the first time, eliminating the need for manual import.

v1.1.0 Updates
AI Intelligent Summarization: Analyze historical messages in batches, automatically extract plot events and items, and support custom token batch limits, which can be revoked with one click
Token counter: Displays the total amount of prompts sent to AI, located below the settings. As a side note, the current plugin sends 3,591 tokens when it runs
swipe adaptation: Fixed an issue where when swiping right to generate a new tab, the memory data of the old page will be brought into the new generation. Swipe now automatically excludes old memories of the current pagination when generating, ensuring that the AI generates a new story branch based on the correct context
Beautification compatibility: The plugin UI style is isolated from the external beautification theme, and there is no longer black on black or white on white
Regular modification: Set it to not send to AI as well, which saves tokens
Description correction: Correct the description of some features to a more accurate description
v1.2.0 Update Details
Custom prompts: A new prompt editor has been added to the settings, which allows you to freely modify the system injection prompts and AI summary prompts, support/variables, and can restore the default with one click, making it easy to fine-tune{{user}}{{char}}
AI Summary Function Added: Generation can now be interrupted, and pop-up windows have added "NPC Character Information" and "Favorability" checkboxes. Off by default, on demand
Summary Review Pop-up: After the AI intelligent summary is completed, a review window will pop up, displaying the results by "Plot Track/Items/Characters/Favorability". Delete unsatisfactory content one by one, click "Supplementary Summary" to rerun AI only for deleted items
Favorability display switch: A small eye button has been added to the favorability area, which can be clicked to hide/show character favorability
Favorability Delete: A new delete button has been added to the Edit Favorability pop-up window, which allows you to delete the items that generated errors generated by AI
Beautification compatibility: Emphasizes the internal word color of the CHECKBOX, and no longer appears white on a white background
v1.3.0 Updates
Global table: Added two scopes: Global and Local to the custom table. Global tables are shared across role cards and are suitable for recording fixed data (such as role ID tables). Click the icon in front of the table name to switch between them
Row Locking: Right-click/long-press on a table cell to lock rows, columns, or individual grids, preventing AI modifications. Lock the content to mark 🔒 in the prompt, and the AI will skip writing
One-click table clearing: A new eraser button has been added to the table action bar to clear all data area contents but keep the table header, making it easier for AI to refill the form
Theme system: Built-in "Cherry Blossom Pink", "Forest Green" and "Ocean Blue" three sets of preset themes, which can be used immediately. Support importing/exporting custom beautified JSON files to facilitate community sharing of themes
Beautify navigation: Added a new document that lists all CSS variables, main container class names, and beautified file formats to facilitate users to customize their themesTHEME.md
Day and night mode: You can switch between day/night mode in the settings, which only affects the plug-in interface
Custom CSS: Additional CSS code can be entered in the settings to fine-tune the plugin style
Right-click menu fix: Fix the issue of right-click menu transparency (CSS variable scope does not override level elements)document.body
Style isolation enhancements: All buttons are replaced with plugin-specific class names, and the top bar icons are no longer affected by light mode
Message panel width: Customizable message panel width (50-100%) in settings
Regular bottoming: Plugins are automatically moved to the end of the list when they start, reducing conflicts with other regulars
Timeline multi-selection: Timeline events can be deleted in batches by long-pressing multiple selections (to avoid accidental touches that have a long trigger time).
v1.4.0 Update Details
Favorability decimal point support: The favorability value fully supports decimals, and is compatible with the world's book and other favorability systems that step by decimal point
Top icon switch: Added a new "Show top navigation bar icon" switch in the settings. It can be reopened by using the "Horae Time Memory" field in the expansion panel (block icon).
Timeline insertion function: Long press the timeline event to pop up the operation menu, and you can add events or insert the summary page at the top/bottom. The summary page is used to replace the deleted intermediate timeline, saving tokens while preserving key information
Timeline multi-select improvements: multi-select mode changed to tap the top button to switch (the original long press trigger has been changed to insert menu)
Summary page: Added "Summary" event type, no timestamp display, blank state prompts the user "Do not delete the opening timeline"
Customize the prompt for filling in the form: The "Form Filling Rule Prompt" editor has been added to the custom prompt area, which allows you to freely modify the AI form filling rules and support one-click restoration of defaults
Table AI Understanding Enhancement: Table data sent to AI is now labeled with coordinates (e.g. ) and size declarations, significantly reducing AI misplacement[1,2]内容
Table Data Cleaning Fix: When deleting a table or clearing it with one click, it simultaneously clears the AI history (tableContributions) and baseline snapshot (baseData) in all messages, completely eliminating the reflow of old data
v1.5.0 Update Details
This update revolves around RP "Fineness" and "Long-Length Saving Tokens".

What's new
Emotional/psychological state tracking: Track the emotional changes of the characters present (e.g. "nervous/uneasy", "happy/expectant"). The bottom bar automatically displays the sentiment label for the current character. Token consumption is extremely low – AI only outputs labels (usually 10-20 tokens) when there is a noticeable change in sentiment tags, and zero output when there is no change. It can be toggled on and off in the settingsmood:
Relationship network: Record the relationship between characters (friends, lovers, superiors and subordinates, old enemies, etc.). The NPC page displays a list of relationships at the bottom, which can be edited manually. The relationship display in the bottom column is completely read and rendered by the plugin from the database, without consuming AI output tokens. The AI side adopts change-driven: only outputs the label when the relationship changes, and outputs zero when the existing relationship has no change. It can be toggled on and off in the settingsrel:
Scene memory: Record the fixed physical characteristics of the location to maintain consistent cross-round scene description. Smart retrieval - the plugin matches the recorded scene description based on the current location name, and only sends the matching one (usually 50-150 words), instead of sending all the location memories. Zero injection when not matched to any location. Support compound place name revert matching (e.g. "Tavern/Hall"→ "Tavern")
Auto Summarize & Hide: Enabled in the settings to automatically trigger full-text summarization when the number of uncompressed messages exceeds the threshold. After the summary is completed, the original message floor is saved with a token, and a summary card appears in the timeline. You can switch between "Summary View" and "Raw Timeline" at any time with the click of a button, and what you see is what you see/hide
Standalone API (true parallelism): Automatic summarization can be configured with independent OpenAI-compatible endpoints (just fill in the API address / key / model name). Summary generation is done through direct HTTP requests, completely without occupying the tavern master connection, enabling true parallelism with AI responses. Supports all compatible endpoints like OpenAI, DeepSeek, OpenRouter, and more
Story Compression Cancellation Button: A new cancel button has been added for event compression and full-text summarization, which immediately interrupts backend API requests after clicking (consistent with the cancel button in AI Smart Summary)
Table branch inheritance: When opening a branch or fallback message, the table data is only inherited by AI filling up to that node and manual editing by the user. For example, if you open a branch in #10, only the table data before #10 will be inherited, and will not be carried into subsequent fills
Improved
Global Table Data Separation by Card: The structure of the global table (header, name, prompt, lock) is shared across role cards, but the fill data is stored separately by role card. Switch cards no longer inherit table data from other cards
Intelligent memory compression: In timeline multi-selection mode, multiple events can be compressed and merged into a single summary, supporting two-way switching between the summary view and the original timeline
The default text in the system prompt editor is dynamically updated based on the currently enabled feature (e.g. the label formatting area automatically appears when the relationship network is enabled rows)<horae>rel:
UI / UX
Fix undefined variables and use instead. Existing custom beautification is not affected--horae-surface--horae-bg-secondary
THEME.md Added new selector documentation
⚠️ Upgrade reminders
If you have previously customized the system injection prompt, please go to Settings → Customize the prompt after upgrading to v1.5.0, and click the Reset button next to 🔄 each column to restore to the latest default value. Because the new scene memory, emotion tracking, and relational network functions need to declare the corresponding label format (, , ) in the prompt, the lack of these declarations in the old custom prompt will cause the AI not to output new tags.scene_desc:mood:rel:

If you haven't customized the prompt (using the default value), you don't need to do anything, the plugin will automatically use the latest default prompt.

v1.6.0 Update Details
Self-service beautification tool: A visual beautification panel designed for users who can't write CSS. Hue bars, saturation/brightness/day/night mode sliders, accent color selection, and quick swatch previews are available. Supports importing image URLs to decorate the drawer head, drawer background, and bottom message bar, and adjusts visibility. Support setting the background color of the drawer independently. All modifications are previewed in real time, and if you are satisfied, you can save it as a custom theme with one click, and you can export JSON to share after filling in the name and author
Beginner Navigation: New users of Horae for the first time will automatically trigger interactive tutorials that highlight the function panels and settings (context depth, injection location, auto-summarization, custom prompts, custom tables, etc.) to guide new users to get started. Old users can click "Restart Teaching" in the settings to review at any time
Sub-API Breaker Injection: Standalone API requests for automatic summarization are now automatically injected with SillyTavern's jailbreak prompt and parameter, reducing empty replies due to content moderationmax_tokens
⚠️ Upgrade reminders
If you have customized the system injection prompt before, please go to Settings → Customize the prompt after upgrading to v1.6.0, and click 🔄 the Reset button to restore to the latest default value. This release has significantly enhanced the mandatory filling requirements for fields such as persona and favorability, and the old custom prompt may lack these emphasis tags.

If you haven't customized the prompt (using the default value), you don't need to do anything.

v1.7.0 Update Details
This update adds a vector memory system so that users of automatic summarization no longer lose details due to compression.

What's new
Vector Memory (Beta): An intelligent memory system based on local AI models, designed for "Auto Summarize & Hide". When historical events are involved in a conversation, the plugin automatically recalls relevant timeline snippets from hidden old messages, injecting context for AI reference

Fully local computing: Run lightweight AI models using browser-built web workers without consuming additional API credits. For the first use, you need to download a model file of about 30-60MB (cached in the browser afterwards)
Dual models are available :(Chinese optimized) and (multilingual support), which can be selected as neededbge-small-zh-v1.5multilingual-e5-small
Intelligent retrieval: Combines three-layer search strategies of intent recognition, structured query, and semantic search. For example, "Mention and Character First Meeting" will directly look for the character's first appearance message, without relying on fuzzy matching
Contextual association: Adjacent events before and after the hit message will also be automatically brought in to restore the complete event context
Full-text recap: High-confidence recall results send the original body (automatically filtering the chain of thought), allowing the AI to get full narrative details rather than just a timeline summary. The number of bars and the threshold can be customized, and set to 0 to turn off
Abstract isolation: Automatically exclude the content of the abstract and only use the original timeline data to participate in the retrieval to avoid duplicate abstract injection
v1.8.0 Update Details
RPG mode: After turning on, the AI outputs character attributes and skill changes through tags, without interfering with existing tags<horaerpg><horae>

Custom attribute bar: Default HP/MP/SP three, users can freely add, delete, modify the display name and color (such as changing MP to "spiritual power", adding "energy value", "desire value", etc.)
Status abnormal tracking: Supports dozens of status keywords such as stun, bleeding, freezing, burning, and petrification, and automatically matches differentiated icon displays
Skill system: Record skill attribution, level, and effect description, and link skills with NPC characters through numbering, supporting manual addition and automatic AI generation
Bottom HUD Status Bar: A simple status bar rendered above the message panel for the characters present, displaying the attribute bar and abnormal status icons, and automatically following the width and offset settings of the bottom bar
RPG Tab: A new RPG tab has been added to the top panel to display the configuration of the attribute bar, detailed attributes and status lists of each character, and skill list
Conditional injection: No prompt words are injected when RPG mode is turned off, and zero token consumption is required. The send attribute bar and skill list can be toggled on and off independently
RPG Panel Beautification: The self-service beautification tool has added an "RPG Status Bar" area to support setting background color and transparency. RPG HUD incorporates a theme system, following a day and night pattern and custom theme variables
⚠️ Upgrade reminders
If you have customized the system injection prompt before, please go to Settings → Customize the prompt after upgrading to v1.8.0, and click 🔄 the Reset button to restore to the latest default value. RPG mode requires a new prompt declaration to work properly.

If you haven't customized the prompt (using the default value), you don't need to do anything.

v1.9.0 Update Details
Automated summaries & sub-APIs
Sub-API Multi-Round Structure Transformation: Reconstruct the message structure of summary requests, adopt the system/assistant/user multi-round alternating format, and embed assistant confirmation replies and prefills, greatly improving the summarization pass rate of NSFW content. At the same time, it automatically injects the main prompt, NSFW allowed prompt, and limit breaking prompt in the tavern preset
Model drop-down menu: The model settings in Sub-API, Embedding, and Rerank are changed from text input to drop-down menus. After filling in the API address and key, click the refresh button to pull the list of available models without manually entering the model name
Automatic Summary Warning Optimization: No longer completely blocks summaries due to missing timestamps on some floors. Instead, it shows in detail which floors are missing timestamps or timeline events (such as ), and only pops up a warning alert when more than 50% is missing, but doesn't prevent the summary from being executed缺时间戳: #5, #8, #12
Vector memory
Full-text exclusion label: A new "full-text exclusion label" input box has been added to the vector settings. Users can fill in custom tag names (such as , ), and the entire content wrapped in these tags will be removed when full-text review and Rerank full-text refinement to avoid AI recall of non-plot content such as small theater/narrationsnow, theater
Extra Message Isolation: Messages marked as "extra" () are no longer vector indexed and recalled, ensuring that the content of the small theater mode does not pollute the memory retrieval of the official plot_skipHorae
Compatibility
SillyTavern: 1.12.6+ (AI analysis function requires 1.13.5+)
Platform: Desktop + mobile dual-end adaptation
If there are bugs or suggestions, feedback is welcome!

Author: SenriYuki
