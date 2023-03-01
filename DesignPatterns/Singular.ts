// 要求有且仅有一个管理类产生

class SoundManager {
	private static instance: SoundManager
	private constructor() {
		return SoundManager.Instance()
	}
	
	static Instance() {
		if (!SoundManager.instance) {
			SoundManager.instance = new SoundManager()
		}
		return SoundManager.instance
	}
}

SoundManager.Instance()