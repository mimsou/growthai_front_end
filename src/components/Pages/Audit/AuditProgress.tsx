import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { apiEndpoints, ApiEndpointConfig } from "enum/apiEndpoints";
import AuditCard from "components/Pages/Audit/AuditCard";

interface AuditProgressInterface {
    className?: string;
}

const AuditProgress: React.FC<AuditProgressInterface> = () => {
    const [opacity, setOpacity] = useState<number>(0);

    useEffect(() => {
        const timer = setTimeout(() => setOpacity(1), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ opacity, transition: 'opacity 1s ease-in-out' }}>
            <div className="grid grid-cols-3 gap-3">
                {apiEndpoints.map((endpoint: ApiEndpointConfig, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <AuditCard
                            className="bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
                            endpoint={endpoint}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AuditProgress;