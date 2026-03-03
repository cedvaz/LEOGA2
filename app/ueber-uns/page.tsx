import { SubpageHero } from "@/components/layout/SubpageHero";
import { History, Heart, Users, Shield, Target, Leaf } from "lucide-react";

export default function UeberUnsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SubpageHero
                title="Über uns"
                subtitle="60 Jahre Erfahrung. Ein Familienunternehmen mit Wurzeln und Vision."
                imageSrc="/story_meeting.png"
            />

            {/* Philosophy Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">Fairness ist unser <span className="text-primary italic">Fundament.</span></h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                LEOGA wurde mit dem Ziel gegründet, die Energiewende dort voranzutreiben, wo sie stattfindet: In der Region, auf dem Land, im Dialog mit den Menschen. Als Familienunternehmen blicken wir auf eine 60-jährige Geschichte zurück, die von handwerklichem Geschick, unternehmerischem Mut und verlässlichen Partnerschaften geprägt ist.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Wir verstehen uns nicht als kurzfristige Projektentwickler, sondern als langfristige Begleiter Ihrer Energieprojekte. Wenn wir einen Pachtvertrag unterschreiben, dann ist das der Beginn einer 25-jährigen Partnerschaft.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square bg-primary/5 rounded-3xl p-8 flex flex-col justify-end">
                                <History className="text-primary mb-4" size={32} />
                                <p className="font-bold text-gray-900">Tradition</p>
                                <p className="text-sm text-gray-500">Seit 60 Jahren am Markt</p>
                            </div>
                            <div className="aspect-square bg-secondary/5 rounded-3xl p-8 flex flex-col justify-end">
                                <Heart className="text-secondary mb-4" size={32} />
                                <p className="font-bold text-gray-900">Leidenschaft</p>
                                <p className="text-sm text-gray-500">Für grüne Lösungen</p>
                            </div>
                            <div className="aspect-square bg-accent/10 rounded-3xl p-8 flex flex-col justify-end">
                                <Shield className="text-accent-foreground mb-4" size={32} />
                                <p className="font-bold text-gray-900">Stabilität</p>
                                <p className="text-sm text-gray-500">Sichere Partnerschaft</p>
                            </div>
                            <div className="aspect-square bg-gray-50 rounded-3xl p-8 flex flex-col justify-end">
                                <Users className="text-gray-400 mb-4" size={32} />
                                <p className="font-bold text-gray-900">Familie</p>
                                <p className="text-sm text-gray-500">Inhabergeführt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Werte</h2>
                        <p className="text-gray-400">Das Versprechen, an dem wir uns messen lassen.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-secondary mx-auto mb-6">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Fair</h3>
                            <p className="text-gray-400 leading-relaxed">Wir bieten Pachtverträge, die beiden Seiten Freude bereiten. Keine versteckten Klauseln, sondern transparente Konditionen.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-secondary mx-auto mb-6">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Stabil</h3>
                            <p className="text-gray-400 leading-relaxed">Als Familienunternehmen sind wir krisenfest. Uns gibt es seit 60 Jahren und uns wird es auch in den nächsten 60 Jahren geben.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-secondary mx-auto mb-6">
                                <Leaf size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Nachhaltig</h3>
                            <p className="text-gray-400 leading-relaxed">Nachhaltigkeit bedeutet für uns mehr als nur CO2-Ersparnis. Es bedeutet ökologischen Mehrwert und regionalen Wohlstand.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
